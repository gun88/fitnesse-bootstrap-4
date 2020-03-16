import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {JumbotronComponent} from './component/jumbotron/jumbotron.component';
import {FooterComponent} from './component/footer/footer.component';
import {FrontPageComponent} from './page/front-page/front-page.component';
import {NotFoundComponent} from './page/not-found/not-found.component';
import {ReadmeComponent} from './component/readme/readme.component';
import {HttpClientModule} from "@angular/common/http";
import {RecapTableComponent} from './component/recap-table/recap-table.component';
import {SuiteDemoTestsComponent} from './page/suite-demo-tests/suite-demo-tests.component';
import {SetUpComponent} from './page/suite-demo-tests/set-up/set-up.component';
import {TypographyShowcaseComponent} from './page/suite-demo-tests/typography-showcase/typography-showcase.component';
import {TestSuccessCaseComponent} from './page/suite-demo-tests/test-success-case/test-success-case.component';
import {TestIgnoreCaseComponent} from './page/suite-demo-tests/test-ignore-case/test-ignore-case.component';
import {TestWarningCaseComponent} from './page/suite-demo-tests/test-warning-case/test-warning-case.component';
import {TestErrorCaseComponent} from './page/suite-demo-tests/test-error-case/test-error-case.component';
import {DisabledFunctionComponent} from './page/disabled-function/disabled-function.component';
import {ExecutionPageComponent} from './page/execution-page/execution-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    FrontPageComponent,
    NotFoundComponent,
    ReadmeComponent,
    RecapTableComponent,
    SuiteDemoTestsComponent,
    SetUpComponent,
    TypographyShowcaseComponent,
    TestSuccessCaseComponent,
    TestIgnoreCaseComponent,
    TestWarningCaseComponent,
    TestErrorCaseComponent,
    DisabledFunctionComponent,
    ExecutionPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
