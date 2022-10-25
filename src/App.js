import { useState } from 'react';
import './App.css';
import AddInputs from './components/AddInputs';
import UserList from './components/UserList';
import styled from 'styled-components';



const Main = styled.body `
background:  purple;
width:100%;
height:600px;
`




function App() {
  const [userList, setUserList]=useState([]);

  function transfer(title,number,date){
  
       setUserList((prevlist)=> {
      return [
        ...prevlist,
        {
          title: title,
          number: number,
          date: date,
          id: Math.random()
        },
      ];
    })
  }

  function deleteUser(id){
    return () => {
      const del = userList.filter((item) => item.id !== id);
      setUserList(del);
    }
  }
  return (
    <Main>
    <div className="App">
      <AddInputs 
      onTransfer={transfer}
      />
     <UserList userList={userList} onDelete={ deleteUser}/>
    </div>
    </Main>
  );
}

export default App;
