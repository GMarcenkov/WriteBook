import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import PostCard from "../components/PostCard";
import styles from "../styles/Home.module.css";

const Home: NextPage<any> = ({ posts }) => {
 
const[newPosts,setPosts]=useState(posts)
  const handleDeletePost = (id:string) => {
    fetch(`https://react-meal-2471b-default-rtdb.firebaseio.com/posts/${id}.json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    setPosts(newPosts.filter((post:any)=>post.id!==id))
  };
  return (
    <div>
      <Head>
        <title>WriteBook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {newPosts.map((post: any) => (
          <PostCard key={post.id} post={post} handleDeletePost={handleDeletePost}/>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  const response = await fetch(
    "https://react-meal-2471b-default-rtdb.firebaseio.com/posts.json"
  );
  const responseData = await response.json();
 
  const keys =Object.keys(responseData)
  const values =Object.values(responseData)
  const posts=values.map((post:any,index)=>({...post,id:keys[index]}))

  return {
    props: {
      posts: posts,
    },
    revalidate: 1,
  };
}
export default Home;
