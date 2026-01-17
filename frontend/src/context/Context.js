import React, { createContext, useState } from 'react'

const Context = createContext();

const Provider = ({children}) => {

  const [menu, setmenu] = useState();

  return (
    <Context.Provider value={{
      menu,
      setmenu
    }} >
      {children}
    </Context.Provider>
  )
}

export { Context, Provider };