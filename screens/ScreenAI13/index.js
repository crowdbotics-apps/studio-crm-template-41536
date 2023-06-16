import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';

const TaskScreen = () => {
  const [tasks, setTasks] = useState([{
    id: '1',
    title: 'Task 1',
    description: 'Task 1 description',
    done: false
  }, {
    id: '2',
    title: 'Task 2',
    description: 'Task 2 description',
    done: true
  }]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: ''
  });
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [filter, setFilter] = useState('all');
  const filteredTasks = tasks.filter(task => filter === 'all' ? true : filter === 'done' ? task.done : !task.done);

  const addTask = () => {
    setTasks([...tasks, { ...newTask,
      id: Date.now().toString(),
      done: false
    }]);
    setNewTask({
      title: '',
      description: ''
    });
    setShowCreateTask(false);
  };

  const toggleDone = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task,
      done: !task.done
    } : task));
  };

  const TaskItem = ({
    task
  }) => <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <Text style={styles.taskDescription}>{task.description}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity style={styles.doneButton} onPress={() => toggleDone(task.id)}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.assignButton}>
          <Text style={styles.buttonText}>Assign To</Text>
        </TouchableOpacity>
      </View>
    </View>;

  return <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setFilter('all')}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('done')}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('to do')}>
          <Text style={styles.filterText}>To Do</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={filteredTasks} renderItem={({
      item
    }) => <TaskItem task={item} />} keyExtractor={item => item.id} />
      <TouchableOpacity style={styles.createTaskButton} onPress={() => setShowCreateTask(!showCreateTask)}>
        <Text style={styles.buttonText}>Create New Task</Text>
      </TouchableOpacity>
      {showCreateTask && <View style={styles.createTaskContainer}>
          <TextInput style={styles.input} placeholder="Task Title" value={newTask.title} onChangeText={text => setNewTask({ ...newTask,
        title: text
      })} />
          <TextInput style={styles.input} placeholder="Task Description" value={newTask.description} onChangeText={text => setNewTask({ ...newTask,
        description: text
      })} />
          <TouchableOpacity style={styles.addTaskButton} onPress={addTask}>
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
        </View>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  filterText: {
    fontSize: 18,
    color: '#333'
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  taskDescription: {
    fontSize: 16,
    color: '#777'
  },
  taskButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  doneButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5
  },
  assignButton: {
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  createTaskButton: {
    backgroundColor: '#ff9800',
    padding: 15,
    borderRadius: 5,
    margin: 10
  },
  createTaskContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    margin: 10
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10
  },
  addTaskButton: {
    backgroundColor: '#3f51b5',
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  }
});
export default TaskScreen;