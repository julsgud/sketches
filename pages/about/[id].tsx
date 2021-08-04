import Layout from "../../components/layout";
import { getSortedPostsData, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getSortedPostsData().map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = getPostData(params.id);
  return {
    props: {
      ...postData,
    },
  };
}

export default function Post({
  id,
  date,
  title,
}: {
  id: string;
  date: string;
  title: string;
}) {
  return (
    <Layout>
      {title}
      <br />
      {id}
      <br />
      {date}
    </Layout>
  );
}
