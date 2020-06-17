import React, { Component } from "react";

export default class TableRow extends Component {
  render() {
    return <li>{this.props.data.title}</li>;
  }
}
