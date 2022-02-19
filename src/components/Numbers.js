import React, {useContext} from 'react'
import { NumberContext } from '../contexts/NumberContext';
import "./css/Main.css"





const Numbers = () => {
    const {outputDigit}=useContext(NumberContext);
    // console.log(outputDigit)
    // const [number, setNumber]=useState("");
    // const outputDigit=(e)=>{
    //     setNumber([...number, e.target.value]);
    // }
    return ( 
        <div className='Numbers'>
            
            <div className='topN'>
            <input className='eachNumber' onClick={outputDigit} value={7} type="button"/>
            <input className='eachNumber' onClick={outputDigit} value={8} type="button"/>
            <input className='eachNumber' onClick={outputDigit} value={9} type="button"/>
            </div>
            <div className='middleN'>
            <input className='eachNumber' onClick={outputDigit} value={6} type="button"/>
            <input className='eachNumber' onClick={outputDigit} value={5} type="button"/>
            <input className='eachNumber' onClick={outputDigit} value={4} type="button"/>
            </div>
            <div className='bottomN'>
            <input className='eachNumber' onClick={outputDigit} value={3} type="button"/>
            <input className='eachNumber' onClick={outputDigit} value={2} type="button"/>
            <input className='eachNumber' onClick={outputDigit} value={1} type="button"/>
            </div>
        </div>
     );
}
 
export default Numbers
