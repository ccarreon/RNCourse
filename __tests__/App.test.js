import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

test('renders a simple text', () => {
    const { getByText } = render(<Text>Hello World!</Text>);
    expect(getByText('Hello World!')).toBeTruthy();
});
