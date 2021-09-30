import { NextPage } from "next";
import style from "./Layout.module.css";
// import Link from "next/Link";
const Layout: NextPage = ({ children }) => {
  return (
    <>
      <header className={style.header}>
        <a href="/">
          <h1 style={{ cursor: "pointer" }}>writebook</h1>
        </a>
        <a href="/post/create">
          <div className={style.create_post}>Create Post</div>
        </a>
      </header>
      <div className={style.container}>{children}</div>

      <footer className={style.footer} />
    </>
  );
};

export default Layout;
