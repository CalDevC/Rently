import styles from '../CSS/Card.module.css';
import { useHistory } from 'react-router-dom';

function Card(props) {
  const history = useHistory();
  const postID = props.id;
  const imageUrl = props.imageUrl;
  return (
    <div className={styles.mainCard} id="cardId">
      <div>
        <div className={styles.cardTitle}>
          {imageUrl && imageUrl !== '' ? (
            <h1 className={styles.cardTitle}>
              <img src={imageUrl} alt={imageUrl} className={styles.picture} />
            </h1>
          ) : (
            ''
          )}
        </div>
        {props.title}
      </div>
      <div className="button">
        <button onClick={() => history.push('/posts/' + postID)}>
          View Item
        </button>
      </div>
    </div>
  );
}

export default Card;
