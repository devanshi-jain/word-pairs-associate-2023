import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


var global_error = 0;
var global_correct = 0;
const win: Window = window;

@Component({
  selector: 'app-word-list-input-one',
  templateUrl: './word-list-input-one.component.html',

})
export class WordListInputOneComponent implements OnInit {
  @Input() data: any;

  interval: any;
  inputForm!: FormGroup;
  fromDataList: string = '';
  correctWord: string = '';
  errorMessage: string = '';
  userInputs: string = '';
  words = 0;


  studyID: string = '';
  numberOfWords = 40;
  numberCorrectPairs = 0;
  current_date = new Date().toISOString(); 
  percentage = 0;
 


  trackByFn(index: any, item: any) {
    return index;
  }


  constructor(private myForm: FormBuilder,
    private router: Router) {
  }


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
  onEnter(fromDataList: string = '', myWord: string, myuserInput: string) {
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

        this.numberCorrectPairs = global_correct                 //yoannes
        this.percentage = (global_correct * 100)/40              //yoannes


    if (fromDataList == 'sonata') {
      if (global_correct < 24) { // total of 40 words, 60% of 40 is 24 
        var thisComp = this;
               
        // //Creating the .CSV file that stores final results. //yoannes
        // this.createCSVFile(studyID, numberOfWords ,numberCorrectPairs ,percentage , current_date);     
        Swal.fire(
          {
            text: "You answered " + this.percentage + " % of the questions correctly. Please try up to 3 times in total to reach at least 60% of correctly answered questions",
            showCancelButton: true,
            cancelButtonText: "End Test",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continue Test'
          }
        ).then((result) => {
          if (result.value) {
            win.location = "input-one"
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            //Asking the user to enter the Study ID to generate the file
            this.inputStudyId();
               
            //Go to the home page
            this.router.navigate(['/pass-test']);
          } 
        });
      }
      else if (global_correct >= 24) { 
        Swal.fire(
          {
            text: "You answered " + this.percentage + " % out of 40 words, Test completed"
          }
        ).then(function () {
          win.location = "pass-test";
        });
      }
    }
  }



  // FRunction that creates the .CSV file //yoannes
  createCSVFile(studyID: string, numberOfWords: number ,numberCorrectPairs: number ,percentage: number , current_date: string) {
    /* Define the data */
    const data = [['Study ID', 'Number of Words', 'Number of Correct Pairs', '% of Correct Pairs', 'Date'],[studyID, numberOfWords ,numberCorrectPairs ,percentage +"%" , current_date]];
    /* Convert the data to a CSV string */
    const csvContent = data.map(row => row.join(',')).join('\n');
    /* Create a Blob object containing the CSV string */
    const blob = new Blob([csvContent], { type: 'text/csv' });
    /* Create a link element */
    const link = document.createElement('a');
    /* Set the link's href to the Blob object */
    link.href = window.URL.createObjectURL(blob);
    /* Set the link's download attribute */
    link.download = this.studyID + '-' + current_date +'.csv';
    /* Append the link to the document */
    document.body.appendChild(link);
    /* Click the link to trigger the download */
    link.click();
    /* Remove the link from the document */
    document.body.removeChild(link);
  }

  //function to get the Study ID
  inputStudyId(){
    Swal.fire({
      title: 'Enter Study ID',
      input: 'text',
      width: 700,
      padding: 50,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: false,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (inputValue) => {
        if (!inputValue) {
          Swal.showValidationMessage(
            'Please enter a Study ID'
          )
        }else{
          this.studyID = inputValue;
          //Creating the .CSV file that stores final results. //yoannes
          this.createCSVFile(this.studyID, this.numberOfWords ,this.numberCorrectPairs ,this.percentage , this.current_date);  
          return inputValue
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  } 
}

