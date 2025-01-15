import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {

    test('renders the "Add New Goal" button with the correct title', () => {
        const { getByText } = render(<App />);
        expect(getByText('Add New Goal')).toBeTruthy();
    });

    test('shows modal when Add New Goal button is pressed', () => {
        const { getByText, getByTestId } = render(<App />);
        fireEvent.press(getByText('Add New Goal'));
        expect(getByTestId('goal-input-modal')).toBeTruthy();
    });

    test('modal is hidden on initial render', () => {
        const { queryByTestId } = render(<App />);
        expect(queryByTestId('goal-input-modal')).toBeNull();
    });

    test('hides modal when cancel button is pressed', () => {
        const { getByText, queryByTestId } = render(<App />);
        fireEvent.press(getByText('Add New Goal'));
        fireEvent.press(getByText('Cancel'));
        expect(queryByTestId('goal-input-modal')).toBeNull();
    });

    test('adds a new goal to the list', () => {
        const { getByText, getByPlaceholderText } = render(<App />);
        fireEvent.press(getByText('Add New Goal'));
        fireEvent.changeText(getByPlaceholderText('Your course goal!'), 'Learn React Native');
        fireEvent.press(getByText('Add Goal'));
        expect(getByText('Learn React Native')).toBeTruthy();
    });

    test('removes a goal from the list', () => {
        const { getByText, getByPlaceholderText, queryByText } = render(<App />);
        fireEvent.press(getByText('Add New Goal'));
        fireEvent.changeText(getByPlaceholderText('Your course goal!'), 'Learn React Native');
        fireEvent.press(getByText('Add Goal'));

        const goal = getByText('Learn React Native');
        fireEvent.press(goal);
        expect(queryByText('Learn React Native')).toBeNull();
    });

    test('does not add an empty goal', () => {
        const { getByText, getByPlaceholderText, queryByText } = render(<App />);
        fireEvent.press(getByText('Add New Goal'));
        fireEvent.changeText(getByPlaceholderText('Your course goal!'), ' ');
        fireEvent.press(getByText('Add Goal'));

        expect(queryByText(' ')).toBeNull();
    });

    test('trims spaces when adding a goal', () => {
        const { getByText, getByPlaceholderText } = render(<App />);
        fireEvent.press(getByText('Add New Goal'));
        fireEvent.changeText(getByPlaceholderText('Your course goal!'), '   Learn TypeScript   ');
        fireEvent.press(getByText('Add Goal'));

        expect(getByText('Learn TypeScript')).toBeTruthy();
    });

    test('adds and deletes a goal', () => {
        const { getByText, getByPlaceholderText, queryByText } = render(<App />);
        fireEvent.press(getByText('Add New Goal'));
        fireEvent.changeText(getByPlaceholderText('Your course goal!'), 'Learn React Native');
        fireEvent.press(getByText('Add Goal'));

        const goal = getByText('Learn React Native');
        expect(goal).toBeTruthy();

        fireEvent.press(goal);
        expect(queryByText('Learn React Native')).toBeNull();
    });

});