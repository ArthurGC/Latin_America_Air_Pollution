import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Country from '../../components/home/Country';

describe('Test Country component', () => {
  // Arrange
  const props = {
    name: 'Peru',
    air: 5,
  };
    // Act
  const component = render(
    <Router>
      <Country name={props.name} air={props.air} />
    </Router>,
  );

  // Assert
  test('Testing Country component render', () => {
    component.getByText('Peru');
    component.getByText(props.air);
    component.getByRole('img', { name: `${props.name}'s map` });
  });
});
