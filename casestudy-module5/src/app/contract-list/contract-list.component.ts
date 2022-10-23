import {Component, OnInit} from '@angular/core';
import {Contract} from '../model/contract';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractList: Contract[] = [];

  constructor(private contractService: ContractService) {
  }

  getAll() {
    return this.contractList = this.contractService.getAll();
  }

  ngOnInit(): void {
     this.getAll();
  }

}
