function Card({emoji, heading, detail}) {
    return (
      <div>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">LEARN MORE</button>
      </div>
    );
}

export default Card;