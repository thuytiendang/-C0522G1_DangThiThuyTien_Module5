import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [
    {
      id: 1,
      word: 'banana',
      mean: 'Quả chuối'
    },
    {
      id: 2,
      word: 'orange',
      mean: 'Quả cam'
    },
    {
      id: 3,
      word: 'hello',
      mean: 'Xin chào'
    },
    {
      id: 4,
      word: 'goodbye',
      mean: 'Tạm biệt'
    },
    {
      id: 5,
      word: 'water',
      mean: 'nước'
    },
    {
      id: 6,
      word: 'rice',
      mean: 'Gạo'
    },
    {
      id: 7,
      word: 'sugar',
      mean: 'đường'
    },
  ];

  constructor() {
  }

  getAll() {
    return this.words;
  }

  translate(id: number) {
    return this.words.find(wordObj => wordObj.id === id);
  }

}
