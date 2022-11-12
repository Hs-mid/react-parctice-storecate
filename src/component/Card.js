import React from 'react'
import { Link } from 'react-router-dom'
import './component.css'

export default function Card(props) {
    const data=props.data
  return (
        <div className="card col-md-4">
            <img src={data.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-name">{data.name}</h5>
                <p className="card-price">{data.price}dh</p>
                <Link to={`/detail/${data.id}`} className="btn btn-primary">detail</Link>
            </div>
        </div>
  )
}
