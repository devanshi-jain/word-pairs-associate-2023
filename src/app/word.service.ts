import { Injectable } from '@angular/core';
import { WordListComponent } from './lits1/word-list.component';
import { AddWord } from './add-word';


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

    this.lists['three'] = [
      { prompt: 'fire', answer: 'smoke' },
      { prompt: 'animal', answer: 'fox' },
      { prompt: 'road', answer: 'car' },
      { prompt: 'weaver', answer: 'troubles' },
      { prompt: 'flakes', answer: 'rescue' },
      { prompt: 'rein', answer: 'turn' },
      { prompt: 'mission', answer: 'messenger' },
      { prompt: 'furniture', answer: 'chair' },
      { prompt: 'body', answer: 'blood' },
      { prompt: 'army', answer: 'admiral' },
      { prompt: 'bird', answer: 'lark' },
      { prompt: 'celebration', answer: 'alcohol' },
      { prompt: 'grain', answer: 'oats' },
      { prompt: 'joint', answer: 'knuckle' },
      { prompt: 'artist', answer: 'painting' },
      { prompt: 'statement', answer: 'doubt' },
      { prompt: 'revolt', answer: 'policeman' },
      { prompt: 'alliance', answer: 'betrayal' },
      { prompt: 'event', answer: 'incident' },
      { prompt: 'factory', answer: 'foreman' },
      { prompt: 'plant', answer: 'leaf' },
      { prompt: 'tenant', answer: 'rent' },
      { prompt: 'commercial', answer: 'candy' },
      { prompt: 'giant', answer: 'club' },
      { prompt: 'trip', answer: 'map' },
      { prompt: 'mountain', answer: 'boulder' },
      { prompt: 'ruler', answer: 'palace' },
      { prompt: 'play', answer: 'drama' },
      { prompt: 'illness', answer: 'doctor' },
      { prompt: 'church', answer: 'heaven' },
      { prompt: 'infection', answer: 'bacteria' },
      { prompt: 'university', answer: 'semester' },
      { prompt: 'underworld', answer: 'crime' },
      { prompt: 'instrument', answer: 'bagpipes' },
      { prompt: 'glacier', answer: 'avalanche' },
      { prompt: 'idea', answer: 'proverb' },
      { prompt: 'faith', answer: 'renouncement' },
      { prompt: 'theory', answer: 'concept' },
      { prompt: 'authority', answer: 'state' },
      { prompt: 'fir', answer: 'needle' }
    ];

    // //
    // this.lists['cash'] = [
    //   { prompt: 'A major 3rd', answer: 'Db'},
    //   { prompt: 'A minor 3rd', answer: 'c'},
    //   { prompt: 'Ab major 3rd', answer: 'C'},
    //   { prompt: 'Ab minor 3rd', answer: 'B'},
    //   { prompt: 'B major 3rd', answer: 'Eb'},
    //   { prompt: 'B minor 3rd', answer: 'D'},
    //   { prompt: 'Bb major 3rd', answer: 'D'},
    //   { prompt: 'Bb minor 3rd', answer: 'Db'},
    //   { prompt: 'C major 3rd', answer: 'E'},
    //   { prompt: 'C minor 3rd', answer: 'Eb'},
    //   { prompt: 'D major 3rd', answer: 'Gb'},
    //   { prompt: 'D minor 3rd', answer: 'F'},
    //   { prompt: 'Db major 3rd', answer: 'F'},
    //   { prompt: 'Db minor 3rd', answer: 'E'},
    //   { prompt: 'E major 3rd', answer: 'G'},
    //   { prompt: 'E minor 3rd', answer: 'G'},
    //   { prompt: 'Eb major 3rd', answer: 'G'},
    //   { prompt: 'Eb minor 3rd', answer: 'Gb'},
    //   { prompt: 'F major 3rd', answer: 'A'},
    //   { prompt: 'F minor 3rd', answer: 'Ab'},
    //   { prompt: 'G major 3rd', answer: 'B'},
    //   { prompt: 'G minor 3rd', answer: 'Bb'},
    //   { prompt: 'Gb major 3rd', answer: 'Bb'},
    //   { prompt: 'Gb minor 3rd', answer: 'A'},
    //   { prompt: 'A major 5th', answer: 'E'},
    //   { prompt: 'A minor 5th', answer: 'E'},
    //   { prompt: 'Ab major 5th', answer: 'Eb'},
    //   { prompt: 'Ab minor 5th', answer: 'Eb'},
    //   { prompt: 'B major 5th', answer: 'Gb'},
    //   { prompt: 'B minor 5th', answer: 'Gb'},
    //   { prompt: 'Bb major 5th', answer: 'F'},
    //   { prompt: 'Bb minor 5th', answer: 'F'},
    //   { prompt: 'C major 5th', answer: 'G'},
    //   { prompt: 'C minor 5th', answer: 'G'},
    //   { prompt: 'D major 5th', answer: 'A'},
    //   { prompt: 'D minor 5th', answer: 'A'},
    //   { prompt: 'Db major 5th', answer: 'Ab'},
    //   { prompt: 'Db minor 5th', answer: 'Ab'},
    //   { prompt: 'E major 5th', answer: 'B'},
    //   { prompt: 'E minor 5th', answer: 'B'},
    //   { prompt: 'Eb major 5th', answer: 'Bb'},
    //   { prompt: 'Eb minor 5th', answer: 'Bb'},
    //   { prompt: 'F major 5th', answer: 'C'},
    //   { prompt: 'F minor 5th', answer: 'C'},
    //   { prompt: 'G major 5th', answer: 'D'},
    //   { prompt: 'G minor 5th', answer: 'D'},
    //   { prompt: 'Gb major 5th', answer: 'Db'},
    //   { prompt: 'Gb minor 5th', answer: 'Db'}
    // ];
      
    this.lists['osa-one'] = [
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

    this.lists['osa-two'] = [
      { prompt: 'plant', answer: 'leaf' },
      { prompt: 'alliance', answer: 'betrayal' },
      { prompt: 'trip', answer: 'map' },
      { prompt: 'celebration', answer: 'alcohol' },
      { prompt: 'glacier', answer: 'avalanche' },
      { prompt: 'rider', answer: 'switch' },
      { prompt: 'church', answer: 'heaven' },
      { prompt: 'bird', answer: 'lark' },
      { prompt: 'fire', answer: 'smoke' },
      { prompt: 'friend', answer: 'loyalty' },
      { prompt: 'authority', answer: 'state' },
      { prompt: 'body', answer: 'blood' },
      { prompt: 'furniture', answer: 'chair' },
      { prompt: 'instrument', answer: 'bagpipes' },
      { prompt: 'mission', answer: 'messenger' },
      { prompt: 'giant', answer: 'club' },
      { prompt: 'commercial', answer: 'candy' },
      { prompt: 'illness', answer: 'doctor' },
      { prompt: 'mountain', answer: 'boulder' },
      { prompt: 'road', answer: 'car' },
      { prompt: 'weaver', answer: 'admiral' },
      { prompt: 'grain', answer: 'turn' },
      { prompt: 'revolt', answer: 'troubles' },
      { prompt: 'statement', answer: 'frog' },
      { prompt: 'army', answer: 'proverb' },
      { prompt: 'rein', answer: 'painting' },
      { prompt: 'event', answer: 'foreman' },
      { prompt: 'theory', answer: 'fox' },
      { prompt: 'fir', answer: 'bacteria' },
      { prompt: 'artist', answer: 'knuckle' },
      { prompt: 'infection', answer: 'doubt' },
      { prompt: 'factory', answer: 'drama' },
      { prompt: 'university', answer: 'policeman' },
      { prompt: 'ruler', answer: 'needle' },
      { prompt: 'animal', answer: 'semester' },
      { prompt: 'idea', answer: 'renouncement' },
      { prompt: 'joint', answer: 'palace' },
      { prompt: 'faith', answer: 'concept' },
      { prompt: 'play', answer: 'incident' },
      { prompt: 'reptile', answer: 'oats' }
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
}
