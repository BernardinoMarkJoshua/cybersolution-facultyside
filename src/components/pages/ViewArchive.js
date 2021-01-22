import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import {Button} from '../Button'
import {Link} from 'react-router-dom'

function ViewArchive() {
    return (
        <div className='ViewArchive'>
            <NavbarAdmin />
            <div className="ViewArchive-container">
                <div className="Topbar-container-adviser">
                        <label>Admin</label>
                        <label>Baron Nashor</label>
                </div>


                <div className="Toplogo">
                    <h1>ARCHIVE</h1>
                    <Link to='/admin'>
                        <Button buttonSize='btn--superliit'>Back</Button>
                    </Link>
                </div>

            <table className='Adviser-table'>
                <thead>
                    <tr>
                        <th>School Year</th>
                        <th>Semester</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>2020-2021</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/archivelist'>
                                <Button buttonSize='btn--superliit'>View</Button>                          
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>2020-2021</td>
                        <td>1st</td>
                        <td>
                            <Link to='/archivelist'>
                                <Button buttonSize='btn--superliit'>View</Button>                          
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>2019-2020</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/archivelist'>
                                <Button buttonSize='btn--superliit'>View</Button>                          
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>2019-2020</td>
                        <td>1st</td>
                        <td>
                            <Link to='/archivelist'>
                                <Button buttonSize='btn--superliit'>View</Button>                          
                            </Link>
                        </td>
                    </tr>

                        
                    <tr>
                        <td>2018-2019</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/archivelist'>
                                <Button buttonSize='btn--superliit'>View</Button>                          
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>2018-2019</td>
                        <td>1st</td>
                        <td>
                            <Link to='/archivelist'>
                                <Button buttonSize='btn--superliit'>View</Button>                          
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>2017-2018</td>
                        <td>2nd</td>
                        <td>
                            <Link to='/archivelist'>
                                <Button buttonSize='btn--superliit'>View</Button>                          
                            </Link>
                        </td>
                    </tr>

                    
                    <tr>
                        <td>2017-2018</td>
                        <td>1st</td>
                        <td>
                            <Link to='/archivelist'>
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

export default ViewArchive
