import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
  }  
  
    static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: this.propTypes,
    }
    capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
  constructor(props){
    super(props);
    this.state= {
      articles: [],
      loading: false,
      page : 1,
      totalResults: 0
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5005f995ad7744ffbdcd33754b6cfb1f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount(){
    this.updateNews();
  }
   handlePreviousClick=async()=>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

   handleNextClick=async()=>{
   this.setState({page: this.state.page + 1})
   this.updateNews();
}

fetchMoreData = () => {
  this.setState({page: this.state.page + 1})
};
  
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: "35px 0px"}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* {this.state.loading && <Spinner/>}   statement states that if sipnner is true then onlyshow the spinner */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row"> 
        {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
        })}
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
