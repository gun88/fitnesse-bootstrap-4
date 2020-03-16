import { Component, OnInit } from '@angular/core';
import {BaseTestPage} from "../base-test-page/base-test-page";
import {PageService} from "../../../service/page.service";

@Component({
  selector: 'app-test-error-case',
  templateUrl: './test-error-case.component.html',
  styleUrls: ['./test-error-case.component.scss']
})
export class TestErrorCaseComponent extends BaseTestPage {


  constructor(pageService: PageService) {
    super(pageService)
  }

  getPageName() {
    return 'TestSuccessCase'
  }


}
