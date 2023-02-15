import MainHeader from "./main-header";
import styles from "./layout.module.scss";
import Navbar from "./navbar";

const Layout = ({ children, navOptions }) => {
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
