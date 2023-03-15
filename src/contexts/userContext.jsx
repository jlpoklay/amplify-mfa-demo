import React, { createContext, useState } from "react";
const UserContext = createContext({});

const UserProvider = (props) => {
  
  return (
    <UserContext.Provider value={props.value}>
      {props.children}
    </UserContext.Provider>
  );
};

const withUser = (Child) => (props) => (
  <UserContext.Consumer>
    {/* {(context) => <Child {...props} {...context} />} */}
    {context => <Child {...props} context={context}/>}
  </UserContext.Consumer>
);

export { UserProvider, withUser, UserContext };