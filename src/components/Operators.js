import React, {useContext} from 'react'
import { NumberContext } from '../contexts/NumberContext';

const Operator = () => {
    const {outputOperand}=useContext(NumberContext);
    
    return ( 
        <div className="operator">
            <input className="sign" onClick={outputOperand} type="button" value="-"/>
            <input className="sign" onClick={outputOperand} type="button"  value="+"/>
            <input className="sign" onClick={outputOperand} type="button" value="*"/>
            <input className="sign" onClick={outputOperand} type="button" value="/"/>
        </div>
        
     );
     
}
 
export default Operator;