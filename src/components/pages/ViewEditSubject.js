import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import {Button} from '../Button'
import {Link} from 'react-router-dom'

function ViewEditSubject() {

    return (
        <div className='ViewEditSubject'>
            <NavbarAdmin/>
            <div className="ViewEditSubject-container">
                <div className="Topbar-container-adviser">
                        <label>Admin</label>
                        <label>Baron Nashor</label>
                </div>

                <div className="Toplogo">
                    <h1>EDIT SUBJECTS</h1>
                    <Link to='/admin'>
                        <Button buttonSize='btn--superliit'>Back</Button>
                    </Link>
                </div>

            <table className='Adviser-table'>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Year</th>
                        <th>Semester</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>BSCS</td>
                        <td>1st</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>

                        </td>
                    </tr>
                   
                    <tr>
                        <td>BSCS</td>
                        <td>2nd</td>
                        <td>1st</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSCS</td>
                        <td>2nd</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSCS</td>
                        <td>3rd</td>
                        <td>1st</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSCS</td>
                        <td>3rd</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSCS</td>
                        <td>4th</td>
                        <td>1st</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSCS</td>
                        <td>4th</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSIT</td>
                        <td>1st</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSIT</td>
                        <td>2nd</td>
                        <td>1st</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSIT</td>
                        <td>2nd</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSIT</td>
                        <td>3rd</td>
                        <td>1st</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>BSIT</td>
                        <td>3rd</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/vieweditsubjectpanel'>
                                <Button buttonSize='btn--superliit'>View subjects</Button>
                            </Link>
                        </td>
                    </tr>

                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ViewEditSubject
