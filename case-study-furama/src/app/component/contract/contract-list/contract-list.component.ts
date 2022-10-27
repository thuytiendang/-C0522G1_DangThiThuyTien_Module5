import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
contract : Contract [] = [{contractCode: 1, startDate: "01/01/2020", endDate:
"02/01/2020", deposit: 500.000, total: "1.000.000"}]
  constructor() { }

  ngOnInit(): void {
  }

}
