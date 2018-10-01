import React from 'react';

export default class Profile extends React.Component {

  render() {
    const { name, age, description } = this.props.profile
    return (

      <div>
        <h1>Profile for {name}</h1>
        <p>Age: {age}</p>
        <div className="desc">{description}</div>
      </div>

    );

  }

}

