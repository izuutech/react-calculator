import React, {useContext} from 'react'
import { NumberContext } from '../contexts/NumberContext';
import "./css/Main.css"





const Clear = () => {
    const {handleCe, handleClear,outputDigit}=useContext(NumberContext);
    return ( 
        <div className='Clear'>
            
            <input className='eachClear' onClick={handleClear} value={"C"} type="button"/>
            <input className='eachClear' onClick={outputDigit} value={0} type="button"/>
            <input className='eachClear' onClick={handleCe} value={"CE"} type="button"/>
            
        </div>
     );
}
 
export default Clear
