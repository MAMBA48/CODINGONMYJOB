import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Span = styled.span`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 6px 0px #000;
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
    alert('received sucessfull');
  };
  type infoType = {
    name: string;
    url?: string;
    img: string;
  };
  const [data, setData] = useState<infoType>({ name: '', url: '', img: '' });
  useEffect(() => {
    const gitInfo = async ({ name, url, img }: infoType) => {
      const reqApi = await fetch('https://api.github.com/users/mamba48');
      const data = await reqApi.json();
      setData({
        img: data.avatar_url,
        name: data.name,
        url: data.html_url,
      });
      return (
        <>
          <p>{img}</p>
          <p>{data.name}</p>
          <p>{url}</p>
        </>
      );
    };
    gitInfo(data);
  }, []);

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
              <button onClick={botUser} id="answer" value="yes">
                sim
              </button>
              <button onClick={botUser} id="answer" value="no">
                não
              </button>
            </span>
            {}
          </Span>
        )}
      </article>
    </>
  );
};
export default Game;
