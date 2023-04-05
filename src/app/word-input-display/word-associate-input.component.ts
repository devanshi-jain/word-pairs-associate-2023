import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { randomInt } from 'crypto';
import { AddWord } from '../add-word';
import { WordComponent } from '../word.component';
import { WordDirective } from '../word.directive';
import { Router } from '@angular/router';
import { AppModule } from '../app.module'; // yoannes
import Swal from 'sweetalert2'; // yoannes


const win: Window = window;

@Component({
  selector: 'app-word-associate-input',
  templateUrl: './word-associate-input.component.html',
})
export class WordAssociateInputComponent implements OnInit, WordComponent {
  @Input() wordsInput: AddWord[] = [];
  @Input() data: any;

  myUserInputList: string =  ""; //yoannes

  correctWord: string = '';
  errorMessage: string = '';
  correctMessage: string = '';
  currentWord: string = '';
  numError = 0;
  numCorrect =  0;
  numberCorrectPairs = 0;
  percentage = 0;
  numberOfWords = 40;
  inputElement: HTMLInputElement | undefined;

  current_date = new Date().toISOString(); 
  listOfPairs ="tower - bell,sea - tide,newspaper - interview,sonata - joy,banner - camp,tendency - increment,mother - child,insect - caterpillar,river - ship,coast - beach,gun - bullet,blacksmith - metal,home - room,building - hall,rain - flood,avenue - tree,decency - truth,decree - decision,diamond - hardness,result - effect,occupation - doctor,book - story,attack - operation,cat - soul,doll - cradle,episode - happiness,railroad - steam,kitchen - pot,countryside - swamp,musician - pianist,industry - factory,clothing - scarf,car - headlight,gale - wind,bouquet - blossom,bottle - toast,group - person,crisis - emergency,girl - engagement,harbor - crane"


  constructor(private router: Router,private globalService: AppModule){}

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

  loadComponent() {
    if (this.counter < this.wordsInput.length) {
      this.inputElement!.disabled = false;
      this.inputElement!.value = '';
      this.errorMessage = '';
      this.correctMessage = '';
      this.inputElement!.focus();

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
        if(this.currentWord == expectedCurrentWord && this.inputElement?.disabled == false){
          this.onEnter(this.currentWord,this.correctWord, this.inputElement!.value);
        }
      }, 10000, this.currentWord);
    }
  }
  //set the interval to minutes 
  // getWordsInputOne() {
  //   this.interval = window.setInterval(() => {
  //     this.loadComponent();
  //   }, 11000);//(11000) User has 11 seconds to fill in the blank yoannes time
  // }


  //Funtion with condition for different scenarios
  onEnter(fromDataList: string = '', correctWord: string, myuserInput: string) {

    myuserInput = myuserInput.trim();
    console.log(AppModule.trainigTesting);

    this.inputElement!.disabled = true;

    // //creating a list w the values given by the user
    // myUserInputList = myUserInputList.replace(" ,","") //yoannes. Remuving the empty value predefined in case the Enter key were not pressed.
    this.myUserInputList += myuserInput + ",";

    // //delay the action for 5 seconds

    
    if (correctWord.toLowerCase() === myuserInput.toLowerCase()) {
      // yoannes, checking time to print message if its evening
      if (AppModule.trainigTesting == "training") {
        this.correctMessage = "Correct answer"
      }
      this.numCorrect++;
    }
    else /* if (myuserInput != correctWord) */ {
    //   // yoannes, checking time to print message if its
      if (AppModule.trainigTesting == "training") {
        this.errorMessage = "The correct word is " + correctWord; 
      }
      this.numError++;
    }

    
    //Wait then move to next word. 
    let loadTime = 1000; // 1 second if testing
      if (AppModule.trainigTesting == "training") {
        loadTime = 5000; // 5 seconds if training
      }
      setTimeout(() => {
        // Only progress if this is the last word
      if (fromDataList == 'harbor') {
        this.numberCorrectPairs = this.numCorrect                 //yoannes
        this.percentage = (this.numCorrect * 100)/40              //yoannes

        if(AppModule.trainigTesting == "testing"){
          this.createCSVFile(AppModule.globalVariable, this.numberOfWords ,this.numberCorrectPairs ,this.percentage , this.current_date);  
          this.router.navigate(['/pass-test']);
        } else {
          this.popSweetAlert(fromDataList);
        }
      } else {
        this.loadComponent();
      }
    }, loadTime);
  };

  popSweetAlert(fromDataList: string) {
    
    if (this.numCorrect < 24) { // total of 40 words, 60% of 40 is 24 
      var thisComp = this;
      Swal.fire(
        {
          text: "You answered " + this.percentage + " % of the questions correctly. Please try up to 3 times in total to reach at least 60% of correctly answered questions",
          showCancelButton: true,
          cancelButtonText: "End Test",
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Repeat Test',
          allowOutsideClick: false
        }
      ).then((result) => {
        if (result.value) {
          //win.location = "input-one"
          this.router.navigate(['/task-message']);
          // this.router.navigate(['/input-one']);
          // this.router.navigate(['/app-lits-one']);
          this.createCSVFile(AppModule.globalVariable, this.numberOfWords ,this.numberCorrectPairs ,this.percentage , this.current_date);  
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          //Asking the user to enter the Study ID to generate the file
          this.createCSVFile(AppModule.globalVariable, this.numberOfWords ,this.numberCorrectPairs ,this.percentage , this.current_date);  
            
          //Go to the home page
          this.router.navigate(['/pass-test']);
          AppModule.globalVariable = ""
        } 
      });
    }
    else if (this.numCorrect >= 24) { 
      Swal.fire(
        {
          text: "You answered " + this.percentage + " % out of 40 words, Test completed"
        }
      ).then( () => {
        this.router.navigate(['/pass-test']);
      });
      this.createCSVFile(AppModule.globalVariable, this.numberOfWords ,this.numberCorrectPairs ,this.percentage , this.current_date);  
    }
  }

  // FRunction that creates the .CSV file //yoannes
  createCSVFile(studyID: string, numberOfWords: number ,numberCorrectPairs: number ,percentage: number , current_date: string) {
    /* Define the data */
    const data = [['Study ID', 'Number of Words', 'Number of Correct Pairs', '% of Correct Pairs', 'Date',this.listOfPairs]
    ,[studyID, numberOfWords ,numberCorrectPairs ,percentage +"%" , current_date, this.myUserInputList]];
    /* Convert the data to a CSV string */
    const csvContent = data.map(row => row.join(',')).join('\n');
    /* Create a Blob object containing the CSV string */
    const blob = new Blob([csvContent], { type: 'text/csv' });
    /* Create a link element */
    const link = document.createElement('a');
    /* Set the link's href to the Blob object */
    link.href = window.URL.createObjectURL(blob);
    /* Set the link's download attribute */
    link.download = AppModule.globalVariable + '-' + current_date +'.csv';
    /* Append the link to the document */
    document.body.appendChild(link);
    /* Click the link to trigger the download */
    link.click();
    /* Remove the link from the document */
    document.body.removeChild(link);
  }
  
}

