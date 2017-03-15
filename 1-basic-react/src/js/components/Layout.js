import React from "react";
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions'

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

  render() {
    //this.props.dispatch(fetchUser()); //in tut4 branch store.dispatch({type: 'CHANGE_NAME', payload:'Nimmi'})
    console.log(this.props);
    return null;
  };
}
