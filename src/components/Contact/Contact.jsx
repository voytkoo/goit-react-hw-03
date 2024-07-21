import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  const { name, number, id } = contact;
  return (
    <li className={s.item}>
      <p className={s.text}>
        <FaUser className={s.icon} /> {name}:
        <FaPhone className={s.icon} /> {number}
      </p>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
