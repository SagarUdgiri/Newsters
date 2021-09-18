import React, { Component } from 'react'
import NewsItem from './NewsItem'
import {NewsSample} from '../newsSample'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps={
        pageSize:6,
        country:'in',
        ctg:'general'
    }

    static propTypes={
        pageSize:PropTypes.number,
        country:PropTypes.string,
        ctg:PropTypes.string
    }

    capTitle = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        
        this.state={
        articles:NewsSample,
        page:1,
        totalResults:1,
        loading:false    
        }
        document.title=`${this.capTitle(this.props.ctg)} - NewSters`;
    }

    async updateNews(pageNo){

        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.ctg}&apiKey=2866f892915d4382b267bb53a3f87fb9&pagesize=${this.props.pageSize}&page=${pageNo}`;
        let data= await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles:parsedData.articles , totalResults:parsedData.totalResults,loading:false})
    }

    async componentDidMount(){
        this.updateNews(1);
    }

    handleNextClick = async () =>{
        this.updateNews(this.state.page + 1)
        this.setState({page: this.state.page + 1});
    }
    
    handlePrevClick = async () =>{
        this.updateNews(this.state.page - 1)
        this.setState({page: this.state.page - 1});
    }

    render() {

        return (
            <>
                <div className="container my-3">
                    <h2 className="text-center my-5">NewSters - Top {this.capTitle(this.props.ctg)} Headlines</h2>
                    {this.state.loading && <Spinner/>}
                    {!this.state.loading && <NewsItem news={this.state.articles}></NewsItem>}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News
