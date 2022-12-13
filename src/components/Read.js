import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Read = ({ data }) => {
    const [newid, setNewid] = useState(null);
    const [icon, setIcon] = useState(true);
    const [data1,setData1]=useState([]);
    const [del,setDel]=useState(null);

    async function getdata(){
        let newdata=await axios.get("https://6321d2e9fd698dfa29000d7d.mockapi.io/users");
        console.log(newdata.data);
        setData1(newdata.data);
    };

    

    useEffect(()=>{
        // axios.get("https://6321d2e9fd698dfa29000d7d.mockapi.io/users").then((res)=> setData1(res.data)).catch((err)=> console.log(err))
        getdata();
        console.log("Hi")
    },[]);


    async function deletepost(){
        console.log(newid)
        let deldata1=await axios.delete(`https://6321d2e9fd698dfa29000d7d.mockapi.io/users/${newid}`);
        console.log(deldata1)
        getdata();  
        setIcon(true);
        
    }

    const navigate1 = useNavigate();
    return (
        // <div className="Table">
        //     <button onClick={() => navigate1("Create")}>ADD Data</button>
        //     <button disabled={icon} onClick={() => navigate1(`update/${newid}`)}>Edit Data</button>
        //     <button disabled={icon} onClick={deletepost}>Delete Data</button>
        //     <br />
        //     <br/>

        //     <table>
        //         <thead>
        //             <tr>
        //                 <td><h3>ID</h3></td>
        //                 <td><h3>Name</h3></td>
        //                 <td><h3>Email</h3></td>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {data1.map((a, i) => {
        //                 return (
        //                     <tr key={a.id}>
        //                         <td><input type="checkbox" onChange={() => { setNewid(a.id); setIcon(!icon);setDel(i) }} />{a.id}</td>
        //                         <td>{a.name}</td>
        //                         <td>{a.Email}</td>
        //                     </tr>
        //                 );
        //             })}
        //         </tbody>
        //     </table>


        // </div>
        <div>
            <br />
            <Stack direction="row" className="Buttons" spacing={2}>
                <Button variant="contained" onClick={() => navigate1("Create")}><AddIcon /></Button>
                <Button variant="contained" disabled={icon} onClick={() => navigate1(`update/${newid}`)}><EditIcon /></Button>
                <Button variant="contained" disabled={icon} onClick={deletepost}><DeleteIcon /></Button>
            </Stack>
            <br/>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Id</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Email Id</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data1.map((a, i) => {
                        return (
                            <StyledTableRow key={a.id}>
                                <StyledTableCell align="center"><Checkbox {...label}  size="small" onChange={() => { setNewid(a.id); setIcon(!icon);setDel(i) }}/>{a.id}</StyledTableCell>
                                <StyledTableCell align="center">{a.name}</StyledTableCell>
                                <StyledTableCell align="center">{a.Email}</StyledTableCell>
                            </StyledTableRow>
                            // <tr key={a.id}>
                            //     <td><input type="checkbox" onChange={() => { setNewid(a.id); setIcon(!icon);setDel(i) }} />{a.id}</td>
                            //     <td>{a.name}</td>
                            //     <td>{a.Email}</td>
                            // </tr>
                            
                        );
                    })}
                </TableBody>
            </Table>

            </TableContainer>
        </div>




    )
}

export default Read;
