// src/components/KanbanBoard.js
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskColumn from './TaskColumn';
import SearchBar from './SearchBar';
import AddTaskButton from './AddTaskButton';
import { useDispatch } from 'react-redux';
import { moveTask } from '../store/tasksSlice';

const KanbanBoard = () => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    dispatch(moveTask({ source, destination }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Kanban Board
        </Typography>
        <Grid container spacing={2}>
          {['To Do', 'In Progress', 'Peer Review', 'Done'].map(stage => (
            <Grid item xs={12} sm={6} md={3} key={stage}>
              <TaskColumn stage={stage} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </DragDropContext>
  );
};

export default KanbanBoard;
