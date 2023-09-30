import {
  Box,
  Button,
  CardActions,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import React from "react";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CommonCard from "./common/CommonCard/CommonCard";

const CardSamples = () => {
  const listItems = {
    time: "1:30 - 2:00 pm",
    interviewType: "attendees",
    day: "Mon",
    monthAndDate: "Jan 31",
    attendeesImages: [
      {
        url: "https://mui.com/static/images/avatar/1.jpg",
        name: "Amit"
      },
      {
        url: "https://mui.com/static/images/avatar/2.jpg",
        name: "rahul"
      },
      {
        url: "https://mui.com/static/images/avatar/2.jpg",
        name: "rahul"
      },
      {
        url: "https://mui.com/static/images/avatar/2.jpg",
        name: "rahul"
      },
      {
        url: "https://mui.com/static/images/avatar/2.jpg",
        name: "rahul"
      }
    ]
  };

  const meetLink = "https://meet.google.com/ydo-rvan-poe";
  // eslint-disable-next-line no-console
  console.info({ abc: "abc" });

  return (
    <Grid style={{ width: "80%", margin: "20px auto" }} container>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <CommonCard
            CardFooter={() => (
              <CardActions
                sx={{ borderTop: "1px solid #eee", paddingLeft: "32px", paddingRight: "32px" }}>
                <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      window.open(meetLink);
                    }}
                    startIcon={<OpenInNewIcon />}
                    variant="text">
                    {meetLink}
                  </Button>
                  <Box sx={{ display: "flex" }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">Age</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </CardActions>
            )}
            title="L2 Developer Interview with Akash Brahmbhat "
            {...listItems}
          />
        </Grid>
        <Grid item xs={12}>
          <CommonCard
            CardFooter={() => (
              <CardActions
                sx={{ borderTop: "1px solid #eee", paddingLeft: "32px", paddingRight: "32px" }}>
                <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos
                    tempora ex autem officia provident voluptatem in tempore praesentium aut?
                  </Typography>
                </Box>
              </CardActions>
            )}
            interviewerInfo={{
              interviewerName: "Sneha Sharma",
              designation: "Sr.Project Manager",
              interviewDate: "Fab 2 2023",
              incline: true
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <CommonCard
            CardFooter={() => (
              <CardActions
                sx={{ borderTop: "1px solid #eee", paddingLeft: "32px", paddingRight: "32px" }}>
                <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      window.open(meetLink);
                    }}
                    startIcon={<OpenInNewIcon />}
                    variant="text">
                    {meetLink}
                  </Button>
                  <Box sx={{ display: "flex" }}>
                    <Button variant="outlined" style={{ marginRight: "10px" }} size="small">
                      Accept
                    </Button>
                    <Button variant="outlined" size="small">
                      Reject
                    </Button>
                  </Box>
                </Box>
              </CardActions>
            )}
            title="L2 Developer Interview with Akash Brahmbhat "
            {...listItems}
          />
        </Grid>
        <Grid item xs={12}>
          <CommonCard
            CardFooter={() => (
              <CardActions
                sx={{ borderTop: "1px solid #eee", paddingLeft: "32px", paddingRight: "32px" }}>
                <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
                  <Button onClick={() => {}} variant="text">
                    <Typography style={{ fontWeight: "600" }}> Show Interview Feedback </Typography>
                  </Button>
                </Box>
              </CardActions>
            )}
            title="L2 Developer Interview with Akash Brahmbhat "
            {...{
              day: "Mon",
              monthAndDate: "Jan 31"
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <CommonCard title="L2 Developer Interview with Akash Brahmbhat " {...listItems} />
        </Grid>
      </Grid>
      <CommonCard
        title="L2 Developer Interview with Akash Brahmbhat "
        RightActionButton={<Button variant="contained">Share Your Feedback</Button>}
        {...listItems}
      />
      <CommonCard
        title="L2 Developer Interview with Akash Brahmbhat "
        RightActionButton={<Button variant="contained">Share Your Feedback</Button>}
        {...{
          time: "1:30 - 2:00 pm",
          interviewType: "One TO One Interview",
          day: "Mon",
          monthAndDate: "Jan 31"
        }}
      />
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <CommonCard title="L2 Developer Interview with Akash Brahmbhat " {...listItems} />
        </Grid>
        <Grid item xs={6}>
          <CommonCard title="L2 Developer Interview with Akash Brahmbhat " {...listItems} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardSamples;
