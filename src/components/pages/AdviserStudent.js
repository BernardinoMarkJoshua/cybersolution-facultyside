import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import StudentCard from '../assets/student.png'
import {Link} from 'react-router-dom'
import {Button} from '../Button'

function AdviserStudent() {
    return (
        <div className='AdviserStudent'>
            <NavbarAdmin/>
            <div className="AdviserStudent-container">
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

                <div className="AdviserStudent-row-container">
                    <img src={StudentCard} alt="gatecard" width={320} height={420}/>
                

                <table className='Adviser-table'>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Contact no</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>2016-00406</td>
                            <td>Mark Joshua Talasan Bernardino</td>
                            <td>BSCS</td>
                            <td>09455802513</td>
                            <td>markjoshuatbernardino@gmail.com</td>
                        </tr>

                        <tr>
                            <td>2016-11223</td>
                            <td>Jheo Nocum Jimenez</td>
                            <td>BSCS</td>
                            <td>09455802513</td>
                            <td>jhjmnz@gmail.com</td>
                        </tr>

                        
                        <tr>
                            <td>2016-11223</td>
                            <td>Joshua Formilleza Rellosa</td>
                            <td>BSCS</td>
                            <td>09455802513</td>
                            <td>w4rh4mm3r@pogiako.com</td>
                        </tr>

                        <tr>
                            <td>2016-11223</td>
                            <td>Jerico James Arevalo Ramos</td>
                            <td>BSCS</td>
                            <td>09455802513</td>
                            <td>silentbuttdeadlyyy@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            
            </div>
        </div>
    )
}

export default AdviserStudent
