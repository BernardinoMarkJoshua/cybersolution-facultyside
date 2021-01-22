import React, {useState} from 'react'
import '../pages/Pages.css'
import  {Button} from '../Button'
import {useHistory} from 'react-router-dom'

function Login() {
    const [user,setUser] = useState('')
    const history = useHistory();

    const onChange = e => {
        const {name} = e.target;

        if (name === 'id'){
           setUser(e.target.value)
        }
    }

    function redirect (e) {
        e.preventDefault();
        if (user>2) {
            console.log('login failed account may not be registered')
        }
        else if (user==='1') {
            history.push('/adviser');
        }
        else if (user==='2') {
            history.push('/admin');
        }
    }

    return (
        <div className='Login'>
            <div className="Login-container">
                <div className="topbar-login">
                    <h1>Login</h1>
                    <label className='bottom-text-login'>This website is solely for the faculty of ICS-WMSU</label>
                </div>

                <form className='form-container' onSubmit={redirect}>
                    <label>FacultyID</label>
                    <input type="text" name='id' onChange={onChange} required/>
                    <label>Password</label>
                    <input type="password" required/>
                        <Button type='submit' >Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login
