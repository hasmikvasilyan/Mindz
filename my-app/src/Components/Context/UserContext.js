import React from 'react';
const UserContext =React.createContext({
    user: {},    
    addUser: (item)=>{},
    removeUser:(id)=>{}
});
export default UserContext;