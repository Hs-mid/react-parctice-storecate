import React, { useEffect, useState } from 'react'
import './component.css'




export default function Incart() {
  const [dataobj,setdataobj]=useState([])

  useEffect(()=>{
    getfromlocal()

  },[])

  function getfromlocal(){
      if(localStorage.item !=null){
      let arr=JSON.parse(localStorage.getItem('item'))
      setdataobj(arr)
      console.log(dataobj)
    }
    else{
      setdataobj("")
    }
  }


  function deletpro(id){
    let nvarr=[]
    nvarr=JSON.parse(localStorage.getItem('item'))
    nvarr.splice(nvarr.indexOf(setdataobj.id),1)
    setdataobj(nvarr)
    localStorage.setItem('item',JSON.stringify(nvarr))
  }
  
  return (
    <div className='row'>
      {dataobj.map((item,index)=>{
        return(
          <div className='col-md-4 incart' key={index}>
            <div>
              <img src={item.img} className='incartimg' alt='..'/>
            </div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <div>
              <button className='btn btn-danger' onClick={()=>{deletpro(item.id)}}>delet</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
