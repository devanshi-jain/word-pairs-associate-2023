import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module'; // yoannes
import Swal from 'sweetalert2'; // yoannes
import { Router } from '@angular/router'; // yoannes using route to navigate between pages without affecting my global variables values

const win: Window = window; //yoannes

@Component({
  selector: 'app-message-five',
  templateUrl: './message-five.component.html',
  styleUrls: ['./message-five.component.css']
})
export class MessageFiveComponent implements OnInit {

  // constructor() { }
    //constructor() { }
  //yoannes Inject the class in the components where you want to access the global variable:
  constructor(private globalService: AppModule, private router: Router) {}

  accessGlobalVariable() {
    console.log(AppModule.globalVariable);
  }
  // yoannes end

  ngOnInit(): void {
    this.inputStudyId();  //yoannes
  }
  
  
  //yoannes function to get the Study ID
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
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          
          //Go to the task page
          this.router.navigate(['/task-message-five']);
        } 
      });
    }
  }
