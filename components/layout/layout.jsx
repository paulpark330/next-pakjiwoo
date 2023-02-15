import MainHeader from "./main-header";
import styles from "./layout.module.scss";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
