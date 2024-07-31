import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    'To Do': [],
    'In Progress': [],
    'Peer Review': [],
    'Done': [],
  },
  searchTerm: ''
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks['To Do'].push({ id: `${Date.now()}`, ...action.payload });
    },
    moveTask: (state, action) => {
      const { source, destination } = action.payload;
      const [movedTask] = state.tasks[source.droppableId].splice(source.index, 1);
      state.tasks[destination.droppableId].splice(destination.index, 0, movedTask);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { addTask, moveTask, setSearchTerm } = tasksSlice.actions;
export default tasksSlice.reducer;
