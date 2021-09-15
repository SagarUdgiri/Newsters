import React, { Component } from 'react'
import NewsItem from './NewsItem'
import {NewsSample} from '../newsSample'

export class News extends Component {

    constructor(props) {
        super(props);
        
        this.state={
        articles:NewsSample,
        page:1,
        totalResults:1
        }
        
    }

    async componentDidMount(){

        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2866f892915d4382b267bb53a3f87fb9&pagesize=18";
        let data= await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles:parsedData.articles , totalResults:parsedData.totalResults})

    }

    handleNextClick = async () =>{
        
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2866f892915d4382b267bb53a3f87fb9&page=${this.state.page + 1}&pagesize=18`;
            let data= await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData)
            this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            });
        
    }
    
    handlePrevClick = async () =>{

        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2866f892915d4382b267bb53a3f87fb9&page=${this.state.page - 1}&pagesize=18`;
        let data= await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
          articles: parsedData.articles,
          page: this.state.page - 1,
        });

    }

    render() {

        return (
            <>
                <div className="container my-3">
                    <h2>NewSters - Top Headlines in the US right now</h2>
                    <NewsItem news={this.state.articles}></NewsItem>
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/18)} className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News
