import React,{useState} from 'react'

const LIst = () => {
  const [name, setname] = useState(' ')
  const [email, setemail] = useState(' ')
  const [mobile, setmobile] = useState(' ')


  const submitdata =()=>{
    console.log({name,email,mobile})
    const data = {name, email, mobile}
    fetch('',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type' : 'application/json'
        
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)

      })

    })

  }

  return (
    <div>

      <input type="text" value={name} name='name' onChange={((e)=>{setname(e.target.value)})}/> <br /> <br />
      <input type="email" value={email} name= 'email'  onChange={((e)=>{setemail(e.target.value)})}/> <br /> <br />
      <input type="number" value={mobile} name = 'number' onChange={((e)=>{setmobile(e.target.value)})} /> <br /> <br />
      <button onClick={submitdata}>save data</button>
       
      
    </div>
  )
}

export default LIst
