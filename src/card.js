
export default function Card(props) {
    const {playerDetails, onDeleteChange} = props;
    const handleDeleteClick = () => {
      onDeleteChange(playerDetails.id);
    };
    return <>
  <div className="card-container">
      <a href="/" className="hero-image-container">
        <img className="hero-image" src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-490703338.jpg" alt="Spinning glass cube"/>
      </a>
      <main className="main-content">
        <h1>{playerDetails.name}</h1>
        <p>{playerDetails.position}</p>
        <div className="flex-row">
          <div className="coin-base">
            <img src="https://i.postimg.cc/T1F1K0bW/Ethereum.png" alt="Ethereum" className="small-image"/>
            {playerDetails.minutes > 1 && <h2>{playerDetails.minutes} minutes allocated</h2>}
            {playerDetails.minutes == 1 && <h2>{playerDetails.minutes} minute allocated</h2>}
          </div>
        </div>
      </main>
      <br/>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
    </>;
}


