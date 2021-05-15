import React, {Component} from "react";
import axios from "axios";

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.onChangeActivityStart = this.onChangeActivityStart.bind(this)
        this.onChangeActivityFinish = this.onChangeActivityFinish.bind(this)
        this.onChangeDistance = this.onChangeDistance.bind(this)
        this.onChangeActivityType = this.onChangeActivityType.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            activityStart: '',
            activityFinish: '',
            distance: '',
            activityType: ''
        }
    }

    onChangeActivityStart(e) {
        this.setState ({
            activityStart: e.target.value
            })
     }

    onChangeActivityFinish (e) {
        this.setState ({
            activityFinish: e.target.value
        })
    }

    onChangeDistance (e) {
        this.setState ({
            distance: e.target.value
        })
    }

    onChangeActivityType (e) {
        this.setState ({
            activityType: e.target.value
        })
    }

    onSubmit (e) {
        e.preventDefault()

        const activity = {
             act_start: this.state.activityStart,
             act_finish: this.state.activityFinish,
             distance: this.state.distance,
             act_type: this.state.activityType
        }


            axios.post('http://localhost:5000/', activity)
            .then (res => {
                this.setState({
                    activityStart: '',
                    activityFinish: '',
                    distance: '',
                    activityType: ''
                })
            })

        window.location.reload(true)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Add new activity:</label>

                        <div>
                            <input
                                        type=""
                                        onChange={this.onChangeActivityStart}
                                        value={this.state.activityStart}
                            />
                        </div>

                        <div >
                            <input
                                        type=""
                                        onChange={this.onChangeActivityFinish}
                                        value={this.state.activityFinish}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                size="5"
                                value={this.state.distance}
                                onChange={this.onChangeDistance}
                                placeholder="Distance"
                                required
                            />
                        </div>

                        <div>
                            <select onChange={this.onChangeActivityType}>
                                <option selected disabled>Select activity type</option>
                                <option value="Run">Run</option>
                                <option value="Ride">Ride</option>
                                type="text"
                                value={this.state.activityType}
                                required
                            </select>
                        </div>

                        <div>
                            <input
                                type="submit"
                                value="Save"
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }


}