import { render } from '@testing-library/react-native';
import GoalInput from '../components/GoalInput';


describe('<GoalInput />', () => {

    test('Placeholder renders correctly in the TextInput', () => {
        const { getByPlaceholderText } = render(<GoalInput />);
        getByPlaceholderText('Your course goal!');
    });

});
