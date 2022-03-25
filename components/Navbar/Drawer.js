import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";
const DrawerComp = ({ LinkArray }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{ sx: { backgroundColor: "#a5d6a7" } }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {LinkArray.map(({ title, link }, index) => (
            <ListItemButton onClick={() => setOpen(!open)} key={index} divider>
              <Link href={link}>
                <ListItemText sx={{ color: "black" }}>{title}</ListItemText>
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{ marginLeft: "auto", color: "snow" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
