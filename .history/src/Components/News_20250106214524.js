import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


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
  
  constructor(){
    super();
    console.log("Hello i am a constructor from news component")
    this.state= {
      articles: [],
      loading: false,
      page : 1,
    }
  }
  async updateNews(pageNo){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5005f995ad7744ffbdcd33754b6cfb1f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false})
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5005f995ad7744ffbdcd33754b6cfb1f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false})
  }
   handlePreviousClick=async()=>{
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5005f995ad7744ffbdcd33754b6cfb1f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    // })
    this.setState({page: this.state.page})
    this.updateNews();
  }

   handleNextClick=async()=>{
  //   console.log("Next");
  //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){  //for adjusting contents of limited number
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5005f995ad7744ffbdcd33754b6cfb1f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedData.articles,
  //     loading:false
  //   })
  // }
}
  
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: "35px 0px"}}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}   {/* statement states that if sipnner is true then onlyshow the spinner */}
        <div className="row"> 
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
