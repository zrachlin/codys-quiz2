import React from 'react';

import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow } from 'enzyme';

// Your component is imported here!
import Profile from '../react/Profile';

// Hi, my name is Cody! I'm a pug! I'm making a clubhouse! (For me, Cody!)

// My clubhouse needs three things:
// 1. A 'Profile' that will render out my profile information
// 2. A list of my absolute 'FavoriteFoods'
// 3. A 'Homepage' that will display the 'Profile' and 'FavoriteFoods', and manage state!

// I can't wait! Let's get started!

describe('Profile', () => {

  describe('should render the pug profile props it receives', () => {

    let pugProfile;
    let HomepageWrapper;

    beforeEach('create <Profile /> wrapper', () => {

      // Hey! Here's my pug profile! Make sure to catch my good side!
      pugProfile = {
        name: 'Cody',
        age: '6',
        description: 'Cody is a loveable pug!'
      };

      // Arf! What's going on here?
      //
      // 'shallow' is a function provided by the 'enzyme' library.
      //
      // 'enzyme' is React testing utility created by engineers from Aibnb!
      //
      // 'shallow' is kind of like ReactDOM.render, because it takes the component we pass to it,
      // and executes its render method! However, there are two important differences:
      //  1. 'shallow' doesn't actually render anything to the DOM - it creates this special
      //     'enzyme' object called a 'wrapper'. This object has all of the information
      //     about what the component WOULD look like if it WERE rendered. It also has a bunch
      //     of very useful testing methods, like .find (for finding HTML elements that would have
      //     been rendered by the component)
      //  2. It also only causes this 'virtual render' to happen for the component we pass in.
      //     If our component were to render other child components (not just elements, like div and span),
      //     their render methods will not be invoked. This makes sure that we only test one component at a time!
      HomepageWrapper = shallow(<Profile profile={pugProfile}/>);
    });

    xit('includes the pug name as a header', () => {

      expect(HomepageWrapper.find('h1')).to.have.html('<h1>Profile for Cody</h1>');

    });

    xit('includes the pug age as a header', () => {

      expect(HomepageWrapper.find('p')).to.have.html('<p>Age: 6</p>');

    });

    xit('includes the pug description as a div', () => {

      expect(HomepageWrapper.find('.desc')).to.have.html('<div class="desc">Cody is a loveable pug!</div>');

    });

    xit('changes if a different pug profile is passed in as props', () => {

      // Another pug?!? Wait, is that...Doug?! From the internet?!? Of course he can have a profile!
      // Make sure the Profile component accomodates him too!
      pugProfile = {
        name: 'Doug',
        age: '4',
        description: 'I\'m a celebrity pug!'
      };

      HomepageWrapper = shallow(<Profile profile={pugProfile}/>);
      expect(HomepageWrapper.find('h1')).to.have.html('<h1>Profile for Doug</h1>');
      expect(HomepageWrapper.find('p')).to.have.html('<p>Age: 6</p>');
      expect(HomepageWrapper.find('.desc')).to.have.html('<div class="desc">I\'m a celebrity pug!</div>');

    })

  }); // end describe should render the pug profile props it receives

}); // end describe Profile

