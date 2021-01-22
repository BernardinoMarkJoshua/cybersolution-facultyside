import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import IcsLogo from '../assets/ics.png'
import WmsuLogo from '../assets/wmsu.png'
import {Button} from '../Button'

function AdviserForm() {
    return (
        <div className='AdviserForm'>
            <NavbarAdmin/>
            <div className="AdviserForm-container">

                <div className="AdviserForm-row-container">
                    <div className="Appform">

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

                        <div className="Appform-bottombar-row1">
                            <label>Roderick Go</label>
                            <label className='director'>Director, ICS</label>
                            <label>Sir: upon verification by the committee Mr./Ms. Jerico James Arevalo Ramos has been found to process the qualifications,</label>
                            <label> and none of the disqualifications, for the inclusion in the Institute's Director's List for the period indicated.</label>

                        </div>

                        <div className="Appform-bottombar-row2">
                            <label>Therefore, we hereby recommend for approval his/her application as an achiever</label>
                        </div>

                        <div className="Appform-bottombar-row3">
                            <div className="Left-bottom">
                                <input type="text"/>
                                <label>Sample name1</label>
                                <label>IT Head</label>
                                <input type="text"/>
                                <label>Sample name2</label>
                                <label>Guidance & Counseling Coordinator</label>
                                <input type="text"/>
                                <label>Sample name3</label>
                                <label>College Secretary</label>
                            </div>

                            <div className="Right-bottom">
                            <input type="text"/>
                                <label>Sample name4</label>
                                <label>CS Head</label>
                                <input type="text"/>
                                <label>Sample name5</label>
                                <label>Student Affair Coordinator</label>
                                <input type="text"/>
                                <label>Sample name6</label>
                                <label>Chairperson</label>
                            </div>
                        </div>

                        <div className="Appform-bottombar-row4">
                            <label>Upon the recommendation of the Committee, Mr./Ms. Jerico James Arevalo for the inclusion</label>
                            <label>academic period herein stated.</label>
                        </div>

                        <div className="Appform-bottombar-row5">
                            <div className="Date1">
                                <label>Date: 1/17/2021</label>
                            </div>

                            <div className="admin-signiture-bottom">
                                <input type="text"/>
                                <label>Roderick Go</label>
                                <label>Director,ICS</label>
                            </div>
                        </div>

                    </div>
                
                    <div className="AcceptContainer">
                        <label>Please select action for this appform.</label>
                        <div className="button-container-accept">
                            <Button>Print</Button>
                            <Button buttonColor='red'>Decline</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdviserForm
