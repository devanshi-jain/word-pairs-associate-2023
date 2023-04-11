import { Injectable } from '@angular/core';
import { WordListComponent } from './lits1/word-list.component';
import { WordListThreeComponent } from './lits3/word-list-three.component';
import { AddWord } from './add-word';
import { WordListFiveComponent } from './lits5/word-list-five.component';
import { WordListInputOneComponent } from './word-input-display/word-list-input-one.component';
import { WordListInputThreeComponent } from './word-input-display-three/word-list-input-three.component';
import { WordListInputFiveComponent } from './word-input-display-five/word-list-input-five.component';


// interface wordList {
//   [key: string]: object
// }

@Injectable({ providedIn: 'root' })
export class WordService {

  private lists :any = [];
  

  constructor() {
    this.lists['one'] = [
      { prompt: 'tower', answer: 'bell' },
      { prompt: 'sea', answer: 'tide' },
      { prompt: 'newspaper', answer: 'interview' },
      { prompt: 'sonata', answer: 'joy' },
      { prompt: 'banner', answer: 'camp' },
      { prompt: 'tendency', answer: 'increment' },
      { prompt: 'mother', answer: 'child' },
      { prompt: 'insect', answer: 'caterpillar' },
      { prompt: 'river', answer: 'ship' },
      { prompt: 'coast', answer: 'beach' },
      { prompt: 'gun', answer: 'bullet' },
      { prompt: 'blacksmith', answer: 'metal' },
      { prompt: 'home', answer: 'room' },
      { prompt: 'building', answer: 'hall' },
      { prompt: 'rain', answer: 'flood' },
      { prompt: 'avenue', answer: 'tree' },
      { prompt: 'decency', answer: 'truth' },
      { prompt: 'decree', answer: 'decision' },
      { prompt: 'diamond', answer: 'hardness' },
      { prompt: 'result', answer: 'effect' },
      { prompt: 'occupation', answer: 'doctor' },
      { prompt: 'book', answer: 'story' },
      { prompt: 'attack', answer: 'operation' },
      { prompt: 'cat', answer: 'soul' },
      { prompt: 'doll', answer: 'cradle' },
      { prompt: 'episode', answer: 'happiness' },
      { prompt: 'railroad', answer: 'steam' },
      { prompt: 'kitchen', answer: 'pot' },
      { prompt: 'countryside', answer: 'swamp' },
      { prompt: 'musician', answer: 'pianist' },
      { prompt: 'industry', answer: 'factory' },
      { prompt: 'clothing', answer: 'scarf' },
      { prompt: 'car', answer: 'headlight' },
      { prompt: 'gale', answer: 'wind' },
      { prompt: 'bouquet', answer: 'blossom' },
      { prompt: 'bottle', answer: 'toast' },
      { prompt: 'group', answer: 'person' },
      { prompt: 'crisis', answer: 'emergency' },
      { prompt: 'girl', answer: 'engagement' },
      { prompt: 'harbor', answer: 'crane' }
    ];

    this.lists['five'] = [
      { prompt: 'power', answer: 'ruler' },
      { prompt: 'butterfly', answer: 'bloom' },
      { prompt: 'dream', answer: 'reality' },
      { prompt: 'language', answer: 'acoustic' },
      { prompt: 'examiner', answer: 'failure' },
      { prompt: 'coach', answer: 'horse' },
      { prompt: 'animal', answer: 'frog' },
      { prompt: 'demand', answer: 'difficulty' },
      { prompt: 'question', answer: 'objection' },
      { prompt: 'grass', answer: 'cattle' },
      { prompt: 'decency', answer: 'custom' },
      { prompt: 'welcoming', answer: 'kindness' },
      { prompt: 'criticism', answer: 'doubt' },
      { prompt: 'friend', answer: 'trust' },
      { prompt: 'pardon', answer: 'mercy' },
      { prompt: 'loss', answer: 'removal' },
      { prompt: 'destiny', answer: 'irony' },
      { prompt: 'mountain', answer: 'cabin' },
      { prompt: 'ghost', answer: 'appearance' },
      { prompt: 'barrel', answer: 'basement' },
      { prompt: 'marriage', answer: 'engagement' },
      { prompt: 'swell', answer: 'steamship' },
      { prompt: 'discipline', answer: 'obedience' },
      { prompt: 'painter', answer: 'pianist' },
      { prompt: 'analysis', answer: 'result' },
      { prompt: 'veiling', answer: 'headscarf' },
      { prompt: 'nephew', answer: 'grandmother' },
      { prompt: 'redemption', answer: 'heaven' },
      { prompt: 'growth', answer: 'progress' },
      { prompt: 'look', answer: 'perspective' },
      { prompt: 'twilight', answer: 'dawn' },
      { prompt: 'illusion', answer: 'perception' },
      { prompt: 'comedy', answer: 'drama' },
      { prompt: 'clock', answer: 'church' },
      { prompt: 'bungalow', answer: 'settlement' },
      { prompt: 'firmness', answer: 'strength' },
      { prompt: 'criterion', answer: 'selection' },
      { prompt: 'valley', answer: 'meadow' },
      { prompt: 'skin', answer: 'blood' },
      { prompt: 'garden', answer: 'flowerbed' }
    ];
  }

