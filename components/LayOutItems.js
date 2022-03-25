import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { deleteData } from "../utils/fetchData";
import { useRouter } from "next/router";

const LayOutItems = ({
  items,
  matches,
  matches2,
  editLink,
  deleteLink,
  title,
  linkPage,
}) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleDelete = async (item) => {
    let url = `${deleteLink}/${item._id}`;
    console.log("url", item.serves);

    for (let des of item.descriptions) {
      console.log("des", des);
      await deleteData(`recipe/description/${des._id}`, session.accessToken);
    }
    for (let serve of item.serves) {
      console.log("ins", serve);
      await deleteData(`recipe/serves/${serve._id}`, session.accessToken);
    }
    for (let ins of item.instructions) {
      console.log("ins", ins);
      await deleteData(`recipe/instruction/${ins._id}`, session.accessToken);
    }

    await deleteData(url, session.accessToken);
    router.reload();
  };
  return (
    <Stack sx={{ margin: "auto" }}>
      {title && <Typography variant="h4">{title}</Typography>}
      <ImageList
        sx={{ maxWidth: "800px", textAlign: "center" }}
        cols={matches ? 3 : 2 && matches2 ? 2 : 1}
      >
        {items.map((item) => (
          <Stack>
            {session && (
              <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
                {/* <Link href={`/${linkName}/${item._id}`}> */}
                <EditTwoToneIcon
                  onClick={() => router.push(`${editLink}/${item._id}`)}
                  sx={{ color: "blueviolet", cursor: "pointer" }}
                />
                {/* </Link> */}
                <DeleteForeverTwoToneIcon
                  onClick={() => handleDelete(item)}
                  sx={{ color: "red", cursor: "pointer" }}
                />
              </Stack>
            )}

            <Link href={`/${linkPage}/${item._id}`} key={item._id}>
              <a>
                <ImageListItem
                  key={item.image}
                  sx={{ width: "250px", height: "150px" }}
                >
                  <img src={`${item.image}`} alt={item.title} loading="lazy" />
                  <ImageListItemBar
                    title={item.title}
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  />
                </ImageListItem>
              </a>
            </Link>
          </Stack>
        ))}
      </ImageList>
    </Stack>
  );
};

export default LayOutItems;
