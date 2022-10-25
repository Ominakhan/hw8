import React, { useState } from 'react'
import styled from 'styled-components'


const Container = styled.div`
background: #221b1b;
width: 350px;
margin:auto;
padding-left: 5%;
border-radius: 6px;
direction:flex;
`
const Input = styled.input`
background: #658765;
border-radius: 5px;
text-align: center;
width: 300px;
height: 25px;
font-size: 20px;
`
const Button = styled.button`
background: #22820d;
color: white;
width:80px;
height: 30px;
font-size:20px;
`

const Text = styled.label`
    color: white;
    font-size:20px;
`


const AddInputs = (props) => {
const [title, setTitle] = useState('')
const [number, setNumber] = useState('')
const [date, setDate] = useState('')
const [isValid, setIsValid] = useState(true);

const titleChange = (event) => {
    setTitle(event.target.value)
    if (event.target.value.trim().length > 0) {
        setIsValid(true);
    }

    }
const numberChange = (event) => {
    if (event.target.value.trim().length > 0) {
        setIsValid(true);
    }
    setNumber(event.target.value)
}


const dateChange = (event) => {
    if (event.target.value.trim().length > 0) {
        setIsValid(true);
    }
    setDate(event.target.value)
}


const buttonUser = (event) => {
    if(title.trim().length===0){
        setTitle (alert("Fill in the form"));
        return;
    }
    if(number.trim().length===0){
        setNumber (alert("Fill in the form"));
        return;
    }
    if(date.trim().length===0){
        setDate (alert("Fill in the form"));
        return;
    }


event.preventDefault()
props.onTransfer(title, number, date);
setTitle('')
setNumber('')
setDate('')
};

return (
    <Container>
 
   
        <form  onSubmit={buttonUser}>
        
            <Text className='input'>Title</Text>
            <br/>
         
            <Input type="text" value={title}  onChange={titleChange} />
       
            <br/>

            <Text>Amount</Text>
            <br/>
            <Input type="number" value={number} onChange={numberChange} />
            <br/>
            <Text>Date</Text>
            <br/>
            <Input type="date" value={date} onChange={dateChange} />
             <br/>
             <br/>
           
             <Button type="submit">Add</Button>
        </form>
      
      
    </Container>
  )
}




export default AddInputs;