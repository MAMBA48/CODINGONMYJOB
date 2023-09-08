import { useState } from 'react';
import { styled } from 'styled-components';

const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #000;
  padding: 30px;
`;

const Game = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const time = `${hour}:${min}:${sec}`;

  const [play, setPlay] = useState(false);
  const playGame = () => setPlay(true);

  return (
    <>
      <h2>Let's play a game?</h2>
      <article>
        <h3>If you ready click on the button:</h3>
        <button onClick={playGame}>Play</button>
        {play && (
          <Span>
            <p>{time}</p>
            <h4>voce conhece o continente onde habita?</h4>
          </Span>
        )}
      </article>
    </>
  );
};
export default Game;
