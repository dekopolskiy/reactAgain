import React, { Component } from 'react'
import load from "./1483.gif";
import s from "./Loading.module.css";

export class Loading extends Component {
  render() {
    return (
      <div className={s.loading}>
        LOAD
          <img src={load} alt='s' className={s.image}/>
      </div>
    )
  }
}

export default Loading