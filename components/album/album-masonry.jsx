import { Box, Dialog } from "@mui/material";
import { Masonry } from "@mui/lab";
import { useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import styles from "./album-masonry.module.scss";

const AlbumMasonry = (props) => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(null);

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

  const openDialog = (index) => {
    console.log(props.album[index]);
    setIndex(index);
    setIsOpen(true);
  };
  const closeDialog = () => {
    setIsOpen(false);
    setIndex(null);
  };
  const arrowRight = () => {
    if (index === props.album.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const arrowLeft = () => {
    if (index === 0) {
      setIndex(props.album.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "ArrowRight") {
      arrowRight();
    }
    if (e.code === "ArrowLeft") {
      arrowLeft();
    }
    return;
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Masonry columns={columns()} spacing={1} sx={{ margin: 0 }}>
          {props.album.map((item, index) => (
            <img
              key={item.id}
              src={item.attributes.formats.medium.url}
              alt={item.name}
              className={styles.preview}
              onClick={() => openDialog(index)}
            />
          ))}
        </Masonry>
      </Box>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={closeDialog}
        onKeyDown={handleKeyDown}
      >
        <Close
          fontSize="large"
          onClick={closeDialog}
          className={styles.close}
        />
        <div className={styles["photo-container"]}>
          <Image
            src={props.album[index]?.attributes.url}
            srcSet={props.album[index]?.attributes.formats.small.url}
            alt={props.album[index]?.attributes.name}
            width={props.album[index]?.attributes.formats.large.width}
            height={props.album[index]?.attributes.formats.large.height}
            className={styles.photo}
          />
          <div className={styles.arrows}>
            <ArrowBack
              fontSize="medium"
              className={styles.arrow}
              onClick={arrowLeft}
            />
            <ArrowForward
              fontSize="medium"
              className={styles.arrow}
              onClick={arrowRight}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AlbumMasonry;
