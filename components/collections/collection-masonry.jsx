import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import styles from "./collection-masonry.module.scss";

const CollectionMasonry = (props) => {
  const router = useRouter();
  const theme = useTheme();
  const isXlarge = useMediaQuery(theme.breakpoints.up("xl"));
  const isLarge = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isSmall = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const size = () => {
  //   if (isXlarge || isLarge) return "small";
  //   else return "small";
  // };

  const columns = () => {
    if (isXlarge) return 4;
    else if (isLarge || isMedium) return 3;
    else if (isSmall) return 2;
    else if (isMobile) return 1;
  };

  const handleClick = (album) => {
    console.log(album)
    router.push(`/${album.category}/${album.id}`);

  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Masonry columns={columns()} spacing={1} sx={{ margin: 0 }}>
        {props.collection.map((item) => (
          <img
            key={item.id}
            src={item.cover.attributes.formats.medium.url}
            alt={item.name}
            className={styles.photo}
            onClick={() => handleClick(item)}
          />
        ))}
      </Masonry>
    </Box>
  );
};

export default CollectionMasonry;
