import React from 'react'

const Delete = ({userDelete , setDeleteUser}) => {

  return (
    <div className='delete-modal'>
        <div className="delete-modal-target">
            <h1>Eliminar usuario</h1>
            <p>El usuario <strong className='user-delete'>{`${userDelete?.first_name} ${userDelete.last_name}`} </strong> se ha eliminado</p>
            <button onClick={() => setDeleteUser(false)} className='btn-create form-btn'>Aceptar</button>
            <button onClick={() => setDeleteUser(false)} className='close-form'><i className='bx bxs-x-circle'></i></button>
        </div>
    </div>
  )
}

export default Delete