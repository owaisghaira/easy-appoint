import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Login, Appointments, DoctorsList, Processing, Setting ,Verification} from '../screens';

const Navigation = () => {
    return (
        <Switch>
            <Route path="/verification">
                <Verification />
            </Route>
            <Route path="/appointments">
                <Appointments />
            </Route>
            <Route path="/doctors">
                <DoctorsList />
            </Route>
            <Route path="/processing">
                <Processing />
            </Route>
            <Route path="/setting">
                <Setting />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    );
}

export default Navigation