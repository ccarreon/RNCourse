import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';

type GoalInputProps = {
    onAddGoal: (goal: string) => void,
    onCancel: () => void,
    isModalVisable: boolean
};

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

    const closeModal = () => {
        props.onCancel();
        setEnteredGoalText("");
    };

    return (
        <Modal visible={props.isModalVisable} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHander}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={closeModal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '75%',
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
});