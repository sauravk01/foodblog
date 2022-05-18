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
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { useEffect, useState } from "react";
import DrawerComp from "./Drawer";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getData, postData } from "../../utils/fetchData";
import SearchResults from "./SearchResult";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "15ch",
    },
  },
}));

const NavBar = () => {
  const router = useRouter();
  const [sVisible, setSVisible] = useState(false);
  const { data: session } = useSession();
  const [value, setValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(1000));
  const isMatch2 = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (router.route.slice(0, 6) == "/recip") setValue(0);
    if (router.route.slice(0, 6) == "/sub-c") setValue(1);
    if (router.route.slice(0, 6) == "/categ") setValue(2);
  }, [router.route]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm !== "") {
        console.log("searchTerm", searchTerm);

        let result = await postData(`recipe/filterSearch/${searchTerm}`, {
          sendTerms: searchTerm,
        });
        setSearchResult(result.data);
      }
    }, 2500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  let LinkArray;
  // console.log("router", router);
  if (!session) {
    LinkArray = [
      // { title: "Categories", link: "/category" },
      { title: "recipes", link: "/recipe" },
      { title: "Sub-Categories", link: "/sub-category" },
    ];
  }
  if (session)
    LinkArray = [
      { title: "recipes", link: "/create/recipe" },
      { title: "Sub-Categories", link: "/create/sub-category" },
      { title: "Categories", link: "/create/category" },
    ];

  const searchItem = (
    <Grid sx={{ marginLeft: "auto" }}>
      <Search xs={2}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={(e) => {
            setSVisible(true);
            setSearchTerm(e.target.value);
          }}
          onBlur={() => setSVisible(false)}
        />
      </Search>

      {sVisible && searchResult.length >= 1 && searchTerm.length > 0 && (
        <SearchResults data={searchResult} searchTerm={searchTerm} />
      )}
    </Grid>
  );

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
                xs={2}
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
                {isMatch2 && (
                  <Link href={"/recipe"}>
                    <Typography
                      color={"snow"}
                      variant={"h6"}
                      component={"div"}
                      sx={{ cursor: "pointer" }}
                    >
                      FoodWeMake
                    </Typography>
                  </Link>
                )}
              </Grid>

              {isMatch ? (
                <>
                  {searchItem}
                  <DrawerComp LinkArray={LinkArray} />
                </>
              ) : (
                <>
                  <Grid item xs={session ? 5 : 5} sx={{ margin: "auto" }}>
                    <Tabs
                      value={value}
                      onChange={(e, value) => setValue(value)}
                      sx={{ color: "white", margin: "auto" }}
                    >
                      {LinkArray.map(({ title, link }, index) => (
                        <Link
                          href={link}
                          key={index}
                          sx={{ backgroundColor: "transparent" }}
                        >
                          <Tab
                            component={"a"}
                            key={index}
                            color="white"
                            label={title}
                          ></Tab>
                        </Link>
                      ))}
                    </Tabs>
                  </Grid>
                  {searchItem}
                  {session ? (
                    <>
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
                            onClick={() => signOut("google")}
                          >
                            SignOut
                          </Button>
                        </Box>
                      </Grid>
                    </>
                  ) : (
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
                          onClick={() => signIn("google")}
                        >
                          SignIn
                        </Button>
                      </Box>
                    </Grid>
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
