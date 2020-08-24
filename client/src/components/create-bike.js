import React, { Component } from 'react';
const client = require('../client');

export default class CreateBike extends Component {

    constructor(props) {
        super(props);

        this.onChangeBikeName = this.onChangeBikeName.bind(this);
        this.onChangeBikeType = this.onChangeBikeType.bind(this);
        this.onChangeBikeWheelSize = this.onChangeBikeWheelSize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //creating bike object
        this.state = {
            bike_name: '',
            bike_type: '',
            bike_wheel_size: '',
            bike_completed: false
        }
    }

    onChangeBikeName(e) {
        this.setState({
            bike_name: e.target.value
        });
    }

    onChangeBikeType(e) {
        this.setState({
            bike_type: e.target.value
        });
    }

    onChangeBikeWheelSize(e) {
        this.setState({
            bike_wheel_size: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Bikes submitted:`);
        console.log(`Bikes Name: ${this.state.bike_name}`);
        console.log(`Bikes Type: ${this.state.bike_type}`);
        console.log(`Bikes Wheel Size: ${this.state.bike_wheel_size}`);
        console.log(`Bikes Completed: ${this.state.bike_completed}`);

        const newBike = {
            bike_name: this.state.bike_name,
            bike_type: this.state.bike_type,
            bike_wheel_size: this.state.bike_wheel_size,
            bike_completed: this.state.bike_completed
        }


        client.post('/bikes/add/', newBike)
            .then(res => console.log(res.data));

        this.setState({
            bike_name: '',
            bike_type: '',
            bike_wheel_size: '',
            bike_completed: false
        })
    }

    render() {
        return (
            <div style={{backgroundImage: "url("+process.env.PUBLIC_URL + '/bike-diagram.png' + ")"}}>
                <h3>Add New Bikes</h3>
                <img src={process.env.PUBLIC_URL + '/bike-diagram.png'} style={{visibility: 'hidden'}} alt={""} />
                <form onSubmit={this.onSubmit}>

                    <div className="row">
                        <div className="col">
                            <label>Name: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_name}
                                    onChange={this.onChangeBikeName}
                            />
                        </div>
                        <div className="col">
                            <label>Name: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_name}
                                    onChange={this.onChangeBikeName}
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label>Type: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.bike_type}
                                onChange={this.onChangeBikeType}
                                />
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="wheelSize"
                                    id='26"'
                                    value='26"'
                                    checked={this.state.bike_wheel_size==='26"'}
                                    onChange={this.onChangeBikeWheelSize}
                            />
                            <label className="form-check-label">26"</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="wheelSize"
                                    id='27.5"/650b'
                                    value='27.5"/650b'
                                    checked={this.state.bike_wheel_size==='27.5"/650b'}
                                    onChange={this.onChangeBikeWheelSize}
                            />
                            <label className="form-check-label">27.5"/650b</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="wheelSize"
                                    id='29"'
                                    value='29"'
                                    checked={this.state.bike_wheel_size==='29"'}
                                    onChange={this.onChangeBikeWheelSize}
                            />
                            <label className="form-check-label">29"</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="wheelSize"
                                    id='700c'
                                    value='700c'
                                    checked={this.state.bike_wheel_size==='700c'}
                                    onChange={this.onChangeBikeWheelSize}
                            />
                            <label className="form-check-label">700c</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Bikes" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}
