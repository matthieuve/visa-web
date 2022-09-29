import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FlavourInput, Plan, PlanInput} from '../../../core/graphql';
import gql from 'graphql-tag';
import {delay, map, startWith, switchMap, takeUntil, tap} from 'rxjs/operators';
import {Apollo} from 'apollo-angular';
import {lastValueFrom, Subject} from 'rxjs';
import {NotifierService} from 'angular-notifier';
import {Title} from '@angular/platform-browser';
import {PlanEditComponent} from '../plan-edit';

@Component({
    selector: 'visa-admin-plans',
    templateUrl: './plans.component.html',
})

export class PlansComponent implements OnInit, OnDestroy {

    private _plans: Plan[] = [];
    private _loading: boolean;
    private _destroy$: Subject<boolean> = new Subject<boolean>();
    private _refresh$: Subject<void> = new Subject();

    constructor(private readonly _apollo: Apollo,
                private readonly _notifierService: NotifierService,
                private readonly _dialog: MatDialog,
                private readonly _titleService: Title) {
    }

    get plans(): Plan[] {
        return this._plans;
    }

    get loading(): boolean {
        return this._loading;
    }

    public onRefresh(): void {
        this._refresh$.next();
    }

    public ngOnInit(): void {
        this._titleService.setTitle(`Plans | Cloud | Admin | VISA`);

        this._refresh$
            .pipe(
                startWith(0),
                takeUntil(this._destroy$),
                tap(() => this._loading = true),
                delay(250),
                switchMap(() => this._apollo.query<any>({
                    query: gql`
                        query allPlans {
                            plans {
                                id
                                image {
                                    id
                                    name
                                    description
                                    version
                                    icon
                                    computeId
                                    visible
                                    cloudClient {
                                        id
                                        name
                                    }
                                }
                                flavour {
                                    id
                                    name
                                    memory
                                    cpu
                                    computeId
                                }
                                preset
                            }
                        }
                    `
                })),
                map(({data}) => ({
                    plans: data.plans,
                })),
                tap(() => this._loading = false)
            )
            .subscribe(({plans}) => {
                this._plans = plans;
            });

    }

    public ngOnDestroy(): void {
        this._destroy$.next(true);
        this._destroy$.unsubscribe();
    }

    public onCreate(plan?: Plan): void {
        const dialogRef = this._dialog.open(PlanEditComponent, {
            width: '800px',
            data: { plan, clone: !!plan },
        });
        dialogRef.componentInstance.onSave$.subscribe((input: PlanInput) => {
            const source$ = this._apollo.mutate<any>({
                mutation: gql`
                    mutation CreatePlan($input: PlanInput!){
                        createPlan(input: $input) {
                            id
                            image {
                                id
                                name
                                description
                                icon
                                computeId
                                visible
                                cloudClient {
                                    id
                                    name
                                }
                            }
                            flavour {
                                id
                                name
                                memory
                                cpu
                                computeId
                            }
                        }
                    }
                `,
                variables: {input},
            }).pipe(
                takeUntil(this._destroy$)
            );
            lastValueFrom(source$).then(() => {
                this._notifierService.notify('success', 'Plan created');
                this._refresh$.next();
                dialogRef.close();
            }).catch((error) => {
                this._notifierService.notify('error', error);
            });
        });
    }

    public onUpdate(plan: Plan): void {
        const dialogRef = this._dialog.open(PlanEditComponent, {
            width: '800px', data: { plan },
        });

        dialogRef.componentInstance.onSave$.subscribe((input: PlanInput) => {
            const source$ = this._apollo.mutate<any>({
                mutation: gql`
                        mutation UpdatePlan($id: Int!,$input: PlanInput!){
                            updatePlan(id:$id,input:$input) {
                                id
                                image {
                                    id
                                    name
                                    description
                                    icon
                                    computeId
                                    visible
                                    cloudClient {
                                        id
                                        name
                                    }
                                }
                                flavour {
                                    id
                                    name
                                    memory
                                    cpu
                                    computeId
                                }
                            }
                        }
                    `,
                variables: {id: plan.id, input},
            }).pipe(
                takeUntil(this._destroy$)
            );
            lastValueFrom(source$).then(() => {
                this._notifierService.notify('success', 'Plan saved');
                this._refresh$.next();
                dialogRef.close();
            }).catch((error) => {
                this._notifierService.notify('error', error);
            });
        });
    }
}
