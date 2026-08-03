import { AppBar, Button, styled, Typography } from "@mui/material";

export const HeaderAppBar = styled(AppBar)(() => ({
  position: "relative",
  background: 'linear-gradient(90deg, #081c15 0%, #1b4332 30%, #2d6a4f 60%, #40916c 100%)',
  color: '#ffffff',
  boxShadow: '0 4px 16px rgba(27, 67, 50, 0.5)',
}))

export const HeaderImage = styled('img')`
  border-radius: 25px;
  border: 3px solid #74c69d;
  margin: 25px;
  padding: 5px;
`

export const HeaderTypography = styled(Typography)(() => ({
  background: 'transparent',
  color: '#ffffff',
  fontFamily: "'Josefin Sans', Arial, sans-serif",
  fontSize: '40px',
  fontWeight: 500,
  margin: '25px',
}))

export const HeaderButton = styled(Button)(() => ({
  fontSize: '30px',
  margin: '25px',
  fontWeight: 700,
  color: '#ffffff',
}))