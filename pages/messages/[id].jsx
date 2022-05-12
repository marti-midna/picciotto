import styles from "./id.module.scss";
import FocusCard from "../../components/FocusCard";
import { ImCross } from "react-icons/im";
import { DELETE } from "../../utils/api";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://edgemony-backend.herokuapp.com/messages");
  const data = await res.json();

  const paths = data.map((message) => {
    return {
      params: { id: message.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://edgemony-backend.herokuapp.com/messages/${id}`
  );
  const data = await res.json();

  return {
    props: { message: data },
  };
};

export default function Id({ message }) {
  const router = useRouter();
  const { idd } = router.query;

  const onMessageDelete = (idd) => {
    const deleteIt = confirm("Sei sicuro di volerlo cancellare?");

    deleteIt &&
      DELETE("messages", idd).then(() => {
        router.push("/");
      });
  };

  return (
    <>
      <FocusCard />

      <div className={styles.card}>
        <div className={styles.deleteicon}>
          <ImCross size="0.8rem" onClick={() => onMessageDelete(message.id)} />
        </div>
        <h3>{message.text}</h3>
        <p>{message.sender}</p>
        <p>{message.date}</p>
      </div>
    </>
  );
}
