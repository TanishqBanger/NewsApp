import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  //document.title= `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;


  const  capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
   
 const updateNews =  async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() =>{
    this.updateNews();
  }, [])
 
  const handlePreviousClick=async()=>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  const handleNextClick=async()=>{
   this.setState({page: this.state.page + 1})
   this.updateNews();
}

const fetchMoreData = async() => {
  this.setState({page: this.state.page + 1})
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
};
  
    return (
      <>
        <h1 className="text-center" style={{margin: "35px 0px"}}>NewsMonkey - Top {this.capitalizeFirstLetter(props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}   {/*statement states that if sipnner is true then onlyshow the spinner */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row"> 
        {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general',
}  

  News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: this.propTypes,
  }

export default News
