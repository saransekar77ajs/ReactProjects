function Entry(props) {
  console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.img.src} alt={props.img.alt} className="main-image" />
      </div>
      <div>
        <img src="/marker.png" alt="map marker icon" className="marker" />
        <span className="country-name">{props.country}</span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h2>{props.title}</h2>
        <p>{props.dates}</p>
        <p>{props.text}</p>
      </div>
    </article>
  );
}

export default Entry;
