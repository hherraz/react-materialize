/* global describe, it */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import Pagination from '../src/Pagination';

describe('<Pagination />', () => {
  let wrapper = shallow(
    <Pagination items={10} activePage={2} maxButtons={6} />
  );

  it('should render', () => {
    assert(wrapper.find('.pagination').length);
  });

  it('has items', () => {
    assert.strictEqual(wrapper.children().length, 8);
  });

  it('accepts activePage prop', () => {
    assert(wrapper.childAt(2).props().active);
  });

  it('accepts active prop', () => {
    wrapper.setState({ activePage: 4 });
    assert(wrapper.childAt(4).props().active);
  });

  it('doesn\'t update state with wrong activePage prop', () => {
    wrapper = shallow(<Pagination items={1} activePage={2} />);

    assert.equal(wrapper.state().activePage, 1);
  });

  it('updates state with passed activePage prop', () => {
    const newActive = 5;
    wrapper = mount(<Pagination items={10} activePage={2} />);
    wrapper.setProps({ activePage: newActive });

    assert.equal(wrapper.state().activePage, newActive);
  });
});
