import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [modalIsVisable, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<{ text: string; id: string }[]>([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText: string) => {
    if (enteredGoalText.trim() !== '') {
      setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText.trim(), id: Math.random().toString() }]);
      setModalIsVisible(false);
    }
  };

  const deleteGoalHander = (id: string) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput
        isModalVisable={modalIsVisable}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GoalItem
              text={item.text}
              id={item.id}
              onDeleteItem={deleteGoalHander}
            />
          )}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 30
  },
  goalsContainer: {
    flex: 5,
  },
});