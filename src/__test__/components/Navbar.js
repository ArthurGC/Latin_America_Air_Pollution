import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../general/Navbar';
import store from '../../redux/configureStore';

const setRender = () => {
  const component = render(<Provider store={store}><Router><Navbar /></Router></Provider>);
  return component;
};

describe('Test Navbar component', () => {
  // Arrange

  // Act
  let component;
  beforeEach(() => {
    component = setRender();
  });

  // Assert
  test('Should render without errors', () => {
    const { getByTestId } = component;
    expect(getByTestId('navbarContainer')).toBeInTheDocument();
    expect(getByTestId('navbarTitle')).toBeInTheDocument();
  });
});
