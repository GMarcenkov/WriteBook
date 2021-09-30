import { NextPage } from "next";
import { useState } from "react";
import styles from "../../../styles/CreatePost.module.css";
import Head from "next/head";
const CreatePost: NextPage<any> = () => {
  const [post, setPost] = useState({ title: "",description:'',metaTags:'',text:'' });
  const handleInputChnage = (event: any) => {
      setPost({...post,[event.target.name]:event.target.value})
    
  };
  const handleCreatePost = () => {
    fetch("https://react-meal-2471b-default-rtdb.firebaseio.com/posts.json", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "aplication/json",
        },
      });
  };
  return (
    <div className={styles.container}>
       <Head>
       <title>Create Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.title}>
           Create Post
      </div>
      
      <div className={styles.form}>
        <table>
          <tbody>
            <tr>
              <th className={styles.title_wrapper}>Title: </th>
              <th className={styles.input_wrapper}>
                <input
                  className={styles.title_input}
                  name="title"
                  type="text"
                  onChange={handleInputChnage}
                />
              </th>
            </tr>
            <tr>
              <th>Description: </th>
              <th>
                <input
                  className={styles.title_input}
                  name="description"
                  type="text"
                  onChange={handleInputChnage}
                />
              </th>
            </tr>
            <tr>
              <th>Meta Tags: </th>
              <th>
                <input
                  className={styles.title_input}
                  name="metaTags"
                  type="text"
                  onChange={handleInputChnage}
                />
              </th>
            </tr>
          </tbody>
        </table>

        <div className={styles.text_wrapper}>
          <h3>Text: </h3>
          <textarea
            className={styles.text_input}
            name="text"
            onChange={handleInputChnage}
          />
        </div>
         <button className={styles.create_btn} onClick={handleCreatePost}>Create Post</button>
      </div>
     
    </div>
  );
};
export default CreatePost;
