import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBasket2Fill } from "react-icons/bs";
import './Nav.css'

function Navbar() {

    const [incart,setincart]=useState(0)
    
    
    useEffect(()=>{
        counter()
    },[])

    function counter(){
        var iteme=[]
        if(localStorage.item !=null){
            iteme=JSON.parse(localStorage.getItem('item'))
            setincart(iteme.length)
            
        }else{
            setincart(0)
        }
        
    }        
    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <span className="navbar-brand">Catstore</span>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Product">
                            Product
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/Cat">
                            Cat
                        </Link>
                    </li>
                </ul>
                <Link to='/Incart' className="iconandnum"><BsFillBasket2Fill className="icon" /><span id="numberarticle">{incart}</span></Link>
            </div>
        </nav>
    );
}

export default Navbar
