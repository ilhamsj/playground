import React, { Component } from "react";
import TableRow from "./TableRow";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      story: "Helo",
    };
  }
  componentDidMount() {
    // get
    fetch("https://ilham-lumen.herokuapp.com/api/v1/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ blog: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.blog.map((val, i) => {
      return <TableRow data={val} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Popular List</h3>
        <ul>{this.tabRow()}</ul>
      </div>
    );
  }
}
