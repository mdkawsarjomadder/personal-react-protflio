import React from 'react'
import { useState, useEffect } from 'react'

const TextChange = () => {
      const texts = ["Hi,I'm Kawsar."];
      const [currintText, setCurrintText] = useState("");
      const [endValue, setEndValue] = useState(true);
      const [isFroward, setIsfroward] = useState(true);
      const [index, setIndex] = useState(0);
      useEffect(() =>{
            const  intervaiId = setInterval(() => {
               setCurrintText(texts[index].substring(0,endValue));
               if(isFroward){
                  setEndValue((prev) => prev + 1);
               }
               else
               setEndValue((prev) => prev -1 );
            if(endValue > texts[index].length+10){
                  setIsfroward(false)
            }
            if(endValue < 2.1){
            setIsfroward(true);
            setIndex((prev) => prev&texts.length);
            }
            },50);
            return() => clearInterval(intervaiId)
      },[endValue,isFroward,index,texts])
  return (
    <div className=' transition ease duration-300'>{currintText}</div>
  )
}

export default TextChange