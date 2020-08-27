import React, { Component } from 'react';
const client = require('../client');

class ViewBike extends Component {

    constructor(props) {

        super(props);

        this.state = {
            bike_name: '',
            bike_type: '',
            bike_f_wheel_size: '',
            bike_r_wheel_size: '',
            bike_size: '',
            bike_pedal:'',
            bike_saddle: '',
            bike_groupset: '',
            bike_fork: '',
            bike_brakes: '',
            bike_stem_length: ''
        }
    }

    componentDidMount() {
        client.get('/bikes/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    bike_name: response.data.bike_name,
                    bike_type: response.data.bike_type,
                    bike_f_wheel_size: response.data.bike_f_wheel_size,
                    bike_r_wheel_size: response.data.bike_r_wheel_size,
                    bike_size: response.data.bike_size,
                    bike_pedal: response.data.bike_pedal,
                    bike_saddle: response.data.bike_saddle,
                    bike_groupset: response.data.bike_groupset,
                    bike_fork: response.data.bike_fork,
                    bike_brakes: response.data.bike_brakes,
                    bike_stem_length: response.data.bike_stem_length,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (

            <div>
                <div style={{float: "left", width: "33%%"}}>
                    <h2 style={{textAlign: 'left'}}>{this.state.bike_name}</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">

                            <label>Bike Type: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_type}
                                    readOnly
                            />

                            <label>Bike Size: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_size}
                                    readOnly
                            />

                            <label>Front Wheel Size: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_f_wheel_size}
                                    readOnly
                            />

                            <label>Rear Wheel Size: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_r_wheel_size}
                                    readOnly
                            />

                            <label>Pedals: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_pedal}
                                    readOnly
                            />

                            <label>Saddle/Seat: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_saddle}
                                    readOnly
                            />

                            <label>Groupset: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_groupset}
                                    readOnly
                            />

                            <label>Fork: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_fork}
                                    readOnly
                            />

                            <label>Brakes: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_brakes}
                                    readOnly
                            />

                            <label>Stem Length: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_stem_length}
                                    readOnly
                            />
                            <br/>

                        </div>
                    </form>
                </div>
                <img src={process.env.PUBLIC_URL + '/bike-diagram.png'} style={{float: "right center", width: "67%", paddingTop: "10%"}} alt={""} />
            </div>

        )
    }
}

export default ViewBike;