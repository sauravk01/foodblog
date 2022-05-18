import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";
const DrawerComp = ({ LinkArray }) => {
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{ sx: { backgroundColor: "#a5d6a7", marginLeft: "auto" } }}
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
        {session && (
          <>
            {/* <Grid item xs={1}></Grid> */}
            <Grid item xs={1}>
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  disableRipple
                  disableFocusRipple
                  variant="text"
                  color="inherit"
                  sx={{
                    marginLeft: "2px",
                    alignItem: "center",
                  }}
                  onClick={() => signOut()}
                >
                  SignOut
                </Button>
              </Box>
            </Grid>
          </>
        )}
        {!session && (
          <>
            {/* <Grid item xs={1}></Grid> */}
            <Grid item xs={1}>
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  disableRipple
                  disableFocusRipple
                  variant="text"
                  color="inherit"
                  sx={{
                    marginLeft: "2px",
                    alignItem: "center",
                  }}
                  onClick={() => signIn()}
                >
                  SignIn
                </Button>
              </Box>
            </Grid>
          </>
        )}
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
