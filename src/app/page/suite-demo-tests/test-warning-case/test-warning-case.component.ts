import { Component, OnInit } from '@angular/core';
import {BaseTestPage} from "../base-test-page/base-test-page";
import {PageService} from "../../../service/page.service";

@Component({
  selector: 'app-test-warning-case',
  templateUrl: './test-warning-case.component.html',
  styleUrls: ['./test-warning-case.component.scss']
})
export class TestWarningCaseComponent extends BaseTestPage {


  constructor(pageService: PageService) {
    super(pageService)
  }

  getPageName() {
    return 'TestSuccessCase'
  }


}
