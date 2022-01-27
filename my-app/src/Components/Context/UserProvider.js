import { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = (props) => {
  const[userInfo, setUserInfo]=useState({});
  const handleAddUser = (user) => {  
    setUserInfo(user)
  };
    
  // const handlePinUser = (item) => {
  //   let cloneItem=item;
  //   const repeatedIndex=basketItems.findIndex(prod=>prod.id===item.id);
  //   if(repeatedIndex>=0){
  //     const repeated=basketItems.splice(repeatedIndex,1);
  //     repeated[0].amount+=item.amount;
  //     cloneItem=repeated[0]        
  //   }
  //   setBasketItems(basketItems.concat(cloneItem));
  //   setTotal(total+ item.price*item.amount);

  // };

  // const handleRemoveUser = (id) => {
  //   setBasketItems(basketItems.filter(basketItem=>basketItem.id!==id));
  // };
    
  const userContext = {
    user: userInfo, 
    addUser: handleAddUser, 
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;