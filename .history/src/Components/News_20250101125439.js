import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hello i am a constructor")
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        <div className="col-md-3">
            <NewsItem title="mytitle" description="mydesc" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
        </div>
        <div className="col-md-3">
            <NewsItem title="mytitle" description="mydesc"/>
        </div>
        <div className="col-md-3">
            <NewsItem title="mytitle" description="mydesc"/>
        </div>
        <div className="col-md-3">
            <NewsItem title="mytitle" description="mydesc"/>
        </div>
        </div>
      </div>
    )
  }
}

export default News
