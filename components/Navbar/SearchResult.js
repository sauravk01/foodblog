import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

function SearchResults({ data, searchTerm }) {
  let displayResult;
  if (data.length > 6) {
    displayResult = data.slice(0, 6);
  } else {
    displayResult = data;
  }

  return (
    <>
      <List
        sx={{
          top: "55px",
          width: "100%",
          maxWidth: 250,
          bgcolor: "#449e56",
          position: "absolute",
          zIndex: 5,
          marginLeft: "15px",
          padding: "0px",
        }}
      >
        {displayResult.map((item) => (
          <>
            <Link href={`recipe/${item._id}`} key={item._id}>
              <ListItem
                alignItems="flex-start"
                key={item._id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#73d98b",
                    cursor: "pointer",
                  },
                }}
              >
                <img src={item.image} alt={item.title} width="50" height="50" />

                <ListItemText
                  sx={{ marginLeft: "5px" }}
                  primary={item.title}
                  secondary={
                    <Typography
                      component="span"
                      variant="body"
                      color="text.primary"
                    >
                      {item.themeTitleRecipe}
                    </Typography>
                  }
                />
                <Divider variant="inset" component="li" color="white" />
              </ListItem>
            </Link>
          </>
        ))}
        {data.length > 6 && (
          <ListItem
            alignItems="flex-start"
            sx={{
              backgroundColor: "#9ad9a6",
              textAlign: "center",
              "&:hover": {
                backgroundColor: "#80bf8d",
                cursor: "pointer",
              },
            }}
          >
            <Link href={`/recipe/filterSearch/${searchTerm}`}>
              <a>
                <ListItemText sx={{ marginLeft: "5px" }} primary="View More" />
              </a>
            </Link>
          </ListItem>
        )}
      </List>
    </>
  );
}
export default SearchResults;
