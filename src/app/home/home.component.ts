import { Component, OnInit } from "@angular/core";
import excelToJson = require("../../../node_modules/convert-excel-to-json");
import xlsxj = require("../../../node_modules/xlsx-to-json");
// import xlsxj from '../../../node_modules/xlsx-to-json';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    // xlsxj(
    //   {
    //     input: "../test.xlsx",
    //     output: "output.json"
    //   },
    //   function(err, result) {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log(result);
    //     }
    //   }
    // );
  }
}
