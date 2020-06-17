import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TableRow extends Component {
  render() {
    return (
      <li>
        <Link to={"/show/" + this.props.data.id}>{this.props.data.title}</Link>
      </li>
    );
  }
}
