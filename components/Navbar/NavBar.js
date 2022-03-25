import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { useEffect, useState } from "react";
import DrawerComp from "./Drawer";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [value, setValue] = useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  let LinkArray;
  console.log("router", router);
  if (!session) {
    LinkArray = [
      { title: "Categories", link: "/category" },
      { title: "Sub-Categories", link: "/sub-category" },
      { title: "recipes", link: "/recipe" },
    ];
  }
  if (session)
    LinkArray = [
      { title: "Categories", link: "create/category" },
      { title: "Sub-Categories", link: "create/sub-category" },
      { title: "recipes", link: "create/recipe" },
    ];

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "0px", padding: "0px" }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#66bb6a", margin: "0px", padding: "0px" }}
        >
          <Toolbar>
            <Grid container sx={{ placeItems: "center" }}>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Link href={"/recipe"}>
                  <IconButton
                    size={"large"}
                    edge={"start"}
                    aria-label={"logo"}
                    color={"inherit"}
                  >
                    <SoupKitchenIcon />
                  </IconButton>
                </Link>
                <Link href={"/recipe"}>
                  <Typography
                    color={"snow"}
                    variant={"h6"}
                    component={"div"}
                    //   sx={{ alignItems: "center" }}
                  >
                    FoodWeMake
                  </Typography>
                </Link>
              </Grid>
              {isMatch ? (
                <>
                  <DrawerComp LinkArray={LinkArray} />
                </>
              ) : (
                <>
                  <Grid
                    item
                    xs={session ? 7 : 9}
                    sx={session && { marginLeft: "auto" }}
                  >
                    <Tabs
                      value={value}
                      onChange={(e, value) => setValue(value)}
                      sx={{ color: "white" }}
                    >
                      {LinkArray.map(({ title, link }, index) => (
                        <Link href={link}>
                          <Tab
                            component={"a"}
                            key={index}
                            sx={{ color: "snow" }}
                            label={title}
                          ></Tab>
                        </Link>
                      ))}
                    </Tabs>
                  </Grid>

                  {session && (
                    <>
                      {/* <Grid item xs={1}></Grid> */}
                      <Grid item xs={2}>
                        <Box display={"flex"} alignItems={"center"}>
                          <Button
                            disableRipple
                            disableFocusRipple
                            variant="text"
                            color="inherit"
                            sx={{
                              marginLeft: "auto",
                              alignItem: "center",
                            }}
                            onClick={() => signOut()}
                          >
                            Logout
                          </Button>
                        </Box>
                      </Grid>
                    </>
                  )}
                </>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
