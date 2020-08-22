import React, { Component } from 'react';
import axios from 'axios';

export default class EditBike extends Component {
    constructor(props) {
        super(props);

        this.onChangeBikeName = this.onChangeBikeName.bind(this);
        this.onChangeBikeType = this.onChangeBikeType.bind(this);
        this.onChangeBikeWheelSize = this.onChangeBikeWheelSize.bind(this);
        this.onChangeBikeCompleted = this.onChangeBikeCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            bike_name: '',
            bike_type: '',
            bike_wheel_size: '',
            bike_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/bikes/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    bike_name: response.data.bike_name,
                    bike_type: response.data.bike_type,
                    bike_wheel_size: response.data.bike_wheel_size,
                    bike_completed: response.data.bike_completed
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeBikeCompleted(e) {
        this.setState({
            bike_completed: !this.state.bike_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            bike_name: this.state.bike_name,
            bike_type: this.state.bike_type,
            bike_wheel_size: this.state.bike_wheel_size,
            bike_completed: this.state.bike_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/bikes/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Bike</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.bike_name}
                                onChange={this.onChangeBikeName}
                        />
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
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeBikeCompleted}
                                checked={this.state.bike_completed}
                                value={this.state.bike_completed}
                        />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}