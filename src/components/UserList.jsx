import React from 'react'

const UserList = (props) => {
//    const { userlist } = props;

  return (
  <ul>
    {props.userList.map((item) => (
    <li>
        {item.title}
        {item.number}
        {item.date}
    </li>
))}
</ul>
  )
};

export default UserList