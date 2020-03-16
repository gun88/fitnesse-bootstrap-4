import {Component} from '@angular/core';
import {PageService} from "../../../service/page.service";
import {BaseTestPage} from "../base-test-page/base-test-page";

@Component({
  selector: 'app-test-success-case',
  templateUrl: './test-success-case.component.html',
  styleUrls: ['./test-success-case.component.scss']
})
export class TestSuccessCaseComponent extends BaseTestPage {


  constructor(pageService: PageService) {
    super(pageService)
  }

  getPageName() {
    return 'TestSuccessCase'
  }


}
