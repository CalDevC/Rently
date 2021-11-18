import "./Card.module.css";


function Card(photo, title, desc) { 
  return (
    
    <div className = "mainCard">
      <div className= "cardPic">
        <img src={photo} alt =" "/>
      </div>
      <div className = "cardTitle">
        {title}
      </div>
      <div className = "cardDesc">
        {desc}
      </div>
      <div className ="button">
        <button>
            View Item
        </button>
        <button>
            Edit Item
        </button>
      </div>
    </div>
  )
  
}

export default Card;
