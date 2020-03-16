import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontPageComponent} from "./page/front-page/front-page.component";
import {SuiteDemoTestsComponent} from "./page/suite-demo-tests/suite-demo-tests.component";
import {SetUpComponent} from "./page/suite-demo-tests/set-up/set-up.component";
import {TestErrorCaseComponent} from "./page/suite-demo-tests/test-error-case/test-error-case.component";
import {TestIgnoreCaseComponent} from "./page/suite-demo-tests/test-ignore-case/test-ignore-case.component";
import {TestWarningCaseComponent} from "./page/suite-demo-tests/test-warning-case/test-warning-case.component";
import {TestSuccessCaseComponent} from "./page/suite-demo-tests/test-success-case/test-success-case.component";
import {TypographyShowcaseComponent} from "./page/suite-demo-tests/typography-showcase/typography-showcase.component";
import {DisabledFunctionComponent} from "./page/disabled-function/disabled-function.component";
import {NotFoundComponent} from "./page/not-found/not-found.component";


const routes: Routes = [
  {path: '', redirectTo: '/FrontPage', pathMatch: 'full'},
  {path: 'FrontPage', component: FrontPageComponent},
  {path: 'FrontPage.SuiteDemoTests', component: SuiteDemoTestsComponent},
  {path: 'FrontPage.SuiteDemoTests.SetUp', component: SetUpComponent},
  {path: 'FrontPage.SuiteDemoTests.TestErrorCase', component: TestErrorCaseComponent},
  {path: 'FrontPage.SuiteDemoTests.TestIgnoreCase', component: TestIgnoreCaseComponent},
  {path: 'FrontPage.SuiteDemoTests.TestWarningCase', component: TestWarningCaseComponent},
  {path: 'FrontPage.SuiteDemoTests.TestSuccessCase', component: TestSuccessCaseComponent},
  {path: 'FrontPage.SuiteDemoTests.TypographyShowcase', component: TypographyShowcaseComponent},
  {path: 'EditPage', component: DisabledFunctionComponent},
  {path: 'AddPage', component: DisabledFunctionComponent},
  {path: 'RefactorPage', component: DisabledFunctionComponent},
  {path: 'DeletePage', component: DisabledFunctionComponent},
  {path: 'properties', component: DisabledFunctionComponent},
  {path: 'whereUsed', component: DisabledFunctionComponent},
  {path: 'versions', component: DisabledFunctionComponent},
  {path: 'search', component: DisabledFunctionComponent},
  {path: 'files', component: DisabledFunctionComponent},
  // {path : 'ExecutionPage', component : ExecutionPageComponent},
  {path: 'ExecutionPage', component: DisabledFunctionComponent},

  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
