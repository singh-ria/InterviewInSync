import React, { useEffect, useState } from "react";

import { CANDIDATE_CONFIGS } from "configs";
import { useNavigate } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import InputLabel from "@mui/material/InputLabel";
import { extractStartTime } from "utils";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography
} from "@mui/material";
import dayjs from "dayjs";

import { useApiStore } from "store/api/timeSlots";
import Header from "components/common/Header/Header";
import { ROUTE } from "../../../constants/routes";
import { CANDIDATE_STYLES } from "./scheduleInterview.styles";

const TimeSlotButton = ({ timeSlot, selectedSlot, handleSlotClick }) => (
  <Button
    key={timeSlot.time}
    className="time-slot-button"
    sx={{
      ...CANDIDATE_STYLES.timeSlotButton,
      backgroundColor: selectedSlot === timeSlot.time ? "#003459" : "#ffffff",
      color: selectedSlot === timeSlot.time ? "#ffffff" : "#000000"
    }}
    onClick={() => handleSlotClick(timeSlot.time)}>
    {extractStartTime(timeSlot.time)}
  </Button>
);

export default function ScheduleInterview({ titleName }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();
  const { fetchData } = useApiStore();
  const [selectedDate, setSelectedDate] = useState(dayjs("10-10-2023"));

  useEffect(() => {
    fetchData("0dfbdf67-5091-44d1-a5a5-5d0d753a08bf");
  }, [fetchData]);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleShareClick = () => {
    navigate(ROUTE.APPLICATION_STATUS);
  };

  // to be removed once API is ready
  const interviewData = [
    {
      timeslots: [
        {
          available: true,
          time: "10:00AM - 10.30AM"
        },
        {
          available: true,
          time: "11:00AM - 11.30AM"
        },
        {
          available: true,
          time: "11:30AM - 12.00PM"
        },
        {
          available: true,
          time: "12:00PM - 12.30PM"
        }
      ],
      interviewDate: "02-10-2023",
      slotId: "sl3",
      interviewerId: "0dfbdf67-5091-44d1-a5a5-5d0d753a09bf"
    }
  ];

  return (
    <Box>
      <Header />

      <Stack
        direction="row"
        sx={{ width: "1100px", alignItems: "center", mt: "1.5rem", mb: "2rem", ml: "7rem" }}>
        <Typography sx={{ ...CANDIDATE_STYLES.title }}>
          {titleName || "L1_Developer Interview with Vidhi Sharma"}{" "}
        </Typography>

        <AccessTimeIcon sx={{ ...CANDIDATE_STYLES.icon, marginLeft: "12rem" }} />
        <Typography sx={{ ...CANDIDATE_STYLES.timeText }}>{titleName || "30 min"} </Typography>
        <GroupIcon sx={{ ...CANDIDATE_STYLES.icon, marginLeft: "9rem" }} />
        <Typography sx={{ ...CANDIDATE_STYLES.timeText }}>
          {titleName || "One-on-one Interview"}{" "}
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Card sx={{ ...CANDIDATE_STYLES.card }}>
          <Stack>
            <Typography
              variant="h5"
              sx={{ alignSelf: "center", width: "250px", mt: "0.9rem", ...CANDIDATE_STYLES.title }}>
              Select date and time
            </Typography>
            <FormControl sx={{ ...CANDIDATE_STYLES.select }}>
              <InputLabel id="demo-simple-select-label">Timezone</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Timezone">
                {CANDIDATE_CONFIGS.timeZones.map((zone) => (
                  <MenuItem key={zone.value} value={zone.value}>
                    {zone.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Grid container spacing={3} sx={{ mt: "1rem" }}>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    value={selectedDate}
                    onChange={(newVal) => setSelectedDate(newVal)}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{ ...CANDIDATE_STYLES.dateCalendar }}>
                  {interviewData.map((interview) => (
                    <Box key={interview.slotId}>
                      <Typography variant="h6" sx={{ ...CANDIDATE_STYLES.dateText }}>
                        {selectedDate.format("ll")}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {interview.timeslots.map((timeSlot) => (
                          <TimeSlotButton
                            key={timeSlot.time}
                            timeSlot={timeSlot}
                            selectedSlot={selectedSlot}
                            handleSlotClick={handleSlotClick}
                          />
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mr: "1rem", mb: "1rem" }}>
            <Button sx={CANDIDATE_STYLES.laterButton}>{CANDIDATE_CONFIGS.buttons.later}</Button>
            <Button onClick={handleShareClick} sx={CANDIDATE_STYLES.shareButton}>
              {CANDIDATE_CONFIGS.buttons.submit}
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
