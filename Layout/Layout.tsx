import { NextPage } from "next";
import style from "./Layout.module.css";
import Link from "next/Link";
const Layout: NextPage = ({ children }) => {
  return (
    <>
      <header className={style.header}>
        <Link href="/">
          <h1 style={{ cursor: "pointer" }}>writebook</h1>
        </Link>
        <Link href="/post/create">
          <div className={style.create_post}>Create Post</div>
        </Link>
      </header>
      <div className={style.container}>{children}</div>

      <footer className={style.footer} />
    </>
  );
};

export default Layout;
