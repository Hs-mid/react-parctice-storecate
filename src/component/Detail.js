import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getByid } from '../data/api'


export default function Detail() {
    const id=useParams().id

    const [article,setarticle]=useState({})
    const [qtt,setqtt]=useState(0)



    useEffect(()=>{
        getByid(+id).then(res=>{
            setarticle(res)
        })
    })




   const handleChange=(event)=>{
        if(event.target.value>0) {
            setqtt(event.target.value) 
        }else{
            setqtt(0)
        }
      };

let data;
if (localStorage.item != null) {
    data = JSON.parse(localStorage.item)
}
else {
    data = []
}



    const savelocalstorage=()=>{
        if (qtt > 1) {
            for (let j = 0; j < qtt; j++) {
                data.push(article)
            }
        } else {
            data.push(article)
        }
        localStorage.setItem('item', JSON.stringify(data))
    }      



  return (
    <div className='row detailrow d-md-flex justify-content-between'>
        <div className='col-md-5'>
            <img className='detailimg' src={article.img} alt='...'/>
        </div>

        <div className='col-md-5'>
            <p >{article.name}</p>
            <p>{article.price}</p>
            <p>{article.description}</p>

             Qtt : <input type='number' onChange={handleChange}/>
             <div>TOTAL:{qtt*article.price}</div>
             <div className='d-md-flex justify-content-around'>
                <Link to='/Product' className='btn btn-primary'>Back</Link>
                <Link to={`/Incart/${id}`} className='btn btn-primary' onClick={savelocalstorage}>add</Link>
             </div>
        </div>
    </div>
  )
}
