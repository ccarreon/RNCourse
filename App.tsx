import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {

  const [courseGoals, setCourseGoals] = useState<{ text: string; key: string }[]>([]);

  const addGoalHandler = (enteredGoalText: string) => {
    if (enteredGoalText.trim() !== '') {
      setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText.trim(), key: Math.random().toString() }]);
    }
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <GoalItem text={item.text} />
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