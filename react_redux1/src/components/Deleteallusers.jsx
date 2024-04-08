import React from 'react'
import { clearallUser } from '../store/slices/UserSlice'
import {  useDispatch } from 'react-redux'


function Deleteallusers() {
    const dispatch = useDispatch()
    const deleteUsers = ()=>{
        dispatch(clearallUser())
    }
  return (
    <wrapper >
        <button onClick={()=>deleteUsers()}>Clear Users</button>
    </wrapper>
  )
}

export default Deleteallusers
