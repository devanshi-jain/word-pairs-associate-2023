import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { listenerCount } from 'process';
import { AppModule } from '../app.module'; // yoannes
import Swal from 'sweetalert2'; // yoannes


var global_error = 0;
var global_correct = 0;
var   myUserInputList =  ""; //yoannes
const win: Window = window;

@Component({
  selector: 'app-word-list-input-one',
  templateUrl: './word-list-input-one.component.html',

})
export class WordListInputOneComponent {
  @Input() data: any;

 
  
}

