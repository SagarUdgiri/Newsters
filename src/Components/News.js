import React, { Component } from 'react'
import NewsItem from './NewsItem'
import {NewsSample} from '../newsSample'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
        totalResults:0,
        loading:true    
        }
        document.title=`${this.capTitle(this.props.ctg)} - NewSters`;
    }

    async updateNews(pageNo){
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.ctg}&apiKey=${this.props.apikey}&pagesize=${this.props.pageSize}&page=${pageNo}`;
        this.setState({loading:true});
        let data= await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData)
        this.setState({articles:this.state.articles.concat(parsedData.articles) , totalResults:parsedData.totalResults,loading:false})
        this.props.setProgress(100);
    }

    async componentDidMount(){
        
        this.setState({articles:[]})
        this.updateNews(1);
    }

    fetchMoreData = () => {

        this.setState({page:this.state.page + 1})
        this.updateNews(this.state.page)
      };

    // handleNextClick = async () =>{
    //     this.updateNews(this.state.page + 1)
    //     this.setState({page: this.state.page + 1});
    // }
    
    // handlePrevClick = async () =>{
    //     this.updateNews(this.state.page - 1)
    //     this.setState({page: this.state.page - 1});
    // }

    render() {

        return (
            <>
                <div className="container my-3">
                    <h2 className="text-center my-5">NewSters - Top {this.capTitle(this.props.ctg)} Headlines</h2>
                    {this.state.loading && <Spinner/>}
                        <InfiniteScroll
                                        dataLength={this.state.articles.length}
                                        next={this.fetchMoreData}
                                        hasMore={this.state.articles.length !== this.state.totalResults}
                                        loader={<Spinner/>}
                                        >
                    <div className="container">
                    <NewsItem news={this.state.articles}></NewsItem>
                    </div>
                    
                    </InfiniteScroll>
                </div>
                {/* <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News
