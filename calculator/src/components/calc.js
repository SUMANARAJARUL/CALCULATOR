import React from "react";
import '../App.css'
import { useState } from "react";

const Calc=()=>{
    
   const[arr,setarr]=useState([]);
   //  const[arr1,setarr1]=useState([])
     const[num,usenum]=useState('');
    const eva=(num)=>{
       try{
        let a=Function("return " +num)();
        
        let s=a.toString();  //converting to string 

         usenum(s);
         

        }
       
       catch(err){
            usenum('');
       }
      //  setarr([...arr,num]) 
    }
    const lo=()=>{
      console.log(arr)
    }
    return(
    <>
    <div className="calc-grid">
         
         <div className="output">
            {num}
         </div>
         <button onClick={()=>{usenum(p=>p+'%')}}>%</button>
         <button onClick={()=>usenum('')}>C</button>
         <button onClick={()=>{
            let s=num.substring(0,num.length-1)
            usenum(s)
         }}>DEL</button>
         <button onClick={()=>{usenum(p=>p+'/')}}>/</button>
         <button onClick={()=>{usenum(p=>p+'7')}}>7</button>
         <button onClick={()=>{usenum(p=>p+'8')}}>8</button>
         <button onClick={()=>{usenum(p=>p+'9')}}>9</button>
         <button onClick={()=>{usenum(p=>p+'*')}}>*</button>
         <button onClick={()=>{usenum(p=>p+'4')}}>4</button>
         <button onClick={()=>{usenum(p=>p+'5')}}>5</button>
         <button onClick={()=>{usenum(p=>p+'6')}}>6</button>
         <button onClick={()=>{usenum(p=>p+'-')}}>-</button>
         <button onClick={()=>{usenum(p=>p+'1')}}>1</button>
         <button onClick={()=>{usenum(p=>p+'2')}}>2</button>
         <button onClick={()=>{usenum(p=>p+'3')}}>3</button>
         <button onClick={()=>{usenum(p=>p+'+')}}>+</button>
         <button onClick={()=>{usenum(p=>p+'.')}}>.</button>
         <button onClick={()=>{usenum(p=>p+'0')}}>0</button>
         <button onClick={()=>{usenum(p=>p+'00')}}>00</button>
         <button onClick={()=>eva(num) }>=</button>
    </div>
    {/* {console.log(arr)} */}
    {/* { ar.unshift(num)} */}

    </> 
);
}
export default Calc
