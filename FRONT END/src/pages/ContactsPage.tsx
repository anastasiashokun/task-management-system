import { Box, Typography, Stack } from "@mui/material";

const ContactsPage = () => {
  return (
    <Box sx={{ padding: '40px 20px', maxWidth: 700, margin: '0 auto' }}>

      <Typography variant="h3" sx={{
        fontFamily: "'Josefin Sans', Arial, sans-serif",
        color: '#1b4332', fontWeight: 700, mb: 1,
      }}>
        Contacts
      </Typography>
      <Typography sx={{ color: '#40916c', fontFamily: "'Josefin Sans', Arial, sans-serif", mb: 4 }}>
        Have questions? Feel free to reach out 🌿
      </Typography>

      <Stack spacing={3}>
        {/* Email */}
        <Box sx={{
          display: 'flex', gap: 3, alignItems: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0faf1 100%)',
          borderRadius: '16px', padding: '24px',
          border: '1px solid #b7e4c7',
          boxShadow: '0 4px 16px rgba(27,67,50,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 24px rgba(27,67,50,0.2)',
          }
        }}>
          <Typography sx={{ fontSize: '2rem' }}>📧</Typography>
          <Box>
            <Typography sx={{
              fontWeight: 700, color: '#1b4332',
              fontFamily: "'Josefin Sans', Arial, sans-serif", mb: 0.5
            }}>
              Email
            </Typography>
            <Typography
              component="a"
              href="mailto:nastyashokun@gmail.com"
              sx={{
                color: '#40916c',
                fontFamily: "'Josefin Sans', Arial, sans-serif",
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              nastyashokun@gmail.com
            </Typography>
          </Box>
        </Box>

        {/* GitHub */}
        <Box sx={{
          display: 'flex', gap: 3, alignItems: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0faf1 100%)',
          borderRadius: '16px', padding: '24px',
          border: '1px solid #b7e4c7',
          boxShadow: '0 4px 16px rgba(27,67,50,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 24px rgba(27,67,50,0.2)',
          }
        }}>
          <Typography sx={{ fontSize: '2rem' }}>💻</Typography>
          <Box>
            <Typography sx={{
              fontWeight: 700, color: '#1b4332',
              fontFamily: "'Josefin Sans', Arial, sans-serif", mb: 0.5
            }}>
              GitHub
            </Typography>
            <Typography
              component="a"
              href="https://github.com"
              target="_blank"
              sx={{
                color: '#40916c',
                fontFamily: "'Josefin Sans', Arial, sans-serif",
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              github.com/nastyashokun
            </Typography>
          </Box>
        </Box>

        {/* LinkedIn */}
        <Box sx={{
          display: 'flex', gap: 3, alignItems: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0faf1 100%)',
          borderRadius: '16px', padding: '24px',
          border: '1px solid #b7e4c7',
          boxShadow: '0 4px 16px rgba(27,67,50,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 24px rgba(27,67,50,0.2)',
          }
        }}>
          <Typography sx={{ fontSize: '2rem' }}>🔗</Typography>
          <Box>
            <Typography sx={{
              fontWeight: 700, color: '#1b4332',
              fontFamily: "'Josefin Sans', Arial, sans-serif", mb: 0.5
            }}>
              LinkedIn
            </Typography>
            <Typography
              component="a"
              href="https://linkedin.com"
              target="_blank"
              sx={{
                color: '#40916c',
                fontFamily: "'Josefin Sans', Arial, sans-serif",
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              linkedin.com/in/nastyashokun
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactsPage;