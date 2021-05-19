import React from "react";
import './App.module.css';
import Header from "../Header/Header";
import Form from "../Form/Form";
import Recent from "../Recent/Recent";
import Record from "../Record/Record";
import Total from "../Total/Total";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Form/>
                <Recent/>
                <Record/>
                <Total/>
            </div>
        );
    };
}

export default App;
