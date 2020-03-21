import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { expect } from 'chai';
import AddTransaction from './components/AddTransaction';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

configure({ adapter: new Adapter() });

describe('AddTransaction', () => {
  const wrapper = shallow(<AddTransaction/>);
 

  it('should render a <Input />', () => {
    expect(wrapper.find('Input').length).to.equal(2);
  });
  it('simulates click events', () => {
    const wrapper = shallow(<AddTransaction/>);
    expect(wrapper.find('.inputText')).to.have.lengthOf(1);
    expect(wrapper.find('.bar')).to.have.lengthOf(0);
  });
});