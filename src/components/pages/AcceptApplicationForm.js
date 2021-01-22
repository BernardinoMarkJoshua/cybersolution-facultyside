import React from 'react'
import IcsLogo from '../assets/ics.png'
import WmsuLogo from '../assets/wmsu.png'
import {Button} from '../Button'
import NavbarAdmin from '../NavbarAdmin'
import {Link} from 'react-router-dom'

function AcceptApplicationForm() {
    return (
        <div className='AcceptApplicationFomr'>
            <NavbarAdmin/>
        <div className="AdviserForm-container">

        <div className="AdviserForm-row-container">
            <div className="Appform-accept">

                <div className="Appform-topbar-row1">
                    <img className='ics-logo-appform' src={IcsLogo} alt="icslogo" width={60} height={60}/>
                    <div className="Appform-topbar-container">
                        <label>Republic of the Philipines</label>
                        <label>Western Mindanao State University</label>
                        <label className='bold1'>INSTITUTE OF COMPUTER STUDIES</label>
                        <label>Zamboanga City</label>
                    </div>
                    <img className='wmsu-logo-appform' src={WmsuLogo} alt="icslogo" width={60} height={60}/> 
                </div>

                <div className="Appform-topbar-row2">
                    <label>FOR: Roderick Go</label>
                    <label>Director, ICS</label>
                </div>

                <div className="Appform-topbar-row3">
                    <label>Sir: I, Jerico James Arevalo Ramos, have the honor for the inclusion in the Director's List for the 2nd sem, 2020-2021 based</label>
                    <label> on my academic ratings for the given period, to wit:</label>
                </div>

                <div className="Appform-topbar-row4">
                    <table className='table-content'>
                        <thead>
                            <th className='th-content'>Subject code</th>
                            <th className='th-content'>Subject name</th>
                            <th className='th-content'>Units</th>
                            <th className='th-content'>Grade</th>
                        </thead>
                            <tr>
                                <td className='td-content'>CC100</td>
                                <td className='td-content'>Introduction to Computing</td>
                                <td className='td-content'>3</td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>
                            </tr>
                            <tr>
                                <td className='td-content'>CC101</td>
                                <td className='td-content'>Computer programming</td>
                                <td className='td-content'>4</td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>
                            </tr>
                            <tr>
                                <td className='td-content'>CAS101</td>
                                <td className='td-content'>Purposive Communication</td>
                                <td className='td-content'>3</td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>
                            </tr>
                            <tr>
                                <td className='td-content'>MATH100</td>
                                <td className='td-content'>Mathematics in the Modern World</td>
                                <td className='td-content'>3</td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>
                            </tr>
                            <tr>
                                <td className='td-content'>US101</td>
                                <td className='td-content'>Understanding the Self</td>
                                <td className='td-content'>3</td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>
                            </tr>
                            <tr>
                                <td className='td-content'>FIL101</td>
                                <td className='td-content'>Komunikasyon sa Akademikong Filipino</td>
                                <td className='td-content'>3</td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>
                            </tr>
                            <tr>
                                <td className='td-content'>PE101</td>
                                <td className='td-content'>PE101</td>
                                <td className='td-content'>2</td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>
                            </tr>
                            <tr>
                                <td className='td-content'>NSTP1</td>
                                <td className='td-content'>National Service Training programming</td>
                                <td className='td-content'>3</td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>    
                            </tr>
                            <tr>
                                <td className='td-content'>EUTHA</td>
                                <td className='td-content'>Euthenics</td>
                                <td className='td-content'>2</td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>
                            </tr>

                            <tr>
                                <td className='td-content'></td>
                                <td className='td-content'></td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='26'/></td>
                                <td className='td-content'><input className='table-textfield' type="text" placeholder='1.0'/></td>
                
                            </tr>
                        <tbody>

                        </tbody>
                    </table>
                </div>

                <div className="Appform-topbar-row5">
                    <div className="Left-side">
                        <label>Verified by: </label>
                        <label>undefined</label>
                        <input type="text"/>
                    </div>

                    <div className="Right-side">
                        <label>Student ID: 2016-00406</label>
                        <label>Name: Jerico James Arevalo Ramos</label>
                        <label>Course: BSCS</label>
                        <label>Year Level: 1st</label>
                        <label>Section: A</label>
                    </div>
                </div>

            </div>

            <div className="AcceptContainer">
                <label>Please select action for this appform.</label>
                <div className="button-container-accept">
                    <Button>Accept</Button>
                    <Link to='/acceptadminappform'>
                        <Button buttonColor='red'>Back</Button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default AcceptApplicationForm
