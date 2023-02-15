import Link from "next/link";
import styles from "./main-header.module.scss";

const MainHeader = () => {
  return (
    <Link href="/" className={styles.container}>
      PAKJIWOO
    </Link>
  );
};

export default MainHeader;
