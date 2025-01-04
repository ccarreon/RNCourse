import { render } from '@testing-library/react-native';
import App from '../App';


describe('<App />', () => {
    test('Text 1 renders correctly on HomeScreen', () => {
        const { getByText } = render(<App />);
        getByText('Another piece of text!');
    });
    test('Text 2 renders correctly on the HomeScreen', () => {
        const { getByText } = render(<App />);
        getByText('Hello World!');
    });
});
