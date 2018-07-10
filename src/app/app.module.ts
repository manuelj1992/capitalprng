import 'chart.js/dist/Chart.min.js';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChartModule} from 'primeng/chart';
import {CardModule, InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {DashboardHelpComponent} from './dashboard-help/dashboard-help.component';
import {DashboardUploadComponent} from './dashboard-upload/dashboard-upload.component';
import {FileUploadModule} from 'primeng/fileupload';
import {DashboardPortfolioComponent} from './dashboard-portfolio/dashboard-portfolio.component';
import {DashboardPortfolioDetailComponent} from './dashboard-portfolio-detail/dashboard-portfolio-detail.component';
import {DashboardMatrixAnalysisComponent} from './dashboard-matrix-analysis/dashboard-matrix-analysis.component';
import {DashboardMatrixProbabilitiesComponent} from './dashboard-matrix-probabilities/dashboard-matrix-probabilities.component';
import {DashboardCorrelationsComponent} from './dashboard-correlations/dashboard-correlations.component';
import {DashboardCorrelationsAnalysisComponent} from './dashboard-correlations-analysis/dashboard-correlations-analysis.component';
import {DashboardRequirementsComponent} from './dashboard-requirements/dashboard-requirements.component';
import {DashboardRequirementsLossDistributionComponent} from './dashboard-requirements-loss-distribution/dashboard-requirements-loss-distribution.component';
import {TableModule} from 'primeng/table';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: DashboardHomeComponent},
      /* Portafolio */
      {path: 'portfolios', component: DashboardPortfolioComponent},
      {path: 'portfolios/:id', component: DashboardPortfolioDetailComponent},
      /* Matrices */
      {path: 'matrix/analysis', component: DashboardMatrixAnalysisComponent},
      {path: 'matrix/probabilities', component: DashboardMatrixProbabilitiesComponent},
      /* Requerimientos */
      {path: 'requirements', component: DashboardRequirementsComponent},
      {path: 'requirements/loss-distribution', component: DashboardRequirementsLossDistributionComponent},
      /* Correlaciones */
      {path: 'correlations', component: DashboardCorrelationsComponent},
      {path: 'correlations/analysis', component: DashboardCorrelationsAnalysisComponent},
      {path: 'help', component: DashboardHelpComponent},
      {path: 'upload', component: DashboardUploadComponent}
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    DashboardHomeComponent,
    DashboardHelpComponent,
    DashboardUploadComponent,
    DashboardPortfolioComponent,
    DashboardPortfolioDetailComponent,
    DashboardMatrixAnalysisComponent,
    DashboardMatrixProbabilitiesComponent,
    DashboardCorrelationsComponent,
    DashboardCorrelationsAnalysisComponent,
    DashboardRequirementsComponent,
    DashboardRequirementsLossDistributionComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    MenubarModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    FileUploadModule,
    CardModule,
    TableModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
