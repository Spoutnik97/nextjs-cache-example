import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="nocache">
        <a style={{ marginBottom: 12 }}>No cache ➡️</a>
      </Link>
      <Link href="cache">
        <a style={{ marginBottom: 12 }}>Cache ➡️</a>
      </Link>
      <Link href="react-query" passHref>
        <a style={{ marginBottom: 12 }}>React Query ➡️</a>
      </Link>
    </div>
  );
};

export default Home;
