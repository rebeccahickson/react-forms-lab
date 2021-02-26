import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charsNum: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>
          Characters left: {this.props.maxChars - this.state.message.length}
        </p>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.message}
        />
      </div>
    );
  }
}

export default TwitterMessage;
