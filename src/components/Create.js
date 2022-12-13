import React from 'react';
import axios from 'axios';
import {useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



function Create(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();

    function postdetails(e){
        e.preventDefault();
        axios.post("https://6321d2e9fd698dfa29000d7d.mockapi.io/users",{name:name,Email:email}).then((res)=>console.log(res));
        navigate(-1);

    }
    return (
        <div className="Create" >
            <form style={{display:"flex",
                justifyContent:"center",
                alignItems:"center"}}>
                <Box
                
                sx={{
                width: 500,
                maxWidth: '100%',
                }}
                >
                    <TextField fullWidth label="Enter Name" id="fullWidth"  onChange={(eve)=> setName(eve.target.value)} placeholder="Please Enter Your Name" margin="normal"/>
                    <TextField fullWidth label="Enter Email" id="fullWidth" onChange={(eve)=> setEmail(eve.target.value)} placeholder="Please Enter Your Email" margin="dense"/>

                    <Button variant="contained" onClick={postdetails}>Submit Form</Button>
                </Box>

                {/* <input type="text" onChange={(eve)=> setName(eve.target.value)} placeholder="Please Enter Your Name"/><br />
                <input type="text" onChange={(eve)=> setEmail(eve.target.value)} placeholder="Please Enter Your Email"/><br /> */}
            
                {/* <button type="submit" onClick={postdetails}>Submit</button> */}
      
            </form>
        </div>
    )
}

export default Create
