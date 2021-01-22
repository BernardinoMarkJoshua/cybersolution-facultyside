import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import {Button} from '../Button'
import {Link} from 'react-router-dom'


function ArchiveList() {
    return (
        <div className='ArchiveList'>
            <NavbarAdmin/>
            <div className="ArchiveList-container">
                <div className="Topbar-container-adviser">
                    <label>Adviser</label>
                    <label>Ronald Abdul</label>
                </div>

                <div className="Toplogo">
                    <h1>ARCHIVE</h1>
                    <label>for 2020-2021 1st semester</label>
                    <Link to='/viewarchive'>
                        <Button buttonSize='btn--superliit'>Back</Button>
                    </Link>
                </div>
            <table className='Adviser-table'>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>GPA</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>2016-00406</td>
                        <td>Mark Joshua Talasan Bernardino</td>
                        <td>BSCS</td>
                        <td>1.5234</td>
                        <td>
                            <Link to='/viewadminappform'>
                                <Button buttonSize='btn--superliit'>View</Button>                            
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>2016-11223</td>
                        <td>Jheo Nocum Jimenez</td>
                        <td>BSCS</td>
                        <td>1.5234</td>
                        <td>
                            <Link to='/viewadminappform'>
                                <Button buttonSize='btn--superliit'>View</Button>                            
                            </Link>
                        </td>
                    </tr>

                        
                    <tr>
                        <td>2016-11223</td>
                        <td>Joshua Formilleza Rellosa</td>
                        <td>BSCS</td>
                        <td>1.5234</td>
                        <td>
                            <Link to='/viewadminappform'>
                                <Button buttonSize='btn--superliit'>View</Button>                            
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>2016-11223</td>
                        <td>Jerico James Arevalo Ramos</td>
                        <td>BSCS</td>
                        <td>1.5234</td>
                        <td>
                            <Link to='/viewadminappform'>
                                <Button buttonSize='btn--superliit'>View</Button>                            
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ArchiveList
