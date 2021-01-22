import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import {Button} from '../Button'
import {Link} from 'react-router-dom'

function AcceptApplication() {
    const shoot = () =>{
        alert('Removed');
    }

    return (
        <div className='AcceptApplication'>
            <NavbarAdmin />
            <div className="ViewAchievers-container">
                <div className="Topbar-container-adviser">
                        <label>Admin</label>
                        <label>Baron Nashor</label>
                </div>

                <div className="Toplogo">
                    <h1>ACCEPT APPLICATION FORM</h1>
                    <Link to='/admin'>
                        <Button buttonSize='btn--superliit'>Back</Button>
                    </Link>
                </div>
            <table className='Adviser-table'>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>GPA</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2016-00406</td>
                        <td>Mark Joshua Talasan Bernardino</td>
                        <td>BSCS</td>
                        <td>1.5234</td>
                        <td>
                            <Link to='/acceptadminappformpane'>
                                <Button buttonSize='btn--superliit'>View</Button>                            
                            </Link>
                            <Button buttonColor='red' buttonSize='btn--superliit' onClick={shoot}>Decline</Button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>2016-11223</td>
                        <td>Jheo Nocum Jimenez</td>
                        <td>BSCS</td>
                        <td>1.5234</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={shoot}>View</Button>
                            <Button buttonColor='red' buttonSize='btn--superliit' onClick={shoot}>Decline</Button>
                        </td>
                    </tr>

                        
                    <tr>
                        <td>3</td>
                        <td>2016-11223</td>
                        <td>Joshua Formilleza Rellosa</td>
                        <td>BSCS</td>
                        <td>1.5234</td>
                        <td>                           
                            <Button buttonSize='btn--superliit' onClick={shoot}>View</Button>
                            <Button buttonColor='red' buttonSize='btn--superliit' onClick={shoot}>Decline</Button>
                        </td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>2016-11223</td>
                        <td>Jerico James Arevalo Ramos</td>
                        <td>BSCS</td>
                        <td>1.5234</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={shoot}>View</Button>
                            <Button buttonColor='red' buttonSize='btn--superliit' onClick={shoot}>Decline</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        
        </div>
        </div>
    )
}

export default AcceptApplication
