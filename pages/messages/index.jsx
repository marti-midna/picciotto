import React from "react";
import NavBar from "../../components/NavBar";
import MessagesList from "../../components/MessagesList";

export default function Messages({reloadData , setReloadData}) {
  return (
    <>
      <NavBar />
      <MessagesList reloadData={reloadData} setReloadData={setReloadData}/>
    </>
  );
}
