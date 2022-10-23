import { useState } from 'react';
import './App.css';
import AddInputs from './components/AddInputs';
import UserList from './components/UserList';


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
        },
      ];
    })
  }
  return (
    <div className="App">
      <AddInputs 
      onTransfer={transfer}
      />
     <UserList userList={userList}/>
    </div>
  );
}

export default App;
