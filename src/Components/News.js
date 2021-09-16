import React, { Component } from 'react'
import NewsItem from './NewsItem'
import {NewsSample} from '../newsSample'
import Spinner from './Spinner';

export class News extends Component {

    constructor(props) {
        super(props);
        
        this.state={
        articles:NewsSample,
        page:1,
        totalResults:1,
        loading:false    
        }
        
    }

    async componentDidMount(){

        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.ctg}&apiKey=2866f892915d4382b267bb53a3f87fb9&pagesize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles:parsedData.articles , totalResults:parsedData.totalResults,loading:false})

    }

    handleNextClick = async () =>{

            this.setState({loading:true})
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.ctg}&apiKey=2866f892915d4382b267bb53a3f87fb9&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            let data= await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData)
            this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,loading:false
            });
        
    }
    
    handlePrevClick = async () =>{

        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.ctg}&apiKey=2866f892915d4382b267bb53a3f87fb9&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
          articles: parsedData.articles,
          page: this.state.page - 1,loading:false
        });

    }

    render() {

        return (
            <>
                <div className="container my-3">
                    <h2 className="text-center my-5">NewSters - Top Headlines in the US right now</h2>
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
