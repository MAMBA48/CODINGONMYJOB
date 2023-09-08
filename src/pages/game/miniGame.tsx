import { useState } from 'react';
import { styled } from 'styled-components';

const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #000;
  padding: 30px;
`;
type BasicType = () => void;

const Game = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const time = `${hour}:${min}:${sec}`;
  const [play, setPlay] = useState<boolean>(false);
  const [bot, setBot] = useState<boolean>(false);
  const playGame: BasicType = () => setPlay(true);
  const botUser: BasicType = () => {
    alert('botUser is ok!');
  };

  return (
    <>
      <h2>Let's play a game?</h2>
      <article>
        <h3>If you ready click on the button:</h3>
        <button onClick={playGame}>Play</button>
        {play && (
          <Span>
            <span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100px',
                  width: '100px',
                  background: '#000',
                  borderRadius: '50%',
                }}
              ></div>
              <small>bot_name</small>
            </span>
            <p>{time} Voce conhece o continente onde habita?</p>
            <span>
              <button
                onClick={() => alert('received sucessfull')}
                id="answer"
                value="yes"
              >
                sim
              </button>
              <button
                onClick={() => alert('received sucessfull')}
                id="answer"
                value="no"
              >
                não
              </button>
            </span>
          </Span>
        )}
      </article>
    </>
  );
};
export default Game;
