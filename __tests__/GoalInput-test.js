import { render, fireEvent } from '@testing-library/react-native';
import GoalInput from '../components/GoalInput';


describe('<GoalInput />', () => {

    test('Placeholder renders correctly in the TextInput', () => {
        const { getByPlaceholderText } = render(<GoalInput />);
        expect(getByPlaceholderText('Your course goal!')).toBeTruthy();
    });

    test('renders the "Add Goal" button with the correct title', () => {
        const { getByText } = render(<GoalInput />);
        expect(getByText('Add Goal')).toBeTruthy();
    });

    test('renders the "Cancel" button with the correct title', () => {
        const { getByText } = render(<GoalInput />);
        expect(getByText('Cancel')).toBeTruthy();
    });

    test('renders the modal when isModalVisable is true', () => {
        const { getByTestId } = render(
            <GoalInput isModalVisable={true} onAddGoal={() => { }} onCancel={() => { }} />
        );
        expect(getByTestId('goal-input-modal')).toBeTruthy();
    });

    test('does not render the modal when isModalVisable is false', () => {
        const { queryByTestId } = render(
            <GoalInput isModalVisable={false} onAddGoal={() => { }} onCancel={() => { }} />
        );
        expect(queryByTestId('goal-input-modal')).toBeNull();
    });

    test('calls onAddGoal with entered goal text when Add Goal is pressed', () => {
        const mockOnAddGoal = jest.fn();
        const { getByText, getByPlaceholderText } = render(
            <GoalInput isModalVisable={true} onAddGoal={mockOnAddGoal} onCancel={() => { }} />
        );

        const textInput = getByPlaceholderText('Your course goal!');
        fireEvent.changeText(textInput, 'Learn React Native');
        fireEvent.press(getByText('Add Goal'));

        expect(mockOnAddGoal).toHaveBeenCalledWith('Learn React Native');
    });

    test('clears the TextInput after Add Goal is pressed', () => {
        const { getByText, getByPlaceholderText } = render(
            <GoalInput isModalVisable={true} onAddGoal={() => { }} onCancel={() => { }} />
        );

        const textInput = getByPlaceholderText('Your course goal!');
        fireEvent.changeText(textInput, 'Learn React Native');
        fireEvent.press(getByText('Add Goal'));

        expect(textInput.props.value).toBe('');
    });

    test('calls onCancel when Cancel button is pressed', () => {
        const mockOnCancel = jest.fn();
        const { getByText } = render(
            <GoalInput isModalVisable={true} onAddGoal={() => { }} onCancel={mockOnCancel} />
        );

        fireEvent.press(getByText('Cancel'));
        expect(mockOnCancel).toHaveBeenCalled();
    });

    test('clears the TextInput when Cancel button is pressed', () => {
        const { getByText, getByPlaceholderText } = render(
            <GoalInput isModalVisable={true} onAddGoal={() => { }} onCancel={() => { }} />
        );

        const textInput = getByPlaceholderText('Your course goal!');
        fireEvent.changeText(textInput, 'Learn React Native');
        fireEvent.press(getByText('Cancel'));

        expect(textInput.props.value).toBe('');
    });

    test('does not set enteredGoalText when input is empty', () => {
        const { getByPlaceholderText } = render(
            <GoalInput isModalVisable={true} onAddGoal={() => { }} onCancel={() => { }} />
        );

        const textInput = getByPlaceholderText('Your course goal!');
        fireEvent.changeText(textInput, '');
        expect(textInput.props.value).toBe('');
    });

    test('renders the image correctly', () => {
        const { getByTestId } = render(
            <GoalInput isModalVisable={true} onAddGoal={() => { }} onCancel={() => { }} />
        );

        const image = getByTestId('goal-image');
        expect(image.props.source).toEqual(require('../assets/images/goal.png'));
    });
});
