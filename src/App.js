import React from 'react';
import { Route } from 'react-router-dom';
import Start from './views/start/Start';
import Calendar from './views/calendar/Calendar';  
import Toggle from './components/Toggle';      
import './App.css';


const App = () => {
    // const [dark, toggleDark] = useState(true);
    return (
        <div className="site-wrapper">
            <div className="site-mode--toggle">
                <Toggle />
            </div>  
            <Route strict exact path="/">
                <Start />
            </Route>
            <Route path="/room">
                <Calendar />
            </Route>
        </div>
    );
}

export default App;
