import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const AlbumMasonry = (props) => {
  const theme = useTheme();
  const isXlarge = useMediaQuery(theme.breakpoints.up("xl"));
  const isLarge = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isSmall = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const size = () => {
    if (isXlarge || isLarge) return "small";
    else return "small";
  };

  const columns = () => {
    if (isXlarge) return 4;
    else if (isLarge || isMedium) return 3;
    else if (isSmall) return 2;
    else if (isMobile) return 1;
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Masonry columns={columns()} spacing={1} sx={{ margin: 0 }}>
        {props.album.map((item) => (
          <img
            key={item.id}
            src={item.attributes.formats.large.url}
            alt={item.name}
            style={{ objectFit: "contain" }}
          />
        ))}
      </Masonry>
    </Box>
  );
};

export default AlbumMasonry;
