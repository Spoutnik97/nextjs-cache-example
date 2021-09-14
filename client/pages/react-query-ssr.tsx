import type { NextPage } from "next";
import { ROOT_URL } from "../src/constants";
import { Post } from "../src/types/api/post";
import { Card } from "../src/atoms/Card";
import { QueryClient, useQuery } from "react-query";
import Link from "next/link";
import { dehydrate } from "react-query/hydration";

const fetchPosts = async () => {
  const res = await fetch(`${ROOT_URL}/nocache`);
  const response = await res.json();

  return response;
};

const queryClient = new QueryClient();
const STALE_TIME = 10000;

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery("posts", fetchPosts, {
    staleTime: STALE_TIME,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const ReactQuery: NextPage = () => {
  const { data, isLoading } = useQuery<Post[]>("posts", fetchPosts, {
    staleTime: STALE_TIME,
  });

  return (
    <div
      style={{ display: "flex", flex: 1, flexDirection: "column", padding: 24 }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      {isLoading && <p>Loading data...</p>}
      {!!data && data.map((item) => <Card key={item.id} title={item.title} />)}
    </div>
  );
};

export default ReactQuery;
