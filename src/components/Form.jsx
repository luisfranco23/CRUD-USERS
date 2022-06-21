import React from 'react'

export const Form = ({closeAndOpen,handleSubmit,register,reset,createNewUser,
    setIsBoolean,updateUser,updatePatch,defauldata,
    updateNameBoolean}) => {

    console.log(updateUser)

    const submit = data => {
        if(updateUser !== undefined){
            
            updatePatch(updateUser.id , data)
        }else{
            createNewUser(data)
        }
        reset(defauldata)
        setIsBoolean(false)
    }

  return (
    <div className='Form-modal'>
        <div className='content-modal'>
            <h1>{updateNameBoolean ? 'Actualizar ' : 'Nuevo'} Usuario</h1>
            <form onSubmit={handleSubmit(submit)}>
                <div className='form-date'>
                    <label htmlFor="first_name">Nombre</label>
                    <input type="text" id='first_name' placeholder='First name' {...register('first_name')} />
                </div>
                <div className='form-date'>
                    <label htmlFor="last_name">Apellidos</label>
                    <input type="text" id='last_name' placeholder='Last Name' {...register('last_name')} />
                </div>
                <div className='form-date'>
                    <label htmlFor="email">Correo</label>
                    <input type="email" id='email' placeholder='Email' {...register('email')} />
                </div>
                <div className='form-date'>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id='password' placeholder='Password' {...register('password')} />
                </div>
                <div className='form-date'>
                    <label htmlFor="birthday">Cumpleaños</label>
                    <input type="date" id='birthday' placeholder='Birthday' {...register('birthday')} />
                </div>
                <button className='btn-create form-btn'>{updateNameBoolean ? 'Actualizar' : 'Agregar nuevo'} usuario</button>
            </form>
            <button onClick={closeAndOpen} className='close-form'><i className='bx bxs-x-circle'></i></button>
        </div>
    </div>
  )
}
