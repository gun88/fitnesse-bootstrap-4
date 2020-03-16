import { Component, OnInit } from '@angular/core';
import {BaseTestPage} from "../base-test-page/base-test-page";
import {PageService} from "../../../service/page.service";

@Component({
  selector: 'app-test-ignore-case',
  templateUrl: './test-ignore-case.component.html',
  styleUrls: ['./test-ignore-case.component.scss']
})
export class TestIgnoreCaseComponent extends BaseTestPage {


  constructor(pageService: PageService) {
    super(pageService)
  }

  getPageName() {
    return 'TestSuccessCase'
  }


}
