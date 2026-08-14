import { Typography, Menu, MenuItem, Toolbar } from "@mui/material"
import { FC } from "react"
import { HeaderButton, HeaderAppBar, HeaderImage } from "../stylesComponents/stylesLayout"
import React from "react"
import Routes from '../../hooks/routers/routes.enum'
import { useNavigate } from "react-router-dom"

const menu = [
  { tittle: 'Tasks', url: Routes.DailyPage },
  { tittle: 'Instruction', url: Routes.InstructionPage },
  { tittle: 'Contacts', url: Routes.ContactsPage }
]

const Header: FC = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (url: string) => {
    navigate(url);
    handleClose();
  };

  return (
    <div>
      <HeaderAppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <div
            onClick={() => navigate(Routes.Home)}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
        <HeaderImage src="/Task.jpg" alt="logo" width={70} height={70} />      </div>

   
          <div>
            <HeaderButton
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              ☰
            </HeaderButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              PaperProps={{
                sx: {
                  background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(27,67,50,0.3)',
                }
              }}
            >
              {menu.map((element) => (
                <MenuItem
                  key={element.tittle}
                  onClick={() => handleSelect(element.url)}
                  sx={{
                    color: '#ffffff',
                    fontFamily: "'Josefin Sans', Arial, sans-serif",
                    '&:hover': {
                      background: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  <Typography sx={{ fontFamily: "'Josefin Sans', Arial, sans-serif" }}>
                    {element.tittle}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>

        </Toolbar>
      </HeaderAppBar>
    </div>
  )
}

export default Header