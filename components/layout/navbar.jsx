import styles from "./navbar.module.scss";
import Link from "next/link";
import { Box, Drawer, List, ListItem } from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";

const Navbar = ({ navOptions }) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isSmall = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawerWidth = isMedium || isSmall || isMobile ? 200 : 300;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const list = () => (
    <Box sx={{ width: drawerWidth }}>
      <List>
        {navOptions.map((option) => {
          return (
            <ListItem key={option.sort} onClick={toggleDrawer}>
              <Link href={`/${option.category}`} className={styles.option}>
                {option.name}
              </Link>
            </ListItem>
          );
        })}
        <ListItem onClick={toggleDrawer}>
          <Link href="/contact" className={styles.option}>
            Contact
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className={styles.container}>
      {isMobile && <Menu className={styles.menu} onClick={toggleDrawer} />}

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        variant={isMobile ? "temporary" : "permanent"}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
            position: "static",
            backgroundColor: "#121212",
            color: "white",
          },
          "& .MuiList-root": {
            padding: 0,
            marginTop: isMobile ? 10 : 0,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          },
          "& .MuiListItem-root": {
            padding: 0,
            justifyContent: "center",
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default Navbar;