  getWordList(listName : any) {
    return this.lists[listName];
  }

  getWords(listName : any) {
    let listObject: AddWord[] = [];
    this.lists[listName].forEach((element: any) => {
      listObject.push(new AddWord(WordListComponent,element));
    });
    return listObject;
  }

  getWordsOne() {
    return [
      new AddWord(
        WordListComponent,
        { prompt: 'tower', answer: 'bell' }
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'sea', answer: 'tide' }
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'newspaper', answer: 'interview' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'sonata', answer: 'joy' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'banner', answer: 'camp' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'tendency', answer: 'increment' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'mother', answer: 'child' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'insect', answer: 'caterpillar' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'river', answer: 'ship' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'coast', answer: 'beach' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'gun', answer: 'bullet' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'blacksmith', answer: 'metal' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'home', answer: 'room' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'building', answer: 'hall' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'rain', answer: 'flood' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'avenue', answer: 'tree' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'decency', answer: 'truth' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'decree', answer: 'decision' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'diamond', answer: 'hardness' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'result', answer: 'effect' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'occupation', answer: 'doctor' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'book', answer: 'story' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'attack', answer: 'operation' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'cat', answer: 'soul' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'doll', answer: 'cradle' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'episode', answer: 'happiness' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'railroad', answer: 'steam' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'kitchen', answer: 'pot' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'countryside', answer: 'swamp' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'musician', answer: 'pianist' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'industry', answer: 'factory' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'clothing', answer: 'scarf' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'car', answer: 'headlight' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'gale', answer: 'wind' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'bouquet', answer: 'blossom' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'bottle', answer: 'toast' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'group', answer: 'person' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'crisis', answer: 'emergency' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'girl', answer: 'engagement' },
      ),
      new AddWord(
        WordListComponent,
        { prompt: 'harbor', answer: 'crane' },
      
      ),
    ];
  }

  getWordsInputOne() {
    return [
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'tower', answer: 'bell' }
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'sea', answer: 'tide' }
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'newspaper', answer: 'interview' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'sonata', answer: 'joy' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'banner', answer: 'camp' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'tendency', answer: 'increment' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'mother', answer: 'child' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'insect', answer: 'caterpillar' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'river', answer: 'ship' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'coast', answer: 'beach' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'gun', answer: 'bullet' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'blacksmith', answer: 'metal' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'home', answer: 'room' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'building', answer: 'hall' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'rain', answer: 'flood' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'avenue', answer: 'tree' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'decency', answer: 'truth' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'decree', answer: 'decision' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'diamond', answer: 'hardness' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'result', answer: 'effect' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'occupation', answer: 'doctor' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'book', answer: 'story' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'attack', answer: 'operation' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'cat', answer: 'soul' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'doll', answer: 'cradle' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'episode', answer: 'happiness' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'railroad', answer: 'steam' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'kitchen', answer: 'pot' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'countryside', answer: 'swamp' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'musician', answer: 'pianist' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'industry', answer: 'factory' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'clothing', answer: 'scarf' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'car', answer: 'headlight' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'gale', answer: 'wind' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'bouquet', answer: 'blossom' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'bottle', answer: 'toast' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'group', answer: 'person' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'crisis', answer: 'emergency' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'girl', answer: 'engagement' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { prompt: 'harbor', answer: 'crane' },
      
      )
    ];
  }


  getWordsThree() {
    return [
      new AddWord(
        WordListThreeComponent,
        { listhree: 'fire', listhreesec: 'smoke' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'animal', listhreesec: 'fox' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'road', listhreesec: 'car' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'weaver', listhreesec: 'troubles' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'flakes', listhreesec: 'rescue' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'rein', listhreesec: 'turn' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'mission', listhreesec: 'messenger' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'furniture', listhreesec: 'chair' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'body', listhreesec: 'blood' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'army', listhreesec: 'admiral' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'bird', listhreesec: 'lark' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'celebration', listhreesec: 'alcohol' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'grain', listhreesec: 'oats' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'joint', listhreesec: 'knuckle' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'artist', listhreesec: 'painting' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'statement', listhreesec: 'doubt' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'revolt', listhreesec: 'policeman' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'alliance', listhreesec: 'betrayal' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'event', listhreesec: 'incident' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'factory', listhreesec: 'foreman' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'plant', listhreesec: 'leaf' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'tenant', listhreesec: 'rent' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'commercial', listhreesec: 'candy' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'giant', listhreesec: 'club' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'trip', listhreesec: 'map' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'mountain', listhreesec: 'boulder' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'ruler', listhreesec: 'palace' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'play', listhreesec: 'drama' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'illness', listhreesec: 'doctor' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'church', listhreesec: 'heaven' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'infection', listhreesec: 'bacteria' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'university', listhreesec: 'semester' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'underworld', listhreesec: 'crime' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'instrument', listhreesec: 'bagpipes' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'glacier', listhreesec: 'avalanche' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'idea', listhreesec: 'proverb' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'faith', listhreesec: 'renouncement' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'theory', listhreesec: 'concept' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'authority', listhreesec: 'state' }
      ),
      new AddWord(
        WordListThreeComponent,
        { listhree: 'fir', listhreesec: 'needle' }
      )
    ];
  }
  getWordsInputThree() {
    return [
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'fire', listhreesec: 'smoke' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'animal', listhreesec: 'fox' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'road', listhreesec: 'car' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'weaver', listhreesec: 'troubles' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'flakes', listhreesec: 'rescue' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'rein', listhreesec: 'turn' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'mission', listhreesec: 'messenger' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'furniture', listhreesec: 'chair' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'body', listhreesec: 'blood' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'army', listhreesec: 'admiral' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'bird', listhreesec: 'lark' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'celebration', listhreesec: 'alcohol' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'grain', listhreesec: 'oats' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'joint', listhreesec: 'knuckle' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'artist', listhreesec: 'painting' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'statement', listhreesec: 'doubt' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'revolt', listhreesec: 'policeman' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'alliance', listhreesec: 'betrayal' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'event', listhreesec: 'incident' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'factory', listhreesec: 'foreman' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'plant', listhreesec: 'leaf' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'tenant', listhreesec: 'rent' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'commercial', listhreesec: 'candy' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'giant', listhreesec: 'club' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'trip', listhreesec: 'map' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'mountain', listhreesec: 'boulder' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'ruler', listhreesec: 'palace' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'play', listhreesec: 'drama' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'illness', listhreesec: 'doctor' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'church', listhreesec: 'heaven' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'infection', listhreesec: 'bacteria' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'university', listhreesec: 'semester' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'underworld', listhreesec: 'crime' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'instrument', listhreesec: 'bagpipes' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'glacier', listhreesec: 'avalanche' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'idea', listhreesec: 'proverb' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'faith', listhreesec: 'renouncement' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'theory', listhreesec: 'concept' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'authority', listhreesec: 'state' }
      ),
      new AddWord(
        WordListInputThreeComponent,
        { listhree: 'fir', listhreesec: 'needle' }
      ),
    ];
  }

  getWordsFive() {
    return [
      new AddWord(
        WordListFiveComponent,
        { prompt: 'power', answer: 'ruler' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'butterfly', answer: 'bloom' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'dream', answer: 'reality' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'language', answer: 'acoustic' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'examiner', answer: 'failure' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'coach', answer: 'horse' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'animal', answer: 'frog' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'demand', answer: 'difficulty' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'question', answer: 'objection' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'grass', answer: 'cattle' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'decency', answer: 'custom' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'welcoming', answer: 'kindness' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'criticism', answer: 'doubt' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'friend', answer: 'trust' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'pardon', answer: 'mercy' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'loss', answer: 'removal' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'destiny', answer: 'irony' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'mountain', answer: 'cabin' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'ghost', answer: 'appearance' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'barrel', answer: 'basement' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'marriage', answer: 'engagement' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'swell', answer: 'steamship' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'discipline', answer: 'obedience' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'painter', answer: 'pianist' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'analysis', answer: 'result' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'veiling', answer: 'headscarf' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'nephew', answer: 'grandmother' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'redemption', answer: 'heaven' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'growth', answer: 'progress' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'look', answer: 'perspective' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'twilight', answer: 'dawn' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'illusion', answer: 'perception' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'comedy', answer: 'drama' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'clock', answer: 'church' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'bungalow', answer: 'settlement' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'firmness', answer: 'strength' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'criterion', answer: 'selection' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'valley', answer: 'meadow' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'skin', answer: 'blood' }
      ),
      new AddWord(
        WordListFiveComponent,
        { prompt: 'garden', answer: 'flowerbed' },
      )
    ];
  }

  getWordsInputFive() {
    return [
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'power', answer: 'ruler' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'butterfly', answer: 'bloom' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'dream', answer: 'reality' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'language', answer: 'acoustic' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'examiner', answer: 'failure' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'coach', answer: 'horse' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'animal', answer: 'frog' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'demand', answer: 'difficulty' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'question', answer: 'objection' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'grass', answer: 'cattle' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'decency', answer: 'custom' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'welcoming', answer: 'kindness' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'criticism', answer: 'doubt' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'friend', answer: 'trust' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'pardon', answer: 'mercy' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'loss', answer: 'removal' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'destiny', answer: 'irony' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'mountain', answer: 'cabin' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'ghost', answer: 'appearance' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'barrel', answer: 'basement' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'marriage', answer: 'engagement' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'swell', answer: 'steamship' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'discipline', answer: 'obedience' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'painter', answer: 'pianist' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'analysis', answer: 'result' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'veiling', answer: 'headscarf' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'nephew', answer: 'grandmother' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'redemption', answer: 'heaven' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'growth', answer: 'progress' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'look', answer: 'perspective' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'twilight', answer: 'dawn' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'illusion', answer: 'perception' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'comedy', answer: 'drama' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'clock', answer: 'church' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'bungalow', answer: 'settlement' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'firmness', answer: 'strength' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'criterion', answer: 'selection' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'valley', answer: 'meadow' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'skin', answer: 'blood' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { prompt: 'garden', answer: 'flowerbed' },
      )
    ];
  }
}
