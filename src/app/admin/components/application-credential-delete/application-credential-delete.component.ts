import {Component, EventEmitter, Inject,  OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApplicationCredential} from '../../../core/graphql';

@Component({
    selector: 'visa-admin-application-credential-delete',
    styleUrls: ['./application-credential-delete.component.scss'],
    templateUrl: './application-credential-delete.component.html',
})
export class ApplicationCredentialDeleteComponent {

    private _onDelete$: EventEmitter<any> = new EventEmitter();

    get onDelete$(): EventEmitter<any> {
        return this._onDelete$;
    }

    get applicationCredential(): ApplicationCredential {
        return this._applicationCredential;
    }

    constructor(private _dialogRef: MatDialogRef<ApplicationCredentialDeleteComponent>,
                @Inject(MAT_DIALOG_DATA) private _applicationCredential) {
    }

    public onCancel(): void {
        this._dialogRef.close();
    }

    public onDelete(): void {
        this._onDelete$.emit();
        this._dialogRef.close();
    }

}
