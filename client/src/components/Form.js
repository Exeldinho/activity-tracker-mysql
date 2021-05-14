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

     onChangeActivityStart (date) {
        this.setState ({
            activityStart: date
            })
     }

    onChangeActivityFinish (date) {
        this.setState ({
            activityFinish: date
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
            act_start: "18:00:00",
            act_finish: "18:59:00",
            distance: 0.2,
            act_type: "Walk"
        }

           // act_start: this.state.activityStart,
           // act_finish: this.state.activityFinish,
          //  distance: this.state.distance,
          //  act_type: this.state.activityType

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
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <div className="form-inline">
                        <label>Add new activity:</label>

                        <div className="col-auto">
                            <input className="form-group"
                                        type="time"
                                        onChange={this.onChangeActivityStart}
                            />
                        </div>

                        <div className="col-auto">
                            <input className="form-group"
                                        type="time"
                                        onChange={this.onChangeActivityFinish}
                            />
                        </div>

                        <div className="col-auto">
                            <input
                                type="text"
                                size="5"
                                className="form-group"
                                value={this.state.distance}
                                onChange={this.onChangeDistance}
                                placeholder="Distance"
                                required
                            />
                        </div>

                        <div className="col-auto">
                            <select className = "form-group" onChange={this.onChangeActivityType}>
                                <option selected disabled>Select activity type</option>
                                <option value="Run">Run</option>
                                <option value="Ride">Ride</option>
                                type="text"
                                value={this.state.activityType}
                                required
                            </select>
                        </div>

                        <div className="col-auto">
                            <input
                                type="submit"
                                value="Save"
                                className="btn btn-primary form-group"
                            />
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-8">
                        RecentActivities
                    </div>
                    <div className="col-md-4">
                        Achievements
                        Totals
                    </div>
                </div>
            </div>
        )
    }


}