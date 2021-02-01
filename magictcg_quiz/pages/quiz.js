import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h1>Carregando...</h1>
      </Widget.Header>
      <Widget.Content>
        Carregando a pergunta...
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ questionId, totalQuestions, question }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>{`Pergunta ${questionId + 1} de ${totalQuestions}`}</h1>
      </Widget.Header>
      <Widget.Content>
        <form onSubmit={function (event) {
          event.preventDefault();
          router.push(`/quiz?name=${name}`);
        }}
        >
          <h2>{question.title}</h2>
          <p>{question.description}</p>
          {question.alternatives.map((alternativa, alternativeIndex) => (
            <Widget.Topic>
              {alternativa}
            </Widget.Topic>
          ))}

          <Button type="submit" disabled={name.length === 0}>
            Próxima Pergunta
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default function Quiz() {
  const [questionId] = React.useState(0);
  const question = db.questions[0];
  const totalQuestions = db.questions.length;

  return (
    <QuizBackground BackgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget
          questionId={questionId}
          totalQuestions={totalQuestions}
          question={question}
        />
        <LoadingWidget />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/yagosvl/Alura_React_Next" />
    </QuizBackground>
  );
}
