import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module'; // yoannes
import Swal from 'sweetalert2'; // yoannes
import { Router } from '@angular/router'; // yoannes using route to navigate between pages without affecting my global variables values

const win: Window = window; //yoannes

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent implements OnInit {

  // constructor() { }
    //constructor() { }
  //yoannes Inject the class in the components where you want to access the global variable:
  constructor(private globalService: AppModule, private router: Router) {}

  accessGlobalVariable() {
    console.log(AppModule.globalVariable);
    console.log(AppModule.trainigTesting);
  }
  // yoannes end

  ngOnInit(): void {
    this.inputStudyId();  //yoannes
  }
  
  
  //function to get the Study ID
  inputStudyId(){
      Swal.fire({
        title: 'Enter Study ID',
        input: 'text',
        width: 700,
        padding: 50,
        allowEscapeKey: false,
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
            AppModule.globalVariable = inputValue.toUpperCase();
            this.popSweetAlertSelection()
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
    } 


  //yoanes, prompt selection of the training (evening) vs Testing (morning)
  popSweetAlertSelection() {

      Swal.fire(
        {
          text: "Study ID " + AppModule.globalVariable,
          showCancelButton: true,
          cancelButtonText: "Testing (morning)",
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#3085d6',
          width: 700,
          padding: 100,
          confirmButtonText: 'Training (evening)'
        }
      ).then((result) => {
        if (result.value) {
            // do nothing stay in testing evening
            AppModule.trainigTesting = "training";
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          
          //Go to the task page
          AppModule.trainigTesting = "testing";
          this.router.navigate(['/task-message']);
        } 
      });
    }
  }
