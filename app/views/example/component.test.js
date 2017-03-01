
import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import Example from './component';

describe('Example view', () => {

  let component;

  beforeEach(() => {

    component = shallow(
      <Example
        actions={{
          getData: () => {}
        }}
        data={}
      />
    );

  });

  it('Test 1', () => {

    const instance = component.instance();

    // set
    // act
    // verify

  });

});
