import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ROOT_URL } from "../src/constants";
import { Post } from "../src/types/api/post";
import { Card } from "../src/atoms/Card";

const Cache: NextPage = () => {
  const [data, setData] = useState<Post[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${ROOT_URL}/cache`);
        const response = await res.json();

        setData(response);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);

  return (
    <div
      style={{ display: "flex", flex: 1, flexDirection: "column", padding: 24 }}
    >
      {!!data && data.map((item) => <Card key={item.id} title={item.title} />)}
    </div>
  );
};

export default Cache;
