import React,{useState} from 'react'
import axios from 'axios'

const News = () => {
    const [data,setdata] =useState([])

const Fetchnews =()=>{
    axios({
        url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1e4f823905ef45b79e5a193669f3c1ca',
       
    })
    .then(response => {
      console.log(response)
      setdata(response.data.articles)
    })
}

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <button className='btn btn-primary' onClick={Fetchnews} >fetch news</button>
                </div>
            </div>
        </div>

<div className="container">
    <div className="row">
        {
            data.map((e)=>{
                return(
                    <div className="col-md-4">



<div className="card" style={{width:"18rem"}}>
  <img src={e.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{e.title}</h5>
    <p className="card-text">{e.description}</p>
    <a href={e.url} className="btn btn-primary">see details</a>
  </div>
</div>






                    </div>
                )





            })
        }
    </div>
</div>


      
    </div>
  )
}

export default News
