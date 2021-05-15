import './App.css';
import React from "react";
import Form from "./components/Form";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <header>Activity tracker</header>
            <Form/>
            <div>
                RecentActivities
            </div>
            <div >
                Achievements
            </div>
                Totals
            </div>
        );

    };
}

export default App;
