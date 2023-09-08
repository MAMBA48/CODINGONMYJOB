const Game = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const time = `${hour}:${min}:${sec}`;

  const play = () => {
    return (
      <>
        <p>beginning</p>
      </>
    );
  };
  return (
    <>
      <h2>Let's play a game?</h2>
      <article>
        <h3>If you ready click on the button:</h3>
        <button onClick={play}>Play</button>
        {setInterval(() => sec, 1000)}
      </article>
    </>
  );
};
export default Game;
