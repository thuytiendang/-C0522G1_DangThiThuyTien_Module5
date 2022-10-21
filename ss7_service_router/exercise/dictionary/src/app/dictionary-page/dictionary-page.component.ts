import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {Word} from '../model/word';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  words: Word[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.words = this.dictionaryService.getAll();
  }
}
