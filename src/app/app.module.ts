import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WordAssociateComponent } from './lits1/word-associate.component'; 
import { WordsDisplayComponent } from './lits1/words-display.component'; 
import { MessagePageComponent } from './message-page/message-page.component';
import { TaskMessageComponent } from './task-message/task-message.component';

import { WordDirective } from './word.directive';
import { WordService } from './word.service'; 
import { Lits1Component } from './lits1/lits1.component';
import { Lits3Component } from './lits3/lits3.component';
import { Lits5Component } from './lits5/lits5.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WordThreeDisplayComponent } from './lits3/word-three-display.component';
import { WordFiveDisplayComponent } from './lits5/word-five-display.component';
import { WordAssociateThreeComponent } from './lits3/word-associate-three.component';
import { WordAssociateFiveComponent } from './lits5/word-associate-five.component';
import { MessageThreeComponent } from './message-three/message-three.component';
import { MessageFiveComponent } from './message-five/message-five.component';
import { WordListThreeComponent } from './lits3/word-list-three.component';
import { WordListFiveComponent } from './lits5/word-list-five.component';
import { TaskMessageThreeComponent } from './task-message-three/task-message-three.component';
import { TaskMessageFiveComponent } from './task-message-five/task-message-five.component';
import { WordInputDisplayComponent } from './word-input-display/word-input-display.component';
import { WordAssociateInputComponent } from './word-input-display/word-associate-input.component';
import { WordInputDisplayThreeComponent } from './word-input-display-three/word-input-display-three.component';
import { WordAssociateInputThreeComponent } from './word-input-display-three/word-associate-input-three.component';
import { WordInputDisplayFiveComponent } from './word-input-display-five/word-input-display-five.component';
import { WordAssociateInputFiveComponent } from './word-input-display-five/word-associate-input-five.component';
import { WordListInputOneComponent } from './word-input-display/word-list-input-one.component';
import { CommonModule } from '@angular/common';
import { DisableOnEnterDirective } from './disable-on-enter.directive';
import { FailTestComponent } from './fail-test.component'; 
import { PassTestComponent } from './pass-test.component';
import { WordListInputThreeComponent } from './word-input-display-three/word-list-input-three.component'; 
import { WordListInputFiveComponent } from './word-input-display-five/word-list-input-five.component'; 

//yoannes , a static property needs to be created to be used as global variable
import { Injectable } from '@angular/core'; 

@Injectable({ 
  providedIn: 'root'
})

//yoannes end

@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ WordService],
  declarations: [
    AppComponent, 
    WordAssociateComponent,
    WordsDisplayComponent,
    MessagePageComponent,
    WordDirective,
    Lits1Component,
    Lits3Component,
    Lits5Component,
    MainPageComponent,
    WordThreeDisplayComponent,
    WordFiveDisplayComponent,
    WordAssociateThreeComponent,
    WordAssociateFiveComponent,
    MessageThreeComponent,
    MessageFiveComponent,
    WordListThreeComponent,
    WordListFiveComponent,
    TaskMessageComponent,
    TaskMessageThreeComponent,
    TaskMessageFiveComponent,
    WordInputDisplayComponent,
    WordAssociateInputComponent,
    WordInputDisplayThreeComponent,
    WordAssociateInputThreeComponent,
    WordInputDisplayFiveComponent,
    WordAssociateInputFiveComponent,
    WordListInputOneComponent,
    DisableOnEnterDirective,
    FailTestComponent,
    PassTestComponent,
    WordListInputThreeComponent,
    WordListInputFiveComponent,

  
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  //yoannes static property that will be your global variable:
  static globalVariable: any;
  static trainigTesting: any;
}

