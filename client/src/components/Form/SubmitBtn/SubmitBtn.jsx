import React, {Component} from "react";
import "./SubmitBtn.module.css";

export default class SubmitBtn extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <input
                type="submit"
                value="Save"
            />
        )
    }
}
