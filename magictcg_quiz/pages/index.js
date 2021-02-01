import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground BackgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Magic The Gathering</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={
              function (event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }
            }
            >
              <input
                placeholder="Nome do jogador"
                onChange={
                  function (event) {
                    setName(event.target.value);
                  }
                }
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content></Widget.Content>
        </Widget>
        <Footer></Footer>
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/yagosvl/Alura_React_Next'/>
    </QuizBackground>
  )
}
