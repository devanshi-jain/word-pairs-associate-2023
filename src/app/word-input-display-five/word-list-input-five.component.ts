import { Component,Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AddWord } from '../add-word';

var global_erroneas = 0;
var global_correctas = 0;
var wordsOrigin = 0;
const win: Window = window;
var counter = 0;
var countEntrance = 0;

@Component({
  selector: 'app-word-list-input-five',
  templateUrl: './word-list-input-five.component.html'
})
export class WordListInputFiveComponent implements OnInit {
  @Input() wordsInputFive: AddWord[] = [];
  @Input() data: any;
  @Input() newData: string[] = [];
  global_correctas: number = 0;
  parentName: string = '';
  countEntrance = 0;
  totalCount = 0;
  currentAdIndex = -1;
  interval: number | undefined;
  inputForm!: FormGroup;
  event!: any;
  myWord: string = '';
  myuserInput: string = '';
  myuserInputsTest: string = '';
  correctWord: string = '';
  errorMessage: string = '';
  userInputs: string = '';
  counter = 0;

  trackByFn(index: any, item: any) {
    return index;
  }

  constructor(private myForm: FormBuilder,private router: Router) { }


  ngOnInit() {
    this.inputForm = this.myForm.group({
      userInputs: ''
    });
  
  }

  ngOnDestroy() {
    
  }

  //Funtion with condition for different scenarios
  onEnter(myWord: string, myuserInput: string) {
    if (myuserInput === '') {
      this.errorMessage = "The correct word is " + myWord;
      wordsOrigin++;
      global_erroneas++;
      console.log("words Origin :", wordsOrigin);
      console.log("global_erroneas :", global_erroneas);
      console.log("The correct word is " + myWord);
    }
    else if (myuserInput != myWord) {
      this.errorMessage = "INCORRECT!, not " + "'" + myuserInput + "'" + ", the correct word is " + myWord;
      console.log("Not " + myuserInput + ", the correct word is " + myWord);
      wordsOrigin++;
      global_erroneas++;
      console.log("words Origin :", wordsOrigin);
      console.log("global_erroneas :", global_erroneas);
    }
    else if (myWord === myuserInput) {
      this.correctWord = "Correct answer";
      wordsOrigin++;
      global_correctas++;
      console.log("words Origin :", wordsOrigin);
      console.log("global_correctas:", global_correctas);
      
    }
    
    this.popSweetAlert();

  };
 
  popSweetAlert(){
    if (wordsOrigin == 3) {
      if (global_correctas < 2) {
        var thisComp = this;
        Swal.fire(
          {
            text: "You answered " + global_correctas + " out of 40 words, You have some impovements to make"
          }
        ).then(function () {
          countEntrance++;
          console.log("Current counter ",countEntrance);
          if( countEntrance == 3){
            win.location = "pass-test";
            //thisComp.router.navigate(['/pass-test']);
          }
          else{
            //thisComp.resetVariables();
            win.location = "word-display-input";
            //thisComp.router.navigate(['/word-display-input']);
          }
         // win.location = "word-display-input" + "/?testcount=" + counter;
        });

      }
      else if (global_correctas >= 2 ) {
        Swal.fire(
          {
            text: "You answered " + global_correctas + " out of 40 words, Test completed"
          }
        ).then(function () {
          //thisComp.router.navigate(['/pass-test']);
          win.location = "pass-test";
        });
        
      }

    }
  }

}


