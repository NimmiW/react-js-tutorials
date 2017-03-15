
import React from "react";
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions'
import { fetchTweets } from '../actions/tweetsActions'

@connect((store) => {
  return {// whatever you return here will act a props
    user: store.user.user,
    fetched: store.user.fetched,
    tweets: store.tweets,
  }
})
export default class Layout extends React.Component {

  componentNimmi(){
    this.props.dispatch(fetchUser());
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

/*  render() {
    console.log(this.componentNimmi()); //in tut4 branch store.dispatch({type: 'CHANGE_NAME', payload:'Nimmi'})
    console.log(this.props);
    return null;
  }; */

  render() {
    const { user, tweets } = this.props;

    //if (!tweets.length) {
    //  return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    //}

    //const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return <div>
      <h1>{user.name}</h1>
      <button onClick={this.componentNimmi.bind(this)}>load tweets</button>
    </div>
  }
}


/*
import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return <div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>
  }
}

*/

