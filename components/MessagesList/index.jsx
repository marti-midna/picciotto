import Link from "next/link";
import { useState, useEffect } from "react";
import { GET, DELETE } from "../../utils/api";
import styles from "./index.module.scss";
import { ImCross } from "react-icons/im";

const MessagesList = ({ reloadData, setReloadData }) => {
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessagesList(data));
  }, [reloadData]);

  const onMessageDelete = (id) => {
    const deleteIt = confirm("Sei sicuro di volerlo cancellare?");

    deleteIt &&
      DELETE("messages", id).then(() => {
        setReloadData(!reloadData);
      });
  };

  const orderListByTime = (list) => list.slice(0).reverse();

  return (
    <div className={styles.wrapper}>
      {messagesList &&
        orderListByTime(messagesList).map((message) => (
          <div className={styles.wrapper__message} key={message.id}>
            <div className={styles.deleteicon}>
              <ImCross
                size="0.8rem"
                onClick={() => onMessageDelete(message.id)}
              />
            </div>
            <Link href={`/messages/${message.id}`}>
              <a>
                <h3>{message.text}</h3>
                <p>{message.sender}</p>
              </a>
            </Link>
            <p>{message.date}</p>
          </div>
        ))}
    </div>
  );
};

export default MessagesList;
