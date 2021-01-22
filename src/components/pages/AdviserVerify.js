import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import VerifyCard from '../assets/verify.png'
import {Button} from '../Button'
import {Link} from 'react-router-dom'

function AdviserVerify() {
    return (
        <div className='AdviserVerify'>
            <NavbarAdmin/>
            <div className="AdviserVerify-container">
                <div className="Topbar-container-adviser">
                    <label>Adviser</label>
                    <label>Ronald Abdul</label>
                </div>

                <div className="Button-container-redirect">
                    <div className="button-div">
                        <Link to='/adviserstudent'>
                            <Button>Student</Button>
                        </Link>
                    </div>
                    <div className="button-div">
                        <Link to='/advisergate'>
                            <Button>Gate</Button>
                        </Link>
                    </div>
                    <div className="button-div">
                        <Link to='/adviser'>
                            <Button>Back</Button>
                        </Link>
                    </div>
                </div>

                <div className="AdviserVerify-row-container">
                    <img className='gatecardverif' src={VerifyCard} alt="gatecard" width={320} height={420}/>

                    <table className='Adviser-table'>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>2016-00406</td>
                            <td>Mark Joshua Talasan Bernardino</td>
                            <td>BSCS</td>
                            <td>
                                <Link to='/adviserverifyform'>
                                    <Button buttonSize='btn--superliit'>Verify</Button>
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td>2016-11223</td>
                            <td>Jheo Nocum Jimenez</td>
                            <td>BSCS</td>
                            <td>
                                <Link to='/adviserverifyform'>
                                    <Button buttonSize='btn--superliit'>Verify</Button>
                                </Link>
                            </td>
                        </tr>

                        
                        <tr>
                            <td>2016-11223</td>
                            <td>Joshua Formilleza Rellosa</td>
                            <td>BSCS</td>
                            <td>
                                <Link to='/adviserverifyform'>
                                    <Button buttonSize='btn--superliit'>Verify</Button>
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td>2016-11223</td>
                            <td>Jerico James Arevalo Ramos</td>
                            <td>BSCS</td>
                            <td>
                                <Link to='/adviserverifyform'>
                                    <Button buttonSize='btn--superliit'>Verify</Button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default AdviserVerify
