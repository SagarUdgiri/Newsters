import React, { Component } from 'react'
import loading from './loader.gif';

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-5">
                <img src={loading} alt="loader" />
            </div>
        )
    }
}

export default Spinner