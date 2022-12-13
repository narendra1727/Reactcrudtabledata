import axios from 'axios';
import {useState,useEffect,React} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Update() {
    const [update1,setUpdate1]=useState([]);
    
    
    useEffect(()=>{
      axios.get("https://6321d2e9fd698dfa29000d7d.mockapi.io/users").then((res)=> setUpdate1(res.data)).catch((err)=> console.log(err.message))
    },[]);   
    
    const { newid12 }=useParams();
    return (
      <div>
        {update1.length > 0 ? <Newdata  update1={update1} newid12={newid12}/> : ""}
      </div>
      )
}

function Newdata({update1,newid12}){
  // console.log(newid12)
  let represent=update1.filter((a)=> {
    if(a.id === newid12){
      return a;
    }
  })

  let [text1,setText1]=useState(represent[0].name);
  let [email1,setEmail1]=useState(represent[0].Email);
 let navigate4=useNavigate();
 
  function putdetails(event){
    event.preventDefault();
    axios.put(`https://6321d2e9fd698dfa29000d7d.mockapi.io/users/${newid12}`,{
      name:text1,
      Email:email1

    });

    navigate4(-1);
  }
  // console.log(represent,update1)
  return(
    <div>
     <form style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Box
      sx={{
      width: 500,
      maxWidth: '100%',
      }}>

        <TextField fullWidth label="Enter Name" id="fullWidth"  value={text1} onChange={(eve)=> setText1(eve.target.value)} margin="normal" />
        <TextField fullWidth label="Enter Email" id="fullWidth" value={email1}  onChange={(eve)=> setEmail1(eve.target.value)} margin="dense"/>
        <Button variant="contained" onClick={putdetails}>Save Details</Button>
      </Box>

      {/* <input type="text" value={text1} onChange={(eve)=> setText1(eve.target.value)}/><br />
      <input type="text" value={email1}  onChange={(eve)=> setEmail1(eve.target.value)} /><br/> */}
      {/* <button type="submit" onClick={postdetails}>Update Values</button> */}
     </form>
    </div>
  );

}


export default Update;
