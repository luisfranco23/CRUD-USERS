import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import Users from './components/Users'
import useGetApi from './hooks/useGetApi'
import { useForm} from 'react-hook-form'
import axios from 'axios'

function App() {
  const {users,getAllUsers} = useGetApi()
  const [isBoolean, setIsBoolean] = useState(false)
  const {handleSubmit,register,reset} = useForm()
  const [updateUser, setUpdateUser] = useState()
  const [updateNameBoolean, setUpdateNameBoolean] = useState()

  const defauldata = {
    birthday: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "" 
  }

  const updatePatch = (id, newData) => {
    axios.patch(`https://users-crud1.herokuapp.com/users/${id}/`, newData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(() => {
      getAllUsers()
      setUpdateUser()
    })
  }

  const createNewUser = newUser => {
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        .finally(() => {
          getAllUsers()
          reset(defauldata)
        })
        
      }

  const closeAndOpen = () =>{
    setIsBoolean(!isBoolean)
    reset(defauldata)
    setUpdateNameBoolean(false)
  }
  return (
    <div className="App">
      <header className='header'>
        <h1>Usuarios</h1>
        <button onClick={closeAndOpen} className='btn-create'>+ Crear nuevo usuario</button>
      </header>
      <section className='users'>
        {
          users?.map(user => 
            <Users 
              key={user.id} 
              user={user} 
              getAllUsers={getAllUsers} 
              setUpdateUser={setUpdateUser}
              reset={reset}
              setIsBoolean={setIsBoolean}
              setUpdateNameBoolean={setUpdateNameBoolean}
            />)
        }
      </section>
      <section>
        {
          isBoolean &&
          <Form 
            closeAndOpen={closeAndOpen}
            handleSubmit={handleSubmit}
            register={register}
            reset={reset} 
            createNewUser={createNewUser}
            setIsBoolean={setIsBoolean}
            updateUser={updateUser}
            updatePatch={updatePatch}
            defauldata={defauldata}
            updateNameBoolean={updateNameBoolean}
          /> 
        }
      </section>
    </div>
  )
}

export default App
