import {PageService} from "../../../service/page.service";
import {map, tap} from "rxjs/operators";
import {OnInit} from "@angular/core";

export abstract class BaseTestPage implements OnInit{

  protected constructor(private pageService: PageService) {
  }

  ngOnInit() {
    this.pageService.getQueryParams()
      .pipe(map(params => Object.keys(params).map(k=>k.toLowerCase())))
      .subscribe(params => {
        if(params.includes('test'))
          this.pageService.execute(this.getPageName());
        if(params.includes('suite'))
          this.pageService.execute(this.getPageName());
      });


  }

  public abstract getPageName();
}
