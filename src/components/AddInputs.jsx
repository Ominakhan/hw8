import React, { useState } from 'react'

//1-metod polucheniya znacheniy ot inputa

// const AddInputs = (props) => {
// const [title, setTitle] = useState('')
// const [number, setNumber] = useState('')
// const [date, setDate] = useState('')

// const titleChange = (event) => {
//     setTitle(event.target.value)
// }
// const numberChange = (event) => {
//     setNumber(event.target.value)
// }

// const dateChange = (event) => {
//     setDate(event.target.value)
// }

// const buttonUser = (event) => {
// event.preventDefault()
// props.onTransfer(title, number, date);
// };

// return (
//     <div>
//         <form  onSubmit={buttonUser}>
//             <label>Title</label>
//             <br/>
//             <input type="text" value={title}  onChange={titleChange} />
//             <br/>
//             <label>Amount</label>
//             <br/>
//             <input type="number" value={number} onChange={numberChange} />
//             <br/>
//             <label>Date</label>
//             <br/>
//             <input type="date" value={date} onChange={dateChange} />
//              <br/>
//              <br/>
             
//             <button type="submit">Add</button>
//         </form>
//     </div>
//   )
// }



//2-metod

// const AddInputs = (props) => {

//     const [userInput ,  setUserInput] = useState({
//         title: "",
//         number: "",
//         date: "",
//     })

//     const titleChange = (event) => {
//         setUserInput({
//             ...userInput,
//             title: event.target.value,
//         });
// }
// const numberChange = (event) => {
//     setUserInput({
//         ...userInput,
//         number: event.target.value,
//     });
// }


// const dateChange = (event) => {
//     setUserInput({
//         ...userInput,
//         date: event.target.value,
//     });
// };


// const buttonUser = (event) => {
// event.preventDefault()
// props.onTransfer(userInput.title, userInput.number, userInput.date);
// };

// return (
//     <div>
//         <form  onSubmit={buttonUser}>
//             <label>Title</label>
//             <br/>
//             <input type="text" value={userInput.title}  onChange={titleChange} />
//             <br/>
//             <label>Amount</label>
//             <br/>
//             <input type="number" value={userInput.number} onChange={numberChange} />
//             <br/>
//             <label>Date</label>
//             <br/>
//             <input type="date" value={userInput.date} onChange={dateChange} />
//              <br/>
//              <br/>
             
//             <button type="submit">Add</button>
//         </form>
//     </div>
//   )
// }



//3-metod
const AddInputs = (props) => {
const [title, setTitle] = useState('') 
const [number, setNumber] = useState('') 
const [date, setDate] = useState('') 

const buttonUser = (e) => {
    e.preventDefault()
    props.onTransfer(title,number,date);
}

// setState((prevState) => ({...prevState, title: event.target.value}))

return (
    <div>
        <form  onSubmit={buttonUser}>
            <label>Title</label>
            <br/>
            <input 
                 type="text" 
                 value={title} 
                 onChange={({target: {value}}) => setTitle(value)}/>
            <br/>
            <label>Amount</label>
            <br/>
            <input 
                 type="number" 
                 value={number} 
                 onChange={({target: {value}}) => setNumber(value)} />
            <br/>
            <label>Date</label>
            <br/>
            <input 
                 type="date"
                 value={date} 
                 onChange={({target: {value}}) => setDate(value)} />
             <br/>
             <br/>
             
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddInputs