import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-execution-page',
  templateUrl: './execution-page.component.html',
  styleUrls: ['./execution-page.component.scss']
})
export class ExecutionPageComponent implements OnInit {
  pageUnderTest: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pageUnderTest = this.route.snapshot.queryParamMap.get('pageName');
  }
}
