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
    ]

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
}
