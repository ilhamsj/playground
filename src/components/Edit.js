import React, { Component } from "react";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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

  onChangeTitle(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    e.preventDefault();
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // store
    fetch(
      "https://ilham-lumen.herokuapp.com/api/v1/posts/" +
        this.props.match.params.id,
      {
        method: "PUT",
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert("sukses");
        this.setState({
          title: "",
          description: "",
        });
        this.props.history.push("/index");
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h2>Edit {this.state.title}</h2>
        <form onSubmit={this.onSubmit} action="/">
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
          <br />
          <textarea
            type="text"
            placeholder="Description"
            rows="4"
            cols="50"
            value={this.state.description}
            onChange={this.onChangeDescription}
          ></textarea>
          <br />
          <button type="submit">Simpan</button>
        </form>
      </div>
    );
  }
}
