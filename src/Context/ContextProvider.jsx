import React from 'react'
import all_product from '../Assets/all_product'
import Context from './Context.jsx'

const ContextProvider = ({children})=> {

    let contextValue = {all_product}
  return (
    <Context.Provider value= {contextValue}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider