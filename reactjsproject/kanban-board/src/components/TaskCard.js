// src/components/TaskCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TaskCard = ({ task }) => {
  return (
    <Card style={{ marginBottom: '8px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
