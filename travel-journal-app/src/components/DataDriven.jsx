function DataDriven(props) {
  console.log(props);
  return (
    <article className="contact-card">
      <img src={props.img} alt="felix image" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={props.picon} alt="phone icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={props.micon} alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
}

export default DataDriven;
