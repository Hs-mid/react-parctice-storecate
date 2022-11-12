import React, { Component } from 'react'
import {getAlldata} from '../data/api'
import Card from '../component/Card'

export default class Product extends Component {
    state={
        data:[]
    }

    componentDidMount(){
        getAlldata().then(res=>{
            this.setState({
                data:res
            })
        })
    }
  render() {

    const myarr=[...this.state.data]
    return (
      <div >
        <h1>All product</h1>
        <div className='row'>
            {
                myarr.map(item=>{
                    return (
                        <Card data={item} key={item.id}/>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
