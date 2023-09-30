import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Header from "components/common/Header/Header";
import { PROGRESS_STYLES } from "../applicationStatus/applicationStatus.styles";

export default function UploadDocuments() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.warn("Selected file:", selectedFile);
    }
  };

  return (
    <Box>
      <Header />

      <Typography
        variant="h6"
        sx={{ ml: "17rem", mt: "2rem", ...PROGRESS_STYLES.primaryTextColor }}>
        Your application status
      </Typography>
      <Box sx={PROGRESS_STYLES.center}>
        <Card
          sx={{
            mt: "0.625rem",
            p: "4.5rem",
            width: "50vw",
            ...PROGRESS_STYLES.container
          }}>
          <CardContent sx={PROGRESS_STYLES.textCenter}>
            <Typography variant="h5" sx={{ mt: "0.625rem", ...PROGRESS_STYLES.primaryTextColor }}>
              Permission granted!{" "}
            </Typography>
            <Typography variant="h6" sx={{ mt: "0.625rem", ...PROGRESS_STYLES.primaryTextColor }}>
              You have received am email having list of documents required for background
              verification. Please upload a zip file having all in one place.
            </Typography>
            <input
              ref={fileInputRef}
              type="file"
              accept=".zip"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            <Button
              sx={{ mt: "1.875rem", ...PROGRESS_STYLES.primaryBgColor }}
              startIcon={<CloudUploadIcon />}
              variant="contained"
              onClick={handleUploadClick}>
              Upload Documents
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
