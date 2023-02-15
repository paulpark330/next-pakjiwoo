import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = ({ navOptions }) => {
  return (
    <div className={styles.container}>
      {navOptions.map((option) => {
        return (
          <Link href={`/${option.category}`} key={option.sort} className={styles.option}>
            {option.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
