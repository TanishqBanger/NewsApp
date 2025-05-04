import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    console.log("Hello i am a constructor from news component")
    this.state= {
      articles: [],
      loading: false,
      Page : 1,
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5005f995ad7744ffbdcd33754b6cfb1f&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
  }
   handlePreviousClick=async()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5005f995ad7744ffbdcd33754b6cfb1f&page=${this.state.Page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

   handleNextClick=async()=>{
    console.log("Next");
    if(totalResults/20)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5005f995ad7744ffbdcd33754b6cfb1f&page=${this.state.Page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    })
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
      </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.Page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
