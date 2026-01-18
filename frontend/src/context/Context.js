import React, { createContext, useState } from 'react'

const Context = createContext();

const Provider = ({children}) => {

  const [menu, setMenu] = useState(false);

  return (
    <Context.Provider value={{
      menu,
      setMenu
    }} >
      {children}
    </Context.Provider>
  )
}

export { Context, Provider };