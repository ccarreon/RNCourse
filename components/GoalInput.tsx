import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

type GoalInputProps = {
    onAddGoal: (goal: string) => void
}

const GoalInput = (props: GoalInputProps) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHander = (formEnteredText: string) => {
        if (formEnteredText !== '')
            setEnteredGoalText(formEnteredText)
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHander}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '75%',
        marginRight: 8,
        padding: 8
    },
    buttonContainer: {
        width: '25%'
    },
});