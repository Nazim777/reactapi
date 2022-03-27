import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Fetchnews = () => {
    const [news, setnews] = useState([ ])
  



  return (
    <>
     
     <div className="container">
       <div className="row">
         <div className="col-md-4">
           <button className='btn btn-primary' onClick={(()=>{
               axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1e4f823905ef45b79e5a193669f3c1ca').then((Response)=>{
                   console.log(Response)
                   setnews(Response.data.articles)
                  
                   

               })
           })} >fetch news</button>
         </div>
       </div>
       </div>   

       <div className="container">
         <div className="row">
             {
                 news.map((e)=>{
                     return(
                         <div className="col-md-4">



<div className="card" style={{width: '18rem'}}>
  <img src={e.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{e.title}</h5>
    <p className="card-text"> {e.description}</p>
    <a href={e.url} className="btn btn-primary">see more</a>
  </div>
</div>







                         </div>
                     )
                 })
             }
           
          
         </div>
       </div>
     
    </>
    
  )
}

export default Fetchnews
