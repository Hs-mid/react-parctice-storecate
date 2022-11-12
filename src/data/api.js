import data from './data.json'

function getAlldata(){
    return Promise.resolve(data)
}

function getByid(id){
    const article=data.find(item=>item.id===id)
    return Promise.resolve(article)
}

export  {getAlldata,getByid}