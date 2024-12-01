import { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h1>ToDO</h1>
          </div>
          <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/create"}>Create</Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
