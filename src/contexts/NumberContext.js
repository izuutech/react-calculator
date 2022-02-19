import React, {createContext, Component} from 'react'
import {create, all, index} from 'mathjs';
const math=create(all);

export const NumberContext=createContext();
class NumberContextProvider extends Component {
    state={
        num:[],
        operand: [],
        isNum: false,
        answer: [0],
        expressionT: ""
    }

/*
========================
display number or sign(operator) on screen
==============================

*/
    // viewScreen=()=>{
    //     this.props.updateItem(this.state)
    // }
    
    outputDigit=(e)=>{
            // let numRange="";
            // this.state.num.map(val=>{
            //     return numRange=`${numRange}${val}`;
            // });
            
            // console.log(e.target.value);
            this.setState({
                ...this.state,
                num: [...this.state.num, e.target.value],
                isNum: true
            });  
    }
    outputOperand=(e)=>{
        if(this.state.isNum===true){
            // let numRange="";
            // this.state.num.map(val=>{
            //     return numRange=`${numRange}${val}`;
            // });
            this.setState({
                ...this.state,
                num: [...this.state.num, e.target.value],
                operand: [...this.state.operand, e.target.value],
                isNum: false
            });
        }else{
            console.log("please input a number")
        }
    }

    showResult=(e)=>{
        console.log("display")
        let expression="";
        this.state.num.map(val=>{
            return expression=`${expression}${val}`;
       
        });
        let lastStr=expression.slice(-1);

            if((lastStr==="+")||(lastStr==="-")||(lastStr==="/")||(lastStr==="*")){
                console.log("doesn't end with num")
            }else{              
                this.setState({...this.state, answer: [...this.state.answer, math.evaluate(expression)]})
                console.log(math.evaluate(expression))  
            }
    }
    handleClear=(e)=>{
        
        this.setState({
            ...this.state,
            num: this.state.num.filter((numbr)=>{
                return this.state.num.indexOf(numbr) !== this.state.num.indexOf(this.state.num[this.state.num.length-1])
            }),
            isNum: true
        });  
    }

    handleCe=(e)=>{
        
        this.setState({
            ...this.state,
            num: [],
            isNum: true,
            answer: []
        });  
        
            //console.log(this.state.num.indexOf(numbr))
        
}
    render() { 
        return (
            <NumberContext.Provider value={{
                ...this.state, 
                outputDigit: this.outputDigit, 
                outputOperand: this.outputOperand, 
                showResult: this.showResult,
                changeInput: this.changeInput,
                handleClear: this.handleClear,
                handleCe: this.handleCe
            }}>
                {this.props.children}
            </NumberContext.Provider>
        );
    }
}
 
export default NumberContextProvider;