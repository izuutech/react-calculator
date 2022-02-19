import React, {useContext} from 'react'
import { NumberContext } from '../contexts/NumberContext';


const Side = () => {
    const {showResult}=useContext(NumberContext);
    const {outputOperand}=useContext(NumberContext);
    // const showResult=()=>{
    //     let expression="";
    //     num.map(val=>{
    //         return expression=`${expression}${val}`;
       
    //     });
    //     let lastStr=expression.slice(-1);

    //         if((lastStr==="+")||(lastStr==="-")||(lastStr==="/")||(lastStr==="*")){
    //             console.log("doesn't end with num")
    //         }else{              
    //             setAnswer([...answer, math.evaluate(expression)])
    //             console.log(math.evaluate(expression))  
    //         }
            
      
    // // if(isNaN(lastStr)){
    // //     console.log("input a number at the back of your expression")
            
    // //     }else{
   
            
    //    // } 
    // }
    return ( 
        <div className="side">
          
            <input className='percent' value="%" type="button" onClick={outputOperand}/>
       
            <input className='equality' value="=" type="button" onClick={showResult}/>
        </div>
     );
}
 
export default Side;