import state from "../store"
import { useSnapshot } from "valtio"
// import React from 'react'

const CustomButton = ({buttonText, handleClick, customStyle, type}) => {
    const snap = useSnapshot(state)
    const generateStyle = (type)=> {
        if(type==='filled'){
            return {
                backgroundColor:snap.color,
                color:'#fff'
            }
        }
    }
  return (
    <button className={`flex-1 rounded-md ${customStyle}`} onClick={handleClick} style={generateStyle(type)}>{buttonText}</button>
  )
}

export default CustomButton