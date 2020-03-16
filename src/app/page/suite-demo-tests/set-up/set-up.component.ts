import {Component, OnInit} from '@angular/core';
import {PageService} from "../../../service/page.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent implements OnInit {

  constructor(private pageService: PageService) {
  }

  ngOnInit() {
    /*this.pageService.getQueryParams()
      .pipe(map(params => Object.keys(params).map(k => k.toLowerCase())))
      .pipe(tap(console.log))
      .subscribe(params => {
        let asd: string[] = params;
        if (asd.includes('edit'))
          this.pageService.redirect('edit');
      });

*/
  }

}
