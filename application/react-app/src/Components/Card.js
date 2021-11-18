import styles from "../CSS/Card.module.css";
import { useHistory } from 'react-router-dom';

function Card(props) { 
  const history = useHistory();
  return (
    
    <div className ={styles.mainCard} id="cardId">
      <div className = "cardTitle">
        {props.title}
      </div>
      <div className ="button">
        <button onClick={() => history.push('/displayPage')}>
            View Item
        </button>
      </div>
    </div>
  )
  
}

export default Card;
