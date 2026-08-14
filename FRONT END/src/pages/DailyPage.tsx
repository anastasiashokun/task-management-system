import { FC, useState, useEffect } from "react"
import { Box, Typography, Stack, Chip } from "@mui/material"
import DateCard from "../components/taskpg/DateCard"
import TaskCard from "../components/taskpg/TaskCard"

type Task = {
  id: number;
  text: string;
  done: boolean;
}

type Filter = 'all' | 'active' | 'done';

const DailyPage: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const active = total - done;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.done;
    if (filter === 'done') return task.done;
    return true;
  });

  return (
    <Box sx={{ padding: '40px 20px', maxWidth: 700, margin: '0 auto' }}>

      {/* Заголовок */}
      <Typography variant="h3" sx={{
        fontFamily: "'Josefin Sans', Arial, sans-serif",
        color: '#1b4332', fontWeight: 700, mb: 1,
      }}>
        My Tasks
      </Typography>
      <Typography sx={{ color: '#40916c', fontFamily: "'Josefin Sans', Arial, sans-serif", mb: 4 }}>
        Stay organized, stay productive 🌿
      </Typography>

      {/* Статистика */}
      <Stack direction="row" spacing={2} mb={4}>
        <Box sx={{
          flex: 1, textAlign: 'center', padding: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0faf1 100%)',
          borderRadius: '16px', border: '1px solid #b7e4c7',
          boxShadow: '0 4px 16px rgba(27,67,50,0.1)',
        }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#1b4332' }}>
            {total}
          </Typography>
          <Typography sx={{ color: '#40916c', fontFamily: "'Josefin Sans', Arial, sans-serif" }}>
            Total
          </Typography>
        </Box>

        <Box sx={{
          flex: 1, textAlign: 'center', padding: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0faf1 100%)',
          borderRadius: '16px', border: '1px solid #b7e4c7',
          boxShadow: '0 4px 16px rgba(27,67,50,0.1)',
        }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#1b4332' }}>
            {active}
          </Typography>
          <Typography sx={{ color: '#40916c', fontFamily: "'Josefin Sans', Arial, sans-serif" }}>
            Active
          </Typography>
        </Box>

        <Box sx={{
          flex: 1, textAlign: 'center', padding: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0faf1 100%)',
          borderRadius: '16px', border: '1px solid #b7e4c7',
          boxShadow: '0 4px 16px rgba(27,67,50,0.1)',
        }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#1b4332' }}>
            {done}
          </Typography>
          <Typography sx={{ color: '#40916c', fontFamily: "'Josefin Sans', Arial, sans-serif" }}>
            Done
          </Typography>
        </Box>
      </Stack>

      {/* Дата */}
      <DateCard />

      {/* Фільтри */}
      <Stack direction="row" spacing={1} mb={3} mt={2}>
        {(['all', 'active', 'done'] as Filter[]).map(f => (
          <Chip
            key={f}
            label={f.charAt(0).toUpperCase() + f.slice(1)}
            onClick={() => setFilter(f)}
            sx={{
              fontFamily: "'Josefin Sans', Arial, sans-serif",
              fontSize: '0.9rem',
              px: 1,
              background: filter === f
                ? 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)'
                : '#ffffff',
              color: filter === f ? '#ffffff' : '#1b4332',
              border: '1px solid #74c69d',
              '&:hover': {
                background: filter === f
                  ? 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)'
                  : '#f0faf1',
              }
            }}
          />
        ))}
      </Stack>

      {/* Задачі */}
      <TaskCard tasks={filteredTasks} setTasks={setTasks} />

    </Box>
  )
}

export default DailyPage