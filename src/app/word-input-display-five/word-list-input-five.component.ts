import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

var global_error = 0;
var global_correct = 0;
const win: Window = window;

@Component({
  selector: 'app-word-list-input-five',
  templateUrl: './word-list-input-five.component.html'
})
export class WordListInputFiveComponent implements OnInit {
  @Input() data: any;

  interval: any;
  fromDataList: string = '';
  inputForm!: FormGroup;
  correctWord: string = '';
  errorMessage: string = '';
  userInputs: string = '';
  words = 0;

  trackByFn(index: any, item: any) {
    return index;
  }

  constructor(private myForm: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.inputForm = this.myForm.group({
      userInputs: ''
    });
  }

  ngOnDestroy() { }

  //Focus cursor in input box for each set of words
  @ViewChild("userInputs")
  focus_element!: ElementRef;
  setFocus() {
    this.focus_element.nativeElement.focus();
  }

  ngAfterViewInit() {
    this.focus_element.nativeElement.focus();
  }

  //Funtion with condition for different scenarios
  onEnter(fromDataList: string, myWord: string, myuserInput: string) {
    if (myuserInput === '') {
      this.errorMessage = "The correct word is " + myWord;
      global_error++;
      /*console.log("Correct:", global_correct);
      console.log("Error :", global_error);
      console.log("From data: ", fromDataList);*/
    }
    else if (myuserInput != myWord) {
      this.errorMessage = "INCORRECT!, not " + "'" + myuserInput + "'" + ", the correct word is " + myWord;
      global_error++;
      /*console.log("Correct:", global_correct);
      console.log("Error :", global_error);
      console.log("From data: ", fromDataList);*/
    }
    else if (myWord === myuserInput) {
      this.correctWord = "Correct answer";
      global_correct++;
      /*console.log("Correct:", global_correct);
      console.log("Error :", global_error);
      console.log("From data: ", fromDataList);*/
    }

    this.popSweetAlert(fromDataList);

  };

  popSweetAlert(fromDataList: string) {
    if (fromDataList == 'garden') {
      if (global_correct < 24) { // total of 40 words, 60% of 40 is 24
        var thisComp = this;
        Swal.fire(
          {
            text: "You answered " + global_correct + " out of 40 words, You have impovements to make, repeat up to 3 more times"
          }
        ).then(function () {
          win.location = "input-five";
        });

      }
      else if (global_correct >= 24) {
        Swal.fire(
          {
            text: "You answered " + global_correct + " out of 40 words, Test completed"
          }
        ).then(function () {
          //thisComp.router.navigate(['/pass-test']);
          win.location = "pass-test";
        });

      }

    }
  }
}


