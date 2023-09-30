import {
  Box,
  Button,
  Card,
  CardContent,
  Step,
  StepButton,
  Stepper,
  Typography
} from "@mui/material";
import React from "react";
import { CANDIDATE_CONFIGS } from "configs/index";
import { useNavigate } from "react-router-dom";
import Header from "components/common/Header/Header";
import { PROGRESS_STYLES } from "./applicationStatus.styles";

export default function ApplicationStatus() {
  const [activeStep] = React.useState(2);

  const navigate = useNavigate();

  const handleRequestClick = () => {
    navigate("/upload-documents");
  };
  return (
    <Box>
      <Header />

      <Typography
        variant="h6"
        sx={{ ml: "19rem", mt: "2rem", ...PROGRESS_STYLES.primaryTextColor }}>
        Your application status
      </Typography>
      <Box sx={PROGRESS_STYLES.center}>
        <Card
          sx={{
            mt: "0.625rem",
            p: "2.5rem",
            ...PROGRESS_STYLES.container
          }}>
          <CardContent>
            <Stepper nonLinear activeStep={activeStep}>
              {CANDIDATE_CONFIGS.steps.map((label) => (
                <Step key={label}>
                  <StepButton color="inherit">{label}</StepButton>
                </Step>
              ))}
            </Stepper>

            <Box sx={{ mt: "3.125rem" }}>
              {activeStep === CANDIDATE_CONFIGS.steps.length ? (
                <Card sx={PROGRESS_STYLES.grayContainer}>
                  <CardContent>
                    <Typography sx={{ mt: "0.625rem" }} variant="h6">
                      Congratulations!
                    </Typography>
                    <Typography sx={{ mt: "0.625rem" }}>Cleared successfully.</Typography>
                  </CardContent>
                </Card>
              ) : (
                <Card sx={PROGRESS_STYLES.grayContainer}>
                  <CardContent>
                    {activeStep === 0 ? (
                      <Box sx={PROGRESS_STYLES.textCenter}>
                        <Typography
                          sx={{ mt: "0.625rem", ...PROGRESS_STYLES.primaryTextColor }}
                          variant="h6">
                          Interview Scheduled
                        </Typography>
                        <Typography sx={{ mt: "0.625rem", ...PROGRESS_STYLES.primaryTextColor }}>
                          Interview scheduled successfully.
                        </Typography>
                      </Box>
                    ) : null}
                    {activeStep === 1 ? (
                      <Box sx={PROGRESS_STYLES.textCenter}>
                        <Typography
                          sx={{ mt: "0.625rem", ...PROGRESS_STYLES.primaryTextColor }}
                          variant="h6">
                          Application under progress
                        </Typography>
                        <Typography sx={{ mt: "0.625rem", ...PROGRESS_STYLES.primaryTextColor }}>
                          Your application is in progress.
                        </Typography>
                      </Box>
                    ) : null}
                    {activeStep === 2 ? (
                      <Box sx={PROGRESS_STYLES.textCenter}>
                        <Typography
                          sx={{ mt: "0.625rem", ...PROGRESS_STYLES.primaryTextColor }}
                          variant="h6">
                          Congratulations! You have cleared the interview.
                        </Typography>
                        <Typography sx={{ mt: "0.625rem", ...PROGRESS_STYLES.primaryTextColor }}>
                          Next, Please upload the documents required for background verification
                        </Typography>
                        <Button
                          onClick={handleRequestClick}
                          sx={{ mt: "1.875rem", ...PROGRESS_STYLES.primaryBgColor }}
                          variant="contained">
                          Request Access
                        </Button>
                      </Box>
                    ) : null}
                  </CardContent>
                </Card>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
