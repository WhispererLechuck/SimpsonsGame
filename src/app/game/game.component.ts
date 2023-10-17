import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Quote } from './quote.model';
import { Observable, map } from 'rxjs';
import { HighestScoreService } from './highest-score.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  constructor(private httpClient: HttpClient, private highestS: HighestScoreService) {};
  @ViewChild('pTest') pTest?: string;


  quoteArray: Quote[] =[];
  characters: string[] =[];
  indexCorrect?:number;
  level: number = 0;
  lives: number = 3;
  correctResponse: number = 0;
  highestScore: number = 0;
  obsQuotes?: Observable<Quote[]>;

  correctFlag: boolean = false;
  isLoading: boolean = false;  
  gameOverFlag:boolean = false;

  newGame(){
    this.level = 0;
    this.lives = 3;
    this.reset();
    this.getQuotes();
  }

  nextLevel(){
    this.reset();
    this.getQuotes();
    this.level++;
    if (this.level>this.highestScore) {
      this.highestScore = this.level;
      this.highestS.setScore(this.highestScore);
    }
    if (this.lives<3){
      this.lives++;
    }
  }

  reset(){
    this.quoteArray = [];
    this.characters = [];
    this.correctFlag = false;
    this.correctResponse = Math.round(Math.random()*3);
  }

  getQuotes(){
    this.isLoading = true;
    this.obsQuotes = this.httpClient.get<Quote[]>('https://thesimpsonsquoteapi.glitch.me/quotes?count=10');
    this.obsQuotes.
    pipe().
    subscribe(quotes => {
      for(let quote of quotes){
        if(!this.characters.includes(quote.character) && this.quoteArray.length<=3){
          if(quote.character == 'Homer Simpson' && Math.random()>0.4){
          this.quoteArray.push(quote);
          this.characters.push(quote.character);
          } else{
            this.quoteArray.push(quote);
            this.characters.push(quote.character);
          }
        }
      }
      this.isLoading = false;
    });
  }

  checkResponse(index: number){
    if(index != this.correctResponse){
      this.lives--;
      if (this.lives === 0){
        this.gameOver();
      }  
    } else{
      alert('Correct, the character is ' +this.characters[index]);
      // this.nextLevel();
      this.correctFlag = true;
    }
  }

  gameOver(){
    this.gameOverFlag = true;
    alert('Game over!');
  }

  test(){
    this.lives = 1;
    this.reset();
    this.getQuotes();
  }

  ngOnInit(): void {
    this.highestScore = this.highestS.getScore();
  }
}

/*
BUGS: 

- Al pasar al siguiente nivel no se cambian los valores en la pagina, pero 
parece que si cambia algo.
- Al pusar next level, el ngIf no oculta el elemento y da error al leer undefined
*/