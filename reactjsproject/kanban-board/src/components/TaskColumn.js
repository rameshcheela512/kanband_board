// src/components/TaskColumn.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { useSelector } from 'react-redux';

const TaskColumn = ({ stage }) => {
  const tasks = useSelector((state) => state.tasks[stage]);

  return (
    <Droppable droppableId={stage}>
      {(provided) => (
        <Paper
          elevation={3}
          style={{ padding: '16px', minHeight: '500px' }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Typography variant="h6" align="center" gutterBottom>
            {stage}
          </Typography>
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard task={task} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Paper>
      )}
    </Droppable>
  );
};

export default TaskColumn;
