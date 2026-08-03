import { Button,  Stack,  styled,  } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";


export const DateButton = styled(Button)(({theme}) => (
    {
    
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: '24px'

    }
))

export const DateStack = styled(Stack)(({theme}) => (
    {
    
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    margin: '20px'

    }
))

export const StyledDatePicker = styled(DatePicker)(() => (
    {
    
        borderRadius: '20px'

    }
))