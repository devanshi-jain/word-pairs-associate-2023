import { Injectable } from '@angular/core';
import { WordListComponent } from './lits1/word-list.component'; 
import { WordListThreeComponent } from './lits3/word-list-three.component'; 
import { AddWord } from './add-word'; 
import { WordListFiveComponent } from './lits5/word-list-five.component';
import { WordListInputOneComponent } from './word-input-display/word-list-input-one.component';
import { WordListInputThreeComponent } from './word-input-display-three/word-list-input-three.component';
import { WordListInputFiveComponent } from './word-input-display-five/word-list-input-five.component';

@Injectable({providedIn: 'root'})
export class WordService {
  getWordsOne() {
    return [
      new AddWord(
        WordListComponent,
        { listone: 'tower', listonesec: 'bell' }
      ),
      new AddWord(
        WordListComponent,
        { listone: 'sea', listonesec: 'tideome' }
      ),
      new AddWord(
        WordListComponent,
        { listone: 'family', listonesec: 'marriage' }
      ),
      



      /* 
      school	blackboard	
tower	bell	
sea	tide	
family	marriage	
newspaper	interview	
sonata	joy	
banner	camp	
tendency	increment	
mother	child	
insect	caterpillar	
river	ship	
coast	beach	
gun	bullet	
blacksmith	metal	
home	room	
building	hall	
rain	flood	
avenue	tree	
decency	truth	
decree	decision	
diamond	hardness	
result	effect	
occupation	doctor	
book	story	
attack	operation	
cat	soul	
doll	cradle	
episode	happiness	
railroad	steam	
kitchen	pot	
countryside	swamp	
musician	pianist	
industry	factory	
clothing	scarf	
car	headlight	
prison	gangster	
gale	wind	
bouquet	blossom	
bottle	toast	
group	person	
crisis	emergency	
girl	engagement	
harbor	crane	
garden	flowerbed	
	*/
    ];
  }

  getWordsInputOne() {
    return [
      new AddWord(
        WordListInputOneComponent,
        { listone: 'tower', listonesec: 'bell' }
      ),
      new AddWord(
        WordListInputOneComponent,
        { listone: 'sea', listonesec: 'tideome' }
      ),
      new AddWord(
        WordListInputOneComponent,
        { listone: 'family', listonesec: 'marriage' }
      ),
    ]
      } 


  getWordsThree(){
    return [
      new AddWord(
        WordListThreeComponent,
        { listhree: 'frog', listhreesec: 'green' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'red', listhreesec: 'rose' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'phone', listhreesec: 'call' }
      ),


     

      /*
      rider	switch	
fire	smoke	
animal	fox	
road	car	
weaver	troubles	
flakes	rescue	
rein	turn	
mission	messenger	
furniture	chair	
body	blood	
army	admiral	
friend	loyalty	
bird	lark	
celebration	alcohol	
reptile	frog	
grain	oats	
joint	knuckle	
artist	painting	
statement	doubt	
revolt	policeman	
alliance	betrayal	
event	incident	
factory	foreman	
plant	leaf	
tenant	rent	
commercial	candy	
giant	club	
trip	map	
mountain	boulder	
ruler	palace	
play	drama	
illness	doctor	
church	heaven	
infection	bacteria	
university	semester	
underworld	crime	
instrument	bagpipes	
glacier	avalanche	
idea	proverb	
faith	renouncement	
theory	concept	
authority	state	
fir	needle	
circus	clown	

      */
    ];
  }
  getWordsInputThree(){
    return [
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'frog', listhreesec: 'green' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'red', listhreesec: 'rose' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'phone', listhreesec: 'call' }
      ),


     

      /*
      rider	switch	
fire	smoke	
animal	fox	
road	car	
weaver	troubles	
flakes	rescue	
rein	turn	
mission	messenger	
furniture	chair	
body	blood	
army	admiral	
friend	loyalty	
bird	lark	
celebration	alcohol	
reptile	frog	
grain	oats	
joint	knuckle	
artist	painting	
statement	doubt	
revolt	policeman	
alliance	betrayal	
event	incident	
factory	foreman	
plant	leaf	
tenant	rent	
commercial	candy	
giant	club	
trip	map	
mountain	boulder	
ruler	palace	
play	drama	
illness	doctor	
church	heaven	
infection	bacteria	
university	semester	
underworld	crime	
instrument	bagpipes	
glacier	avalanche	
idea	proverb	
faith	renouncement	
theory	concept	
authority	state	
fir	needle	
circus	clown	

      */
    ];
        
  }

  getWordsFive(){
    return [
      new AddWord(
        WordListFiveComponent,
        { listfive: 'pencil', listfivesec: 'paper' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'fan', listfivesec: 'air' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'cake', listfivesec: 'cherry' }
      ),
    ];
  }

  getWordsInputFive(){
    return [
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'pencil', listfivesec: 'paper' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'fan', listfivesec: 'air' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'cake', listfivesec: 'cherry' }
      ),
    ];
  }
  /**
   
  power	ruler
butterfly	bloom
dream	reality
language	acoustic
examiner	failure
 coach	horse
animal	frog
demand	difficulty
question	objection
grass	cattle
decency	custom
welcoming	kindness
criticism	doubt
friend	trust
pardon	mercy
loss	removal
destiny	irony
mountain	cabin
ghost	appearance
barrel	basement
marriage	engagement
swell	steamship
discipline	obedience
painter	pianist
analysis	result
veiling	headscarf
nephew	grandmother
redemption	heaven
growth	progress
look	perspective
twilight	dawn
illision	perception
comedy	drama
clock	church
bungalow	settlement
firmness	strength
criterion	selection
valley	meadow
skin	blood
hostage 	prisoner
   */
  
}
