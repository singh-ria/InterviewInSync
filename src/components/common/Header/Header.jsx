import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import logo from "assets/images/logo.png";
import { STYLES } from "./header.styles";

function Header({ candidateName }) {
  return (
    <Stack direction="row" sx={STYLES.stack}>
      <Typography sx={STYLES.logoText}>{logo || "LOGO"}</Typography>
      <Stack direction="row">
        <Typography sx={STYLES.candidateName}>{candidateName || "Candidate Name"}</Typography>
        <Stack sx={STYLES.avatarStack}>
          <Avatar
            sx={STYLES.avatar}
            alt="Remy Sharp"
            src="https://sm.ign.com/t/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.300.jpg"
          />
          <ArrowDropDownIcon sx={STYLES.dropdownIcon} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
