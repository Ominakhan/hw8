import React from 'react'
import styled from 'styled-components';


const Form = styled.li `
  list-style: none;
  margin: auto;
  display: flex;
  gap: 50px;
  font-size: 20px;
  width: 400px;
  margin-right: 430px;
  margin-top:10px;
  background-color: #534c4d;
  color: white;
  height: 30px;
`

const UserList = (props) => {
//    const { userlist } = props;

  return (
  <ul>
    {props.userList.map((item) => (
    <Form>
      <div>
        {item.title}
      </div>
      <div>
        {item.number}
      </div>
      <div>
        {item.date}
      </div>
      <div>
        <button onClick={props.onDelete(item.id)}>Delete</button>
      </div>
    </Form>
))}
</ul>
  )
};

export default UserList