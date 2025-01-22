import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts(props) {
  return (
    <li>
        <img src={props.img} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
  );
}
