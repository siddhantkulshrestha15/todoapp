import React from 'react'
import { useState } from 'react';
import './TodoList.css'

function TodoList() {
    const[activity, setActivity]  = useState("");
    const[listdata, setListdata] = useState([]);
 function addActivity(){
    setListdata((listdata)=>{
        const xlist = [...listdata, activity]
        console.log(xlist);
        setActivity('');
        return xlist;
    })
 }
 function deleteHandler(i){
    const updatedList = listdata.filter((elem, id) =>{
        return i!= id
    })
    setListdata(updatedList);
 }
 function removeallHandler(){
    setListdata([])
 }
  return (
   <>
   <div className="box">
          <div className="heading">
            <h1>TODO LIST</h1>
          </div>
     <div className="input">
        <input className='inp1' type="text" value={activity} onChange={(e)=>setActivity(e.target.value)} placeholder='Add item' />
        <button className='inp2' onClick={addActivity} type='submit'>Add</button>
    </div>
    <h1 className="listpara">Here is your List :{")"}</h1>
    {listdata != [] &&listdata.map((data, i) =>{
        return(
         <>
         <h2><span className='data' >{data}</span>  <button className='inp2' onClick={() =>deleteHandler(i)} >Remove</button></h2>
         </>
        )
    })}
    {listdata.length >=1 && <button className="removeall inp2" onClick={removeallHandler} >Remove All</button>
   }
   </div>
   </>
  )
}

export default TodoList
