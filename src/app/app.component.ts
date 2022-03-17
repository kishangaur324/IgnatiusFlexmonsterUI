import { Component } from '@angular/core';
import * as Flexmonster from 'flexmonster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  ngOnInit() {
    new Flexmonster({
      customizeAPIRequest: this.customizeAPIRequestFunction,
      container: "pivotContainer",
      report: {
          dataSource: {
              type: "api",
              url: "http://localhost:50731/api/cube",
              index: "reports"
          }
      }
  });
  }

  customizeAPIRequestFunction(req: any) {
    req.ReportId = 3644;
    req.ApplicationTableId = 4675;
    return req;
  }
}
