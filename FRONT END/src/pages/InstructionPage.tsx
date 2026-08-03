import { Box, Typography, Stack } from "@mui/material";

const steps = [
  {
    number: '01',
    title: 'Add a task',
    description: 'Type your task in the input field and press Add or Enter',
    icon: '✏️'
  },
  {
    number: '02',
    title: 'Manage tasks',
    description: 'Mark tasks as done by clicking the checkbox, or delete them with ✕',
    icon: '✅'
  },
  {
    number: '03',
    title: 'Filter tasks',
    description: 'Use filters to view All, Active or Done tasks',
    icon: '🔍'
  },
  {
    number: '04',
    title: 'Tasks are saved',
    description: 'All your tasks are automatically saved in your browser',
    icon: '💾'
  },
]

const InstructionPage = () => {
  return (
    <Box sx={{ padding: '40px 20px', maxWidth: 700, margin: '0 auto' }}>
      
      <Typography variant="h3" sx={{
        fontFamily: "'Josefin Sans', Arial, sans-serif",
        color: '#1b4332', fontWeight: 700, mb: 1,
      }}>
        How it works
      </Typography>
      <Typography sx={{ color: '#40916c', fontFamily: "'Josefin Sans', Arial, sans-serif", mb: 4 }}>
        Get started in just a few steps 🌿
      </Typography>

      <Stack spacing={3}>
        {steps.map(step => (
          <Box key={step.number} sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'flex-start',
            background: 'linear-gradient(135deg, #ffffff 0%, #f0faf1 100%)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid #b7e4c7',
            boxShadow: '0 4px 16px rgba(27,67,50,0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 24px rgba(27,67,50,0.2)',
            }
          }}>
            <Typography sx={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#b7e4c7',
              fontFamily: "'Josefin Sans', Arial, sans-serif",
              lineHeight: 1,
              minWidth: '50px',
            }}>
              {step.number}
            </Typography>
            <Box>
              <Typography sx={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#1b4332',
                fontFamily: "'Josefin Sans', Arial, sans-serif",
                mb: 0.5,
              }}>
                {step.icon} {step.title}
              </Typography>
              <Typography sx={{
                color: '#40916c',
                fontFamily: "'Josefin Sans', Arial, sans-serif",
              }}>
                {step.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default InstructionPage;