import state from "../store"
import { useSnapshot } from "valtio"
import PropTypes from "prop-types"


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
    <button className={`flex-1 rounded-md hover:bg-white ${customStyle}`} onClick={handleClick} style={generateStyle(type)}>{buttonText}</button>
  )
}

CustomButton.propTypes = {
    buttonText:PropTypes.string.isRequired,
    handleClick:PropTypes.func,
    customStyle:PropTypes.string,
    type:PropTypes.string
}

export default CustomButton