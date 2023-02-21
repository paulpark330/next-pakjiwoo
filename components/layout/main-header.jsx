import Link from "next/link";
import styles from "./main-header.module.scss";

const MainHeader = () => {
  return (
    <div className={styles.container}>
      <Link href="/">PAKJIWOO</Link>
    </div>
  );
};

export default MainHeader;
