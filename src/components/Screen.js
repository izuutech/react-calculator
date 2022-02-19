import React, {useContext, useEffect, useState} from 'react';
import { NumberContext } from '../contexts/NumberContext';

const Screen = () => {
    //introduce context
   
    const {num, operand, isNum, answer}=useContext(NumberContext);
    //is the next value coming in a number or operator
    
    let numRange="";
    let signRange="";
    // //isNum ? (
    //     num.map(val=>{
    //         return numRange=`${numRange}${val}`;
    //     });
    //     console.log(numRange)
    




    const vieww=isNum ? (
        num.map(val=>{
            return numRange=`${numRange}${val}`;
        })
        ): (
            //NOT USEFUL
            operand.map(val=>{
                return signRange=`${val}`;
            })
        )









    // const [newView, setNewView]=useState("");
    // useEffect(()=>{
    //     const timeout=setTimeout(()=>{
    //         setNewView(expressionT);
    //     }, 10)
    //     return ()=>clearTimeout(timeout)
    // }, [newView, expressionT])





        //) : (
            //NOT USEFUL
        // num.map(val=>{
        //     return signRange=`${signRange}${val}`;
        // })
            //NOT USEFUL
    //)
    // digit.map(val=>{
    //     return numRange=`${numRange}${val}`;
    // })
    //use state
    // const [valu, setValu]=useState([""]);
    // setValu([...valu, numRange])
    //console.log(signRange)
    return ( 
        <div className='screen'>
            <div className='screenSpace'>
            <input className="operating"  type="text" value={vieww.slice(-1)} readOnly/>
            <input className="result" value={answer.slice(-1)} readOnly/>
            </div>
        </div>
     );
}
 
export default Screen;