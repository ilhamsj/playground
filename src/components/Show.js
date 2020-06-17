import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Show extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);

    this.state = {
      title: "",
      description: "",
    };
  }

  componentDidMount() {
    // get
    fetch(
      "https://ilham-lumen.herokuapp.com/api/v1/posts/" +
        this.props.match.params.id
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          title: data.title,
          description: data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delete(e) {
    e.preventDefault();
    // delete
    fetch(
      "https://ilham-lumen.herokuapp.com/api/v1/posts/" +
        this.props.match.params.id,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("dekete sukses");
        this.props.history.push("/index");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        <Link to={"/edit/" + this.props.match.params.id}>Edit</Link>
        <Link to={"/"} onClick={this.delete}>
          Hapus
        </Link>
      </div>
    );
  }
}
