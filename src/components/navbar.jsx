import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import { Fragment } from "react";

import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import { navbar } from "./nav_declare";

const menuColors = {
  bg: {
    main: "#324f77",
    alternate: "#efe",
  },
  text: {
    primary: "#ccf",
    secondary: "#46505A",
  },
};

function Navbar() {
  console.log("NAVBAR_RENDERED")
  return (
    <Box
      sx={{
        width: "240px",
        bgcolor: menuColors.bg.main,
        boxShadow: 6,
        m: 0.5,
      }}
    >
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ bgcolor: menuColors.bg.alternate }}
          >
            KPIS test
          </ListSubheader>
        }
        sx={{ color: menuColors.text.primary }}
      >
        {NavMap(navbar, 0)}
      </List>
    </Box>
  );
}

export default Navbar;

function NavMap(arr, base) {
  const [open, setOpen] = useState();
  const handleClick = (k) => {
    k === open ? setOpen(0) : setOpen(k);
  };
  return arr.map((item, index) => {
    if (item.nestedContent) {
      return (
        <Fragment key={`${index}${base}`}>
          <ListItemButton
            className="listItemNav"
            key={`${index}${base}`}
            onClick={() => handleClick(`${index}${base}`)}
            sx={{ pl: base * 2, color: menuColors.text.primary }}
          >
            {item.icon}
            <ListItemText key={`${index}${base}`} sx={{ pl: 1 }}>
              {item.title}
            </ListItemText>
            {open === `${index}${base}` ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            key={`${index}${index}${base}`}
            in={open === `${index}${base}`}
            timeout="auto"
          >
            <List key={`${index}${base}`} component="div">
              {NavMap(item.nestedContent, base + 1)}
            </List>
          </Collapse>
        </Fragment>
      );
    } else {
      return (
        <ListItemButton
          key={`${index}${base}`}
          sx={{ pl: base * 2, color: menuColors.text.primary }}
          component={Link}
          to={{ pathname: item.link }}
        >
          {item.icon}
          <ListItemText key={`${index}${base}`} sx={{ pl: 1 }}>
            {item.title}
          </ListItemText>
        </ListItemButton>
      );
    }
  });
}
