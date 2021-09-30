import { NextPage } from "next";
import Head from "next/head";

const Post: NextPage<any> = ({ post }) => {
 const {title,description,text}=post;
  return (
    <div>
       <Head>
       <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h4>{text}</h4>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch(
    "https://react-meal-2471b-default-rtdb.firebaseio.com/posts.json"
  );
  const posts = await response.json();

  return {
    fallback: "blocking",
    paths: Object.keys(posts).map((key) => ({ params: { postId: key } })),
  };
}

export async function getStaticProps(context: { params: { postId: any } }) {
  // fetch data for a single meetup

  const postId = context.params.postId;

  const response = await fetch(
    "https://react-meal-2471b-default-rtdb.firebaseio.com/posts.json"
  );
  const posts = await response.json();

  return {
    props: {
      post: posts[postId],
    },
    revalidate: 1,
  };
}
export default Post;
