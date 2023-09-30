import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// import IconButton from "@mui/material/IconButton";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  AvatarGroup,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import STYLES from "./CommonCard.style";

const CommonCard = ({
  title = "",
  RightActionButton = false,
  CardFooter = false,
  interviewerInfo = false,
  time,
  interviewType,
  day,
  monthAndDate,
  attendeesImages
}) => {
  const { interviewerName, designation, interviewDate, incline } = interviewerInfo;
  return (
    <Card sx={STYLES.card}>
      <CardContent sx={STYLES.cardPadding}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            {interviewerName && (
              <>
                <Typography variant="h6" sx={STYLES.interviewerInfo}>
                  {interviewerName}
                  <Typography sx={STYLES.designationText} component="span">
                    ({designation})
                  </Typography>
                </Typography>

                <Typography variant="span">{`${interviewDate}`}</Typography>
              </>
            )}
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <List>
              {time && (
                <ListItem>
                  <ListItemIcon>
                    <AccessTimeIcon />
                  </ListItemIcon>
                  <ListItemText primary={time} />
                </ListItem>
              )}
              {interviewType && (
                <ListItem>
                  <ListItemIcon>
                    <PeopleAltOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={interviewType} />
                </ListItem>
              )}
            </List>

            {attendeesImages && (
              <AvatarGroup sx={STYLES.avatarGroup} max={4}>
                {attendeesImages?.map(({ name, url }) => (
                  <Avatar sx={STYLES.avatar} key="url" alt={name} src={url} />
                ))}
              </AvatarGroup>
            )}
          </Grid>
          <Grid item xs={4} style={STYLES.cardRightContainer}>
            {typeof incline === "boolean" && (
              <Box sx={STYLES.inclineCard}>
                {incline ? <ThumbUpOutlinedIcon /> : <AccessTimeIcon />}
                {incline ? "Incline" : "decline"}
              </Box>
            )}

            {(day || monthAndDate) && (
              <Box sx={STYLES.cardRightContainerTimeAndDate}>
                <Box
                  sx={{ ...STYLES.cardRightContainerTimeAndDateDay, ...STYLES.flexJustifyCenter }}>
                  <Typography variant="subtitle1" component="div">
                    {day}
                  </Typography>
                </Box>
                <Box sx={STYLES.flexJustifyCenter}>
                  <Typography variant="subtitle1" component="div">
                    {monthAndDate}
                  </Typography>
                </Box>
              </Box>
            )}
            {RightActionButton}
          </Grid>
        </Grid>
      </CardContent>
      {CardFooter && <CardFooter />}
    </Card>
  );
};

export default CommonCard;
