import {Component} from '@angular/core';
import {BaseTestPage} from "./base-test-page/base-test-page";
import {PageService} from "../../service/page.service";

@Component({
  selector: 'app-suite-demo-tests',
  templateUrl: './suite-demo-tests.component.html',
  styleUrls: ['./suite-demo-tests.component.scss']
})
export class SuiteDemoTestsComponent extends BaseTestPage {

  constructor(pageService: PageService) {
    super(pageService)
  }


  getPageName() {
    return 'SuiteDemoTests'
  }


}
