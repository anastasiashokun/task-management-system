import React from 'react';
import {  Container, Typography, Link,  ListItem,  Grid, ListItemText } from '@mui/material';
import Routes from '../../hooks/routers/routes.enum'
import {  HeaderAppBar } from "../stylesComponents/stylesLayout"
import { Link as RouterLink } from 'react-router-dom';

const menu = [
    {tittle: 'Tasks', url: Routes.DailyPage },
    {tittle: 'Instruction', url: Routes.InstructionPage },
    {tittle: 'Contacts', url: Routes.ContactsPage }
  ]


const Footer: React.FC = () => {
  return (
    <HeaderAppBar position="static">
      <Container sx={{ py: 4 }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, mb: 1 }}>
              Any questions?
            </Typography>
            <ListItem>
              <ListItemText
                primary="Write me ↷"
                secondary={
                  <Link href="mailto:nastyashokun@gmail.com" color="inherit">
                    nastyashokun@gmail.com
                  </Link>
                }
                sx={{ color: '#fff', fontFamily: 'Josefin Sans' }}
              />
            </ListItem>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, mb: 1 }}>
              Pages
            </Typography>
           {menu.map((item) => (
        <ListItem key={item.tittle}>
    <ListItemText
      primary={
        <Link component={RouterLink} to={item.url} color="inherit">
          {item.tittle}
        </Link>
      }
      sx={{ color: '#fff', fontFamily: 'Josefin Sans' }}
    />
  </ListItem>
             )    )}
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 4, fontFamily: 'Josefin Sans', opacity: 0.7 }}
        >
          &copy; 2026. Have a nice day!
        </Typography>
      </Container>
    </HeaderAppBar>
  );
};

export default Footer;

