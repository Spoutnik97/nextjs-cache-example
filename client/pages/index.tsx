import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="nocache">
        <a>No cache</a>
      </Link>
      <Link href="cache">
        <a>Cache</a>
      </Link>
    </div>
  );
};

export default Home;
