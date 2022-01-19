import React from 'react';
const UserContext =React.createContext({
    users: [],
    totalAmount: 0,
    addUser: (item)=>{},
    removeUser:(id)=>{}
});
export default UserContext;