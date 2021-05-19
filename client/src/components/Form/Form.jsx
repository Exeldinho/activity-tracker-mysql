import React, {Component} from "react";
import "./Form.module.css";
import DateField from "./DateField/DateField";
import DistanceField from "./DistanceField/DistanceField";
import SelectType from "./SelectType/SelectType";
import SubmitBtn from "./SubmitBtn/SubmitBtn";

export default class Form extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Add new activity:</label>

                        <DateField/>
                        <DateField/>
                        <DistanceField/>
                        <SelectType/>
                        <SubmitBtn/>
                    </div>
                </form>
            </div>
        )
    }


}