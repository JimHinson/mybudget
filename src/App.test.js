
import React from 'react';
import { shallow } from 'enzyme';
import AddBudgetItem from '../src/components/AddBudgetItem';

describe('<AddBudgetItem /> with no props', () => {
  const container = shallow(<AddBudgetItem />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  // it('should have an email field', () => {
  //   expect(container.find('input[type="email"]').length).toEqual(1);
  // });

  // it('should have proper props for email field', () => {
  //   expect(container.find('input[type="email"]').props()).toEqual({
  //     className: 'mx-auto my-2',
  //     onBlur: expect.any(Function),
  //     placeholder: 'email',
  //     type: 'email',
  //   });
  });