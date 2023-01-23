import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lits1Component } from './lits1/lits1.component';
import { Lits3Component } from './lits3/lits3.component';
import { Lits5Component } from './lits5/lits5.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { WordsDisplayComponent } from './lits1/words-display.component'; 
import { MessageThreeComponent } from './message-three/message-three.component';
import { MessageFiveComponent } from './message-five/message-five.component';
import { WordThreeDisplayComponent } from './lits3/word-three-display.component';
import { WordFiveDisplayComponent } from './lits5/word-five-display.component';
import { TaskMessageComponent } from './task-message/task-message.component';
import { TaskMessageThreeComponent } from './task-message-three/task-message-three.component';
import { TaskMessageFiveComponent } from './task-message-five/task-message-five.component';
import { WordInputDisplayComponent } from './word-input-display/word-input-display.component';
import { WordInputDisplayThreeComponent } from './word-input-display-three/word-input-display-three.component';
import { WordInputDisplayFiveComponent } from './word-input-display-five/word-input-display-five.component';
import { FailTestComponent } from './fail-test.component';
import { PassTestComponent } from './pass-test.component';

const routes: Routes = [

  //{ path: 'app-main-page', component: MainPageComponent },
  { path: '', component: MainPageComponent, pathMatch: 'full'},
  { path: 'app-lits-one', component: Lits1Component},
  { path: 'app-lits-three', component: Lits3Component},
  { path: 'app-list-five', component: Lits5Component},
  { path: 'app-message-page', component: MessagePageComponent },
  { path: 'app-message-page-three', component: MessageThreeComponent },
  { path: 'app-message-page-five', component: MessageFiveComponent },
  { path: 'word-display-one', component: WordsDisplayComponent },
  { path: 'word-display-three', component: WordThreeDisplayComponent },
  { path: 'word-display-five', component: WordFiveDisplayComponent },
  { path: 'task-message', component: TaskMessageComponent},
  { path: 'task-message-three', component: TaskMessageThreeComponent},
  { path: 'task-message-five', component: TaskMessageFiveComponent},
  { path: 'input-one', component: WordInputDisplayComponent},
  { path: 'input-three', component: WordInputDisplayThreeComponent},
  { path: 'input-five', component: WordInputDisplayFiveComponent},
  { path: 'fail-test', component: FailTestComponent},
  { path: 'pass-test', component: PassTestComponent}

   // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }

