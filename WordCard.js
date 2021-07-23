import React from 'react';
import _ from 'lodash'; 
import CharacterCard from './CharacterCard';

const activationHandler = c => { console.log(`${c} has been activated.`) } 

export default function WordCard(props){ 
    return ( 
      <div> 
        { 
        Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler}/> ) 
        } 
      </div> 
    ); 
}

const prepareStateFromWord = (given_word) => { 
    let word = given_word.toUpperCase() 
    let chars = _.shuffle(Array.from(word)) 
    return { 
      word, 
      chars, 
      attempt: 1, 
      guess: '', 
      completed: false 
    } 
}