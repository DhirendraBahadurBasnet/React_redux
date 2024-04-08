import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete} from 'react-icons/md'
import { removerUser } from '../store/slices/UserSlice'

function Displayusers() {

    const dispatch = useDispatch()
    const data = useSelector((state)=>state.users)

    const deleteUsers = (id)=>{
        dispatch(removerUser(id))
    }
  return (
   
      data.map((user, id)=> <li key={id}>
      {user}
      <button className='btn btn-delete' onClick={()=>deleteUsers(id)}>
        <MdDelete className="delete-icon"/>
      </button>
      </li>)

  )
}

export default Displayusers
