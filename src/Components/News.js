import React, { Component } from 'react'
import NewsItem from './NewsItem'
import {NewsSample} from '../newsSample'

export class News extends Component {

    constructor(props) {
        super(props);
        
        this.state={NewsSample}
        
    }
    render() {

        return (
            <div className="container my-3">
                <h2>We are the NewsSTers</h2>
                <NewsItem news={this.state.NewsSample}></NewsItem>
            </div>
        )
    }
}

export default News
