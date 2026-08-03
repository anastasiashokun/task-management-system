import { FC, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {DateButton, DateStack, StyledDatePicker} from '../stylesComponents/stylesDate'

const DateCard: FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateStack spacing={2} direction="row">
      <DateButton variant="text">↜</DateButton>
      <StyledDatePicker
        label="date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
      <DateButton variant="text">↝</DateButton>
      </DateStack>
    </LocalizationProvider>
  );
};

export default DateCard;