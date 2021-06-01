import React from 'react';
import {Grommet} from 'grommet';

import ListItem from "./components/ListItem";
import './App.css';

function App() {
    return (
        <div className="App">
            <Grommet plain>
                <ListItem />
            </Grommet>

        </div>
    );
}

export default App;
