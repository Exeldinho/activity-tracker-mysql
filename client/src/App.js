import './App.css';
import React from "react";
import Form from "./components/Form";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <header className="align-middle" >Activity tracker</header>
            <Form/>
            </div>
        );

    };
}


export default App;
