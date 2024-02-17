import React from 'react'
import { createContext , useContext } from 'react'

export const CloakContext= createContext({
  userName:""
})

export const useCloak=()=>{
  return useContext(CloakContext)
}
export const CloakProvider = CloakContext.Provider