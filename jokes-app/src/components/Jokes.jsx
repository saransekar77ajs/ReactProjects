function Jokes(props) {
  console.log(props);
  return (
    <article>
      <details>
        <summary>Setup: {props.setup}</summary>
        <p>Punchline: {props.punchline} </p>
      </details>
    </article>
  );
}

export default Jokes;
