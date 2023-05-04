import MainHeader from "./main-header";
import styles from "./layout.module.scss";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const navOptions = [
    { name: "Clients", category: "clients", sort: 1 },
    { name: "Personal", category: "personal", sort: 2 },
    { name: "Actor/Actress", category: "actor", sort: 3 },
    { name: "Music", category: "music", sort: 4 },
    { name: "Sihogonsa", category: "sihogonsa", sort: 5 },
    { name: "Wedding", category: "wedding", sort: 6 },
    // { name: "Musical", category: "musical", sort: 7 },
  ];

  return (
    <>
      <MainHeader />
      <div className={styles.container}>
        <Navbar navOptions={navOptions} />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
