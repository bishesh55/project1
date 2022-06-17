// import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from'./components/Hello'
import Message from './components/Message';
import Count from './components/Count';

import FnClick from './components/FnClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

 function App() {
   return (
     <div className="App"> 
     <NameList></NameList>
     <UserGreeting></UserGreeting>
     <ParentComponent/>
     <EventBind/>
      <Count/>
      <Message/> 
      <FnClick></FnClick>
      <ClassClick/>
    {/* <Greet name="ram" hero='spiderman'>
      <p>This is children props</p>
    </Greet>
    <Greet name="shyam">
      <button>Action</button>
      </Greet>
    <Greet name="hari"/>
    <Welcome name="ram" hero='spiderman'/>
    <Welcome name="shyam"/>
    // <Welcome name="hari"/>
    // <Hello/> */}
    
    </div>
  );
 }

export default App;
