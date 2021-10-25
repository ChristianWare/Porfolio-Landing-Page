import styles from "../../../styles/Rectangle.module.css";
import Link from "next/link";

function Rectangle({ children }) {
  return (
    <div className={styles.container}>
      <Link href='#1'>
        <a>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
        </a>
      </Link>
    </div>
  );
}

export default Rectangle;
