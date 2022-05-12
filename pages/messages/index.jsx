import React from "react";
import NavBar from "../../components/NavBar";
import MessagesList from "../../components/MessagesList";
import styles from "./styles.module.scss";

export default function Messages({reloadData , setReloadData}) {
  return (
    <>
      <NavBar />
      <MessagesList reloadData={reloadData} setReloadData={setReloadData}/>
    </>
  );
}
