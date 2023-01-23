import { Injectable } from '@angular/core';
import { WordListComponent } from './lits1/word-list.component';
import { WordListThreeComponent } from './lits3/word-list-three.component';
import { AddWord } from './add-word';
import { WordListFiveComponent } from './lits5/word-list-five.component';
import { WordListInputOneComponent } from './word-input-display/word-list-input-one.component';
import { WordListInputThreeComponent } from './word-input-display-three/word-list-input-three.component';
import { WordListInputFiveComponent } from './word-input-display-five/word-list-input-five.component';

@Injectable({ providedIn: 'root' })
export class WordService {
  getWordsOne() {
    return [
      new AddWord(
        WordListComponent,
        { listone: 'tower', listonesec: 'bell' }
      ),
      new AddWord(
        WordListComponent,
        { listone: 'sea', listonesec: 'tide' }
      ),
      new AddWord(
        WordListComponent,
        { listone: 'newspaper', listonesec: 'interview' },
      ),
      new AddWord(
        WordListComponent,
        { listone: 'sonata', listonesec: 'joy' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'banner', listonesec: 'camp' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'tendency', listonesec: 'increment' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'mother', listonesec: 'child' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'insect', listonesec: 'caterpillar' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'river', listonesec: 'ship' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'coast', listonesec: 'beach' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'gun', listonesec: 'bullet' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'blacksmith', listonesec: 'metal' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'home', listonesec: 'room' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'building', listonesec: 'hall' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'rain', listonesec: 'flood' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'avenue', listonesec: 'tree' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'decency', listonesec: 'truth' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'decree', listonesec: 'decision' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'diamond', listonesec: 'hardness' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'result', listonesec: 'effect' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'occupation', listonesec: 'doctor' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'book', listonesec: 'story' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'attack', listonesec: 'operation' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'cat', listonesec: 'soul' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'doll', listonesec: 'cradle' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'episode', listonesec: 'happiness' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'railroad', listonesec: 'steam' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'kitchen', listonesec: 'pot' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'countryside', listonesec: 'swamp' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'musician', listonesec: 'pianist' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'industry', listonesec: 'factory' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'clothing', listonesec: 'scarf' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'car', listonesec: 'headlight' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'gale', listonesec: 'wind' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'bouquet', listonesec: 'blossom' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'bottle', listonesec: 'toast' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'group', listonesec: 'person' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'crisis', listonesec: 'emergency' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'girl', listonesec: 'engagement' },
      // ),
      // new AddWord(
      //   WordListComponent,
      //   { listone: 'harbor', listonesec: 'crane' },
      // 
      ),
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
        { listone: 'sea', listonesec: 'tide' }
      ),
      new AddWord(
        WordListInputOneComponent,
        { listone: 'newspaper', listonesec: 'interview' },
      ),
      new AddWord(
        WordListInputOneComponent,
        { listone: 'sonata', listonesec: 'joy' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'banner', listonesec: 'camp' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'tendency', listonesec: 'increment' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'mother', listonesec: 'child' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'insect', listonesec: 'caterpillar' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'river', listonesec: 'ship' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'coast', listonesec: 'beach' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'gun', listonesec: 'bullet' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'blacksmith', listonesec: 'metal' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'home', listonesec: 'room' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'building', listonesec: 'hall' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'rain', listonesec: 'flood' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'avenue', listonesec: 'tree' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'decency', listonesec: 'truth' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'decree', listonesec: 'decision' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'diamond', listonesec: 'hardness' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'result', listonesec: 'effect' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'occupation', listonesec: 'doctor' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'book', listonesec: 'story' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'attack', listonesec: 'operation' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'cat', listonesec: 'soul' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'doll', listonesec: 'cradle' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'episode', listonesec: 'happiness' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'railroad', listonesec: 'steam' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'kitchen', listonesec: 'pot' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'countryside', listonesec: 'swamp' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'musician', listonesec: 'pianist' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'industry', listonesec: 'factory' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'clothing', listonesec: 'scarf' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'car', listonesec: 'headlight' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'gale', listonesec: 'wind' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'bouquet', listonesec: 'blossom' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'bottle', listonesec: 'toast' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'group', listonesec: 'person' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'crisis', listonesec: 'emergency' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'girl', listonesec: 'engagement' },
      // ),
      // new AddWord(
      //   WordListInputOneComponent,
      //   { listone: 'harbor', listonesec: 'crane' },
      // 
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
        { listfive: 'power', listfivesec: 'ruler' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'butterfly', listfivesec: 'bloom' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'dream', listfivesec: 'reality' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'language', listfivesec: 'acoustic' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'examiner', listfivesec: 'failure' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'coach', listfivesec: 'horse' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'animal', listfivesec: 'frog' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'demand', listfivesec: 'difficulty' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'question', listfivesec: 'objection' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'grass', listfivesec: 'cattle' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'decency', listfivesec: 'custom' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'welcoming', listfivesec: 'kindness' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'criticism', listfivesec: 'doubt' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'friend', listfivesec: 'trust' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'pardon', listfivesec: 'mercy' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'loss', listfivesec: 'removal' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'destiny', listfivesec: 'irony' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'mountain', listfivesec: 'cabin' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'ghost', listfivesec: 'appearance' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'barrel', listfivesec: 'basement' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'marriage', listfivesec: 'engagement' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'swell', listfivesec: 'steamship' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'discipline', listfivesec: 'obedience' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'painter', listfivesec: 'pianist' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'analysis', listfivesec: 'result' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'veiling', listfivesec: 'headscarf' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'nephew', listfivesec: 'grandmother' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'redemption', listfivesec: 'heaven' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'growth', listfivesec: 'progress' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'look', listfivesec: 'perspective' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'twilight', listfivesec: 'dawn' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'illusion', listfivesec: 'perception' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'comedy', listfivesec: 'drama' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'clock', listfivesec: 'church' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'bungalow', listfivesec: 'settlement' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'firmness', listfivesec: 'strength' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'criterion', listfivesec: 'selection' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'valley', listfivesec: 'meadow' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'skin', listfivesec: 'blood' }
      ),
      new AddWord(
        WordListFiveComponent,
        { listfive: 'garden', listfivesec: 'flowerbed' },
      )
    ];
  }

  getWordsInputFive() {
    return [
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'power', listfivesec: 'ruler' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'butterfly', listfivesec: 'bloom' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'dream', listfivesec: 'reality' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'language', listfivesec: 'acoustic' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'examiner', listfivesec: 'failure' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'coach', listfivesec: 'horse' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'animal', listfivesec: 'frog' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'demand', listfivesec: 'difficulty' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'question', listfivesec: 'objection' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'grass', listfivesec: 'cattle' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'decency', listfivesec: 'custom' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'welcoming', listfivesec: 'kindness' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'criticism', listfivesec: 'doubt' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'friend', listfivesec: 'trust' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'pardon', listfivesec: 'mercy' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'loss', listfivesec: 'removal' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'destiny', listfivesec: 'irony' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'mountain', listfivesec: 'cabin' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'ghost', listfivesec: 'appearance' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'barrel', listfivesec: 'basement' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'marriage', listfivesec: 'engagement' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'swell', listfivesec: 'steamship' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'discipline', listfivesec: 'obedience' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'painter', listfivesec: 'pianist' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'analysis', listfivesec: 'result' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'veiling', listfivesec: 'headscarf' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'nephew', listfivesec: 'grandmother' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'redemption', listfivesec: 'heaven' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'growth', listfivesec: 'progress' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'look', listfivesec: 'perspective' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'twilight', listfivesec: 'dawn' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'illusion', listfivesec: 'perception' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'comedy', listfivesec: 'drama' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'clock', listfivesec: 'church' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'bungalow', listfivesec: 'settlement' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'firmness', listfivesec: 'strength' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'criterion', listfivesec: 'selection' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'valley', listfivesec: 'meadow' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'skin', listfivesec: 'blood' }
      ),
      new AddWord(
        WordListInputFiveComponent,
        { listfive: 'garden', listfivesec: 'flowerbed' },
      )
    ];
  }
}
