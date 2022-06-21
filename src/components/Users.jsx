import React from 'react'
import axios from 'axios'

const Users = ({user,getAllUsers,setUpdateUser,reset,setIsBoolean,setUpdateNameBoolean}) => {

    const deletUser = () => {
        let id = user.id
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            .finally(() => getAllUsers())
    }
    
    const userUpdate = {
        birthday: user.birthday,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password
    }
    const updateUser = () => {
        setIsBoolean(true)
        setUpdateUser(user)
        reset(userUpdate)
        setUpdateNameBoolean(true)
    }
  return (
    <article className='user'>
        <h2 className='user-header'>
            {`${user.first_name} ${user.last_name}`}
        </h2>
        <div className="info">
            <p><span>CORREO</span></p>
            <p>{user.email}</p>
            <p><span>CUMPLEAÑOS</span></p>
            <p><i className='bx bx-gift'></i> {user.birthday}</p>
        </div>
        <div className='btns'>
            <button onClick={deletUser} className='user-btn btn-delete'><i className='bx bx-trash'></i></button>
            <button onClick={updateUser}  className='user-btn'><i className='bx bx-edit-alt' ></i></button>
        </div>
    </article>
  )
}

export default Users