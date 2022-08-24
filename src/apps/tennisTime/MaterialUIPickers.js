import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


let isMobile;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true;
} else {
  isMobile = false;
}

export default function MaterialUIPickers(props) {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        {!isMobile && <DesktopDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={props.date}
          onChange={props.handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />}
        {isMobile && <MobileDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={props.date}
          onChange={props.handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />}
        {!isMobile && <TimePicker
          label="Time"
          orientation="landscape"
          minutesStep={30}
          value={props.time}
          onChange={props.handleTimeChange}
          renderInput={(params) => <TextField {...params} />}
        />}
        {isMobile && <MobileTimePicker
          label="Time"
          minutesStep={30}
          value={props.time}
          onChange={props.handleTimeChange}
          renderInput={(params) => <TextField {...params} />}
        />}
      </Stack>
    </LocalizationProvider>
  );
}