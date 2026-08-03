import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Routes from "../hooks/routers/routes.enum";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px 20px',
          gap: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            color: '#1b4332',
            fontFamily: "'Josefin Sans', Arial, sans-serif",
            lineHeight: 1.2,
          }}
        >
          Organize your life
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#40916c',
            fontFamily: "'Josefin Sans', Arial, sans-serif",
            maxWidth: '500px',
            lineHeight: 1.6,
          }}
        >
          A simple and convenient way to manage your tasks every day
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate(Routes.DailyPage)}
          sx={{
            mt: 2,
            px: 5,
            py: 1.5,
            fontSize: '1.1rem',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)',
            boxShadow: '0 8px 24px rgba(27, 67, 50, 0.35)',
            '&:hover': {
              background: 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 28px rgba(27, 67, 50, 0.45)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Get Started →
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;