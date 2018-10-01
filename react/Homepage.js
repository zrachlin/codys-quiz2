import React from 'react';
import Profile from './Profile';
import FavoriteFoods from './FavoriteFoods';

export default class Homepage extends React.Component {
  state = {
    favoriteFoods: [],
    pugProfile: {}
  }

  render() {
    const { pugProfile, favoriteFoods } = this.state
    return (

      <div id="clubhouse-homepage">
        <Profile profile={pugProfile} />
        <FavoriteFoods foods={favoriteFoods} />
      </div>

    );

  }

}
