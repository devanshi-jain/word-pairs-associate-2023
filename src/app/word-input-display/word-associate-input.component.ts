import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { randomInt } from 'crypto';
import { AddWord } from '../add-word';
import { WordComponent } from '../word.component';
import { WordDirective } from '../word.directive';



@Component({
  selector: 'app-word-associate-input',
  templateUrl: './word-associate-input.component.html',
})
export class WordAssociateInputComponent implements OnInit, OnDestroy, WordComponent {
  @Input() wordsInput: AddWord[] = [];
  @Input() data: any;
  // inputForm!: FormGroup;

  correctWord: string = '';
  errorMessage: string = '';
  correctMessage: string = '';
  currentWord: string = '';
  numError = 0;
  numCorrect =  0;
  inputDisabled: boolean = false;
  inputElement: HTMLInputElement | undefined;

  // constructor(private myForm: FormBuilder) { 
  //   this.inputForm = this.myForm.group({
  //     userInputs: new FormControl('')
  //   });
  // }

  constructor(){}

  currentAdIndex = -1;
  counter = 0;

  @ViewChild(WordDirective, { static: true }) wordHost!: WordDirective;

  interval: number | any;

  ngOnInit(): void {
    this.inputElement = <HTMLInputElement>document.getElementById('userInputs');
    this.loadComponent();
    // this.getWordsInputOne();
    // myUserInputList += "  ,"; // yoannes. In case Enter key is nor pressed the input value will be empty
  }

  //Focus cursor in input box for each set of words
  @ViewChild("userInputs")
  focus_element!: ElementRef;
  setFocus() {
    this.focus_element.nativeElement.focus();
  }

  ngAfterViewInit() {
    this.focus_element.nativeElement.focus();
  }


  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  loadComponent() {
    this.inputDisabled = false;
    // this.focus_element.nativeElement.value='';
    this.inputElement!.value = '';
    this.inputElement!.focus();
    this.errorMessage = '';
    this.correctMessage = '';

    if (this.counter < this.wordsInput.length) {
      this.currentAdIndex = (this.currentAdIndex + 1) % this.wordsInput.length;
      const addWordInput = this.wordsInput[this.currentAdIndex];
      this.currentWord = addWordInput.data.listone;
      this.correctWord = addWordInput.data.listonesec;
      
      // const viewContainerRef = this.wordHost.viewContainerRef;
      // viewContainerRef.clear();

      // const componentRef = viewContainerRef.createComponent<WordComponent>(addWordInput.component);
      // componentRef.instance.data = addWordInput.data;
      //console.log("Testing: ", componentRef.instance.data );
      this.counter++;
      //console.log("Counter in alert: ", this.counter);
      setTimeout((expectedCurrentWord) => {
        // If the list has moved to the next word, or an answer has been submitted for the current word, do nothing.
        if(this.currentWord == expectedCurrentWord && this.inputDisabled == false){
          this.onEnter(this.currentWord,this.correctWord, this.inputElement!.value);
        }
      }, 11000, this.currentWord);
    }
  }
  //set the interval to minutes 
  // getWordsInputOne() {
  //   this.interval = window.setInterval(() => {
  //     this.loadComponent();
  //   }, 11000);//(11000) User has 11 seconds to fill in the blank yoannes time
  // }


  //Funtion with condition for different scenarios
  onEnter(fromDataList: string = '', myWord: string, myuserInput: string) {

    this.inputDisabled = true;

    // //creating a list w the values given by the user
    // myUserInputList = myUserInputList.replace(" ,","") //yoannes. Remuving the empty value predefined in case the Enter key were not pressed.
    // myUserInputList += myuserInput + ",";

    // //delay the action for 5 seconds

    
    if (myuserInput === '') {

    //   // yoannes, checking time to print message if its
      // if (AppModule.trainigTesting == "training") {
        this.errorMessage = "The correct word is " + myWord; 
      // }
      this.numError++;
    //   /*console.log("Correct:", this.numCorrect);
    //   console.log("Error :", this.numError);
    //   console.log("From data: ", fromDataList);*/
    }

    else if (myuserInput != myWord) {

    //   // yoannes, checking time to print message if its
    //   if (AppModule.trainigTesting == "training") {
        this.errorMessage = "INCORRECT!, not " + "'" + myuserInput + "'" + ", the correct word is " + myWord;
    //   }
     this.numError++;
    //    /*console.log("Correct:", this.numCorrect);
    //    console.log("Error :", this.numError);
    //    console.log("From data: ", fromDataList);*/
    }
    else if (myWord === myuserInput) {
    //   // yoannes, checking time to print message if its evening
    //   if (AppModule.trainigTesting == "training") {
        this.correctMessage = "Correct answer"
    //   }
      this.numCorrect++;
    //   /*console.log("Correct:", this.numCorrect);
    //   console.log("Error :", this.numError);
    //   console.log("From data: ", fromDataList);*/
    }

    // this.popSweetAlert(fromDataList);
    
    //Wait 5 seconds, then move to next word. 
    setTimeout(() => {
      this.loadComponent();
    }, 5000);

  };
  
}

