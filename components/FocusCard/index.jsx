import React from "react";
import Image from "next/image";
import logo from "../../public/favicon.png";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

export default function FocusCard() {
  return (
    <div className={styles.nav_focus}>
      <Image src={logo} width="50" height="50" />
      <Link href="/">
        <a>
          <div>
            <FiChevronLeft size="1.5rem" />
          </div>{" "}
          <p>Home</p>
        </a>
      </Link>
    </div>
  );
}
