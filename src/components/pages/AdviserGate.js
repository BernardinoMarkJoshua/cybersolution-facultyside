import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import GateCard from '../assets/gate.png'
import {Button} from '../Button'
import {Link} from 'react-router-dom'

function AdviserGate() {
    return (
        <div className='AdviserGate'> 
            <NavbarAdmin/>
            <div className="AdviserGate-container">
                <div className="Topbar-container-adviser">
                    <label>Adviser</label>
                    <label>Ronald Abdul</label>
                </div>

                <div className="Button-container-redirect">
                    <div className="button-div">
                        <Link to='/adviserverify'>
                            <Button>Verify</Button>
                        </Link>
                    </div>
                    <div className="button-div">
                        <Link to='/adviserstudent'>
                            <Button>Student</Button>
                        </Link>
                    </div>
                    <div className="button-div">
                        <Link to='/adviser'>
                            <Button>Back</Button>
                        </Link>
                    </div>

                </div>

            <div className="AdviserGate-row-container">
                <img src={GateCard} alt="gatecard" width={320} height={420}/>

                <table className='Adviser-table'>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Contact no</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>2016-00406</td>
                            <td>Mark Joshua Talasan Bernardino</td>
                            <td>BSCS</td>
                            <td>09455802513</td>
                            <td>markjoshuatbernardino@gmail.com</td>
                            <td>
                                <Button buttonSize='btn--superliit'>Accept</Button>
                                <Button buttonSize='btn--superliit' buttonColor='red'>Delete</Button>
                            </td>
                        </tr>

                        <tr>
                            <td>2016-11223</td>
                            <td>Jheo Nocum Jimenez</td>
                            <td>BSCS</td>
                            <td>09455802513</td>
                            <td>jhjmnz@gmail.com</td>
                            <td>
                                <Button buttonSize='btn--superliit'>Accept</Button>
                                <Button buttonSize='btn--superliit' buttonColor='red'>Delete</Button>
                            </td>
                        </tr>

                        
                        <tr>
                            <td>2016-11223</td>
                            <td>Joshua Formilleza Rellosa</td>
                            <td>BSCS</td>
                            <td>09455802513</td>
                            <td>w4rh4mm3r@pogiako.com</td>
                            <td>
                                <Button buttonSize='btn--superliit'>Accept</Button>
                                <Button buttonSize='btn--superliit' buttonColor='red'>Delete</Button>
                            </td>
                        </tr>

                        <tr>
                            <td>2016-11223</td>
                            <td>Jerico James Arevalo Ramos</td>
                            <td>BSCS</td>
                            <td>09455802513</td>
                            <td>silentbuttdeadlyyy@gmail.com</td>
                            <td>
                                <Button buttonSize='btn--superliit'>Accept</Button>
                                <Button buttonSize='btn--superliit' buttonColor='red'>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
               
            </div>
        </div>
    )
}

export default AdviserGate
