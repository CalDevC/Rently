import styles from "../CSS/Card.module.css";
import { useHistory } from 'react-router-dom';

function Card(props) {
  const history = useHistory();
  const postID = props.id;
  const imageUrl = props.imageUrl;
  return (

    <div className={styles.mainCard} id="cardId">
      <div className="cardTitle">
        {(imageUrl && imageUrl !== '') ? <img src={imageUrl} alt={imageUrl} /> : ''}
        {props.title}
      </div>
      <div className="button">
        <button onClick={() => history.push('/posts/' + postID)}>
          View Item
        </button>
      </div>
    </div>
  )

}

export default Card;
