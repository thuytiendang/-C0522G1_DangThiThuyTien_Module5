import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordForm: FormGroup;
  id: number;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.id = Number(value.get('id'));
    });
    const word = this.dictionaryService.translate(this.id);
    this.wordForm = new FormGroup({
      id: new FormControl(word.id),
      word: new FormControl(word.word),
      mean: new FormControl(word.mean),
    });
  }

  translate(id: number) {
    // const word = this.wordForm.value;
    this.dictionaryService.translate(id);
  }
}
