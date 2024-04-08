import React from 'react'
import Deleteallusers from './Deleteallusers'
import { fakeUserData } from '../api'
import {  useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice'
import Displayusers from './Displayusers'

function Userdetails() {
    const dispatch = useDispatch()

    const addNewUser = (payload)=>{
        dispatch(addUser(payload))

    }
  return (
    <>
      <div className='content'>
        <div className='admin-table'>
            <div className='admin-subtitle'> List of User Details</div>
            <button onClick={()=> addNewUser(fakeUserData())}>Add New Users</button>
        </div>
        <ul>
           <Displayusers/>
        </ul>
        <hr />
        <Deleteallusers/>
      </div>

    </>
  )
}

export default Userdetails
