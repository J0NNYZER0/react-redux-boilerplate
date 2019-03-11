import React from 'react';
import { shallow } from 'enzyme';
import TestTextInput from './Text';

const mockDefaultPropsVal = '';
const mockInputNamePropsVal = 'promoCode';
const mockOnChangeHandler = jest.fn();
const TextInput = (
  <TestTextInput
    defaultValue={mockDefaultPropsVal}
    inputName={mockInputNamePropsVal}
    onChangeHandler={mockOnChangeHandler}
  />
);

describe('<TextInput />', () => {
  let wrapper = shallow(TextInput);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a input element', () => {
    expect(wrapper.type()).toEqual('input');
  });

  describe('should have an html class attribute value', () => {
    wrapper = shallow(
      <TestTextInput
        defaultValue={mockDefaultPropsVal}
        inputName={mockInputNamePropsVal}
        onChangeHandler={mockOnChangeHandler}
      />,
    );

    it('equal to \'text-input\', when no classNames prop is set', () => {
      expect(wrapper.html()).toEqual('<input type="text" autoComplete="off" class="text-input" name="promoCode" value=""/>');
    });

    it('equal to \'text-input test-class\', when the classNames prop is set with \'test-class\' as the value', () => {
      wrapper.setProps({ classNames: 'test-class' });
      expect(wrapper.html()).toEqual('<input type="text" autoComplete="off" class="text-input test-class" name="promoCode" value=""/>');
    });
  });

  describe('should have an optional html placeholder attribute', () => {
    wrapper = shallow(
      <TestTextInput
        defaultValue={mockDefaultPropsVal}
        inputName={mockInputNamePropsVal}
        onChangeHandler={mockOnChangeHandler}
      />,
    );

    it('equal to \'test-me\', when the placeholder prop is set with \'test-me\' as the value', () => {
      wrapper.setProps({ placeholder: 'test-me' });
      expect(wrapper.html()).toEqual('<input type="text" autoComplete="off" class="text-input test-class" name="promoCode" placeholder="test-me" value=""/>');
    });
  });
});
