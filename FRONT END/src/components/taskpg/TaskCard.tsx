import { Stack, TextField, Button, Checkbox, Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import { FC, useState } from "react";

type Task = {
  id: number;
  text: string;
  done: boolean;
}

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard: FC<Props> = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks(prev => [...prev, { id: Date.now(), text: newTask, done: false }]);
    setNewTask('');
  };

  const handleDelete = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleToggle = (id: number) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <Box>
      {/* Поле додавання */}
      <Card sx={{
        mb: 3, borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(27,67,50,0.15)',
        border: '1px solid #b7e4c7',
      }}>
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              label="New task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '& fieldset': { borderColor: '#74c69d' },
                  '&:hover fieldset': { borderColor: '#40916c' },
                }
              }}
            />
            <Button
              variant="contained"
              onClick={handleAddTask}
              sx={{
                px: 3, py: 1.5, borderRadius: '12px',
                background: 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)',
                whiteSpace: 'nowrap',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Add
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* Список */}
      {tasks.length === 0 && (
        <Typography textAlign="center" sx={{ color: '#40916c', mt: 4, fontSize: '1.1rem' }}>
          No tasks here 🌿
        </Typography>
      )}

      <Stack spacing={2}>
        {tasks.map(task => (
          <Card key={task.id} sx={{
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(27,67,50,0.1)',
            border: '1px solid #b7e4c7',
            opacity: task.done ? 0.6 : 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 8px 24px rgba(27,67,50,0.2)',
              transform: 'translateY(-2px)',
            }
          }}>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Checkbox
                  checked={task.done}
                  onChange={() => handleToggle(task.id)}
                  sx={{ color: '#74c69d', '&.Mui-checked': { color: '#2d6a4f' } }}
                />
                <Typography flex={1} sx={{
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                  color: '#1b4332',
                  textDecoration: task.done ? 'line-through' : 'none',
                }}>
                  {task.text}
                </Typography>
                <IconButton onClick={() => handleDelete(task.id)}
                  sx={{ color: '#95d5b2', '&:hover': { color: '#1b4332' } }}>
                  ✕
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default TaskCard;