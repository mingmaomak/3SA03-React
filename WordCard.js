import React, { useState } from 'react';
import _ from 'lodash'; 
import CharacterCard from './CharacterCard';

//const activationHandler = c => { console.log(`${c} has been activated.`) } 

const prepareStateFromWord = (given_word) => { 
  let word = given_word.toUpperCase()  //ทำตัวพิมพ์ใหญ่
  let chars = _.shuffle(Array.from(word)) //สุ่มลำดับตัวอักษร
  console.log(chars);
  return { 
    word, //word คำต้นฉบับแบบตัวอักษรใหญ่
    chars, //chars ตัวอักษรแต่ละตัวที่สุ่มลำดับแล้ว 
    attempt: 1, //attempt จำนวนครั้งที่พยายามเล่น
    guess: '', //guess ข้อความที่ผู้เล่นเดาเข้ามา
    completed: false //completed การเล่นสิ้นสุดแล้วหรือไม่ 
  } 
}


export default function WordCard(props){ 
  
  const [state,setState] = useState(prepareStateFromWord(props.value))

  const activationHandler = (c) => { 
    console.log(`${c} has been activated.`) 
  
    let guess = state.guess + c 
    setState({ ...state ,  guess})     
  
    if(guess.length == state.word.length){       
      if(guess == state.word){ //เดาคำถูก
        console.log('yeah!') 
        setState({ ...state ,  guess: '', completed: true}) 
        alert('You win!')  
      }else{ //เดาไม่ถูก
        console.log('reset') 
        setState({ ...state ,  guess: '', attempt: state.attempt + 1}) 
      } 
    }     
  }

    return ( 
      <div> 
        { 
        //Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt = {state.attempt}/> )
        state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt = {state.attempt}/> )  
        } 
      </div> 
    ); 
}

