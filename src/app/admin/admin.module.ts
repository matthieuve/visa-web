import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@shared';
import {HighchartsChartModule} from 'highcharts-angular';

import {ROUTES} from './admin.routing';
import {
    ActivatedUsersCountComponent,
    ActiveInstanceSessionCountStatComponent,
    CloudHeaderComponent,
    CloudLimitBoxComponent,
    FlavourCountStatComponent,
    FlavourDistributionBoxComponent,
    HeaderComponent,
    ImageCountStatComponent,
    ImageDistributionBoxComponent,
    CloudClientDistributionBoxComponent,
    InstanceCountStatComponent,
    InstanceSessionCountStatComponent,
    InstanceStatesBoxComponent,
    JupyterSessionCountStatComponent,
    LatestActiveUsersBoxComponent,
    LatestInstancesBoxComponent,
    LatestJupyterSessionsBoxComponent,
    LatestSessionsBoxComponent,
    SettingsHeaderComponent,
    ComputeHeaderComponent,
} from './common';
import {
    ApplicationCredentialDeleteComponent,
    ApplicationCredentialNewComponent,
    ApplicationCredentialsComponent,
    ApplicationCredentialUpdateComponent,
    DashboardComponent,
    FlavourDeleteComponent,
    FlavourEditComponent,
    FlavoursComponent,
    ImageDeleteComponent,
    ImageEditComponent,
    ImagesComponent,
    InstanceActivate,
    InstanceAttributesComponent,
    InstanceCloudDetailsComponent,
    InstanceComponent,
    InstanceExperimentsComponent,
    InstanceMembersComponent,
    InstancesComponent,
    InstanceSessionsComponent,
    InstancesFilterComponent,
    NotificationDeleteComponent,
    NotificationsComponent,
    NotificationUpdateComponent,
    PlansComponent,
    PlanEditComponent,
    CloudClientsComponent,
    CloudClientEditComponent,
    CloudClientDeleteComponent,
    SecurityGroupDeleteComponent,
    SecurityGroupFilterDeleteComponent,
    SecurityGroupFilterNewComponent,
    SecurityGroupFiltersComponent,
    SecurityGroupImportComponent,
    SecurityGroupsComponent,
    SecurityGroupsOverviewComponent,
    SessionsComponent,
    UserActivate,
    UserComponent,
    UserExperimentsComponent,
    UsersComponent,
    UserSearchComponent,
    UsersFilterComponent,
    UserEditComponent,
    ExtensionRequestsComponent,
    ExtensionRequestHandlerComponent,
} from './components';

@NgModule({
    imports: [
        SharedModule,
        HighchartsChartModule,
        RouterModule.forChild(ROUTES),
    ],
    providers: [
        InstanceActivate,
        UserActivate,
    ],
    declarations: [
        DashboardComponent,
        InstancesComponent,
        HeaderComponent,
        CloudHeaderComponent,
        SettingsHeaderComponent,
        ComputeHeaderComponent,
        InstanceComponent,
        ImagesComponent,
        ImageEditComponent,
        ImageDeleteComponent,
        ImageDistributionBoxComponent,
        FlavourDistributionBoxComponent,
        CloudClientDistributionBoxComponent,
        InstancesFilterComponent,
        CloudClientsComponent,
        CloudClientEditComponent,
        CloudClientDeleteComponent,
        PlansComponent,
        PlanEditComponent,
        FlavoursComponent,
        FlavourDeleteComponent,
        FlavourEditComponent,
        SessionsComponent,
        CloudLimitBoxComponent,
        LatestInstancesBoxComponent,
        LatestSessionsBoxComponent,
        LatestJupyterSessionsBoxComponent,
        InstanceStatesBoxComponent,
        ImageCountStatComponent,
        FlavourCountStatComponent,
        InstanceCountStatComponent,
        InstanceSessionCountStatComponent,
        JupyterSessionCountStatComponent,
        ActiveInstanceSessionCountStatComponent,
        ActivatedUsersCountComponent,
        InstanceSessionsComponent,
        InstanceCloudDetailsComponent,
        InstanceExperimentsComponent,
        InstanceMembersComponent,
        InstanceAttributesComponent,
        NotificationsComponent,
        NotificationUpdateComponent,
        NotificationDeleteComponent,
        UserSearchComponent,
        UserExperimentsComponent,
        LatestActiveUsersBoxComponent,
        SecurityGroupsComponent,
        SecurityGroupsOverviewComponent,
        SecurityGroupImportComponent,
        SecurityGroupFiltersComponent,
        SecurityGroupFilterNewComponent,
        SecurityGroupFilterDeleteComponent,
        SecurityGroupDeleteComponent,
        UserComponent,
        UsersComponent,
        UserEditComponent,
        UsersFilterComponent,
        ApplicationCredentialsComponent,
        ApplicationCredentialNewComponent,
        ApplicationCredentialDeleteComponent,
        ApplicationCredentialUpdateComponent,
        ExtensionRequestsComponent,
        ExtensionRequestHandlerComponent,
    ],
    exports: [
        DashboardComponent,
    ],
    entryComponents: [
        ImageEditComponent,
        ImageDeleteComponent,
        FlavourEditComponent,
        PlanEditComponent,
        SecurityGroupImportComponent,
        SecurityGroupFilterNewComponent,
        SecurityGroupFilterDeleteComponent,
        SecurityGroupDeleteComponent,
        CloudClientEditComponent,
        CloudClientDeleteComponent,
        NotificationUpdateComponent,
        NotificationDeleteComponent,
        ApplicationCredentialNewComponent,
        ApplicationCredentialDeleteComponent,
        ApplicationCredentialUpdateComponent,
        UserEditComponent,
        ExtensionRequestHandlerComponent,
    ],
})
export class AdminModule {

}
