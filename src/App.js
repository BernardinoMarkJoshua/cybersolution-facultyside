import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/pages/Login'
import Adviser from './components/pages/Adviser';
import AdviserGate from './components/pages/AdviserGate';
import AdviserStudent from './components/pages/AdviserStudent';
import AdviserVerify from './components/pages/AdviserVerify';
import AdviserForm from './components/pages/AdviserForm';
import Admin from './components/pages/Admin';
import ViewAchievers from './components/pages/ViewAchievers';
import ViewArchive from './components/pages/ViewArchive';
import ArchiveList from './components/pages/ArchiveList';
import ViewEditUser from './components/pages/ViewEditUser';
import ViewEditSubject from './components/pages/ViewEditSubject';
import ViewEditSubjectPanel from './components/pages/ViewEditSubjectPanel';
import AdminAppForm from './components/pages/AdminAppForm';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/adviser' component={Adviser}/>
          <Route path='/advisergate' component={AdviserGate}/>
          <Route path='/adviserstudent' component={AdviserStudent}/>
          <Route path='/adviserverify' component={AdviserVerify}/>
          <Route path='/adviserverifyform' component={AdviserForm}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/viewachievers' component={ViewAchievers}/>
          <Route path='/viewarchive' component={ViewArchive}/>
          <Route path='/archivelist' component={ArchiveList}/>
          <Route path='/viewedituser' component={ViewEditUser}/>
          <Route path='/vieweditsubject' component={ViewEditSubject}/>
          <Route path='/vieweditsubjectpanel' component={ViewEditSubjectPanel}/>
          <Route path='/viewadminappform' component={AdminAppForm}/>
        </Switch>
    </Router>
  );
}

export default App;
