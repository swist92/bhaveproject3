import React, { Component } from "react";
import Comp from "../../components/Comp/Comp";
import API from "../../utils/API";

class HivePublic extends Component {
  state = {
    compliments: [],
  };

  componentDidMount() {
    API.getCompliments().then((res) =>
      this.setState({ compliments: res.data })
    );
  }

  render() {
    return (
      <>
        <h1 id="hive-head">The Hive!</h1>
        <h5 className="centered">
          See what other busy bees are doing to lift hearts and build community.
        </h5>
        {this.state.compliments.map((compliment) => (
          <Comp
            key={compliment._id}
            username={compliment.username}
            userTwo={compliment.userTwo}
            compliment={compliment.compliment}
          />
        ))}
      </>
    );
  }
}

export default HivePublic;
