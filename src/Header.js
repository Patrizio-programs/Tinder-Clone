import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>

      <img
        className="header-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/TinderIcon-2017.svg"
        alt=""
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header-icon" />
      </IconButton>
    </div>
  );
}

export default Header;
