import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighestScoreService {
  highestScoreChange = new Subject<number>();
  highestScore?: number;

  getScore():number{
    this.highestScore = Number(localStorage.getItem('highestScore'));
    if(this.highestScore == undefined){
      return 0;
    }
    return this.highestScore;
  }
  setScore(score:number){
    localStorage.setItem('highestScore',score.toString());
    this.highestScore = score;
  }

  constructor() { }
}
