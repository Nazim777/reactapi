import React,{useState,useEffect} from 'react'



const User = () => {


const [data, setdata] = useState([])
const [name, setname] = useState('')
const [email, setemail] = useState('')
const [userid, setuserid] = useState('')
const [username, setusername] = useState('')
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
    result.json().then((e)=>{
      setdata(e)
      setname(e[0].name)
      setusername(e[0].username)
      setemail(e[0].email)
      setuserid(e[0].id)
     
     
      

    })

  })

  
 
},[])


 const deleteuser =  (id) => 
 {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
    method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.log(resp)

    })
    

  })

 }
 
 
 
  return (
    <div > 
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </tr>
        {
        data.map((e)=>(
          <tr key={e.id}>
            <td>id: {e.id}</td>
            <td>name:{e.name}</td>
            <td>username:{e.username}</td>
            <td>email:{e.email}</td>
            <td><button onClick={(()=>{deleteuser(e.id)})}>delete</button></td>
            <td><button onClick={(()=>{
               setname (e.name)
               setusername(e.username)
               setemail(e.email)
               setuserid(e.id)

            })}>selectuser</button></td>
           
          </tr>
           
         

        ))
      }
        


      </table> <br /> <br />
      <input type="text" onChange={((e)=>{setuserid(e.target.value)})} value={userid}  /> <br /> <br />
      <input type="text" onChange={((e)=>{setname(e.target.value)})} value={name} /> <br /> <br />
      <input type="text" onChange={((e)=>{setusername(e.target.value)})} value={username} /> <br /> <br />
      <input type="text" onChange={((e)=>{setemail(e.target.value)})} value={email} /> <br /> <br />
      <button onClick={(()=>{
      
       const item = {name, username, email, userid}
       console.log(item)
       fetch(`https://jsonplaceholder.typicode.com/users${userid}`,{
         method:'PUT',
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         },
         body: JSON.stringify(item)
       }).then((result)=>{
         result.json().then((resp)=>{
           console.log(resp)
         })
       })

      })}>updateuser</button>
     
     
     
   
      
   
    </div>
  )
}

export default ( User)
