import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { personalityStyleData } from '../data/personalityStyleData'
import HeadlineUnderline from '../common/HeadlineUnderline'
import Button from '../common/Button'
import styled from 'styled-components'

export default function Questionnaire({ testIds }) {
  const history = useHistory()

  const [questionRound, setQuestionRound] = useState(0)
  const currentTestIndex = testIds[questionRound] - 1
  const questions = personalityStyleData[currentTestIndex]?.questions ?? [
    'Brauchen Sie in hohem Maße Lob und Anerkennung?',
    'Möchten Sie besser sein als andere?',
    'Reagieren Sie empfindlich auf Kritik, selbst wenn diese berechtigt ist?',
    'Haben Sie ab und zu Phasen, in denen Sie an Ihren Fähigkeiten, Erfolgen etc. zweifeln?',
    'Erleben Sie Phasen, in denen Sie sehr zufrieden mit sich sind und denken, dass Sie gut sind?',
    'Haben Sie die Tendenz, in besonderer Weise behandelt werden zu wollen?',
    'Haben Sie deutliche Erwartungen, an die sich andere halten sollten, z. B. Sie nicht zu behindern u. a.?',
    'Neigen Sie dazu, andere Personen „einzuspannen“, ihnen Aufgaben zu geben, die Sie eigentlich selbst erledigen sollten?',
  ]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [resultUrl, setResultUrl] = useState('/result/')

  useEffect(() => {
    questionRound === 2 && history.push(resultUrl)
  }, [questionRound, resultUrl, history])

  return (
    <>
      <img alt="" src="/img/questionnaire-intro.svg" />
      <HeadlineUnderline>
        <h1>Fragebogen {questionRound + 1} / 2</h1>
      </HeadlineUnderline>
      <h2>
        Frage {currentQuestionIndex + 1} / {questions.length}
      </h2>
      <h3>{questions[currentQuestionIndex]}</h3>

      <ButtonRow>
        <Button
          btnType="white"
          width="47.5"
          onClick={() => handleAnswer(false)}
        >
          (Eher) Nein
        </Button>
        <Button btnType="white" width="47.5" onClick={() => handleAnswer(true)}>
          (Eher) Ja
        </Button>
      </ButtonRow>
    </>
  )

  function handleAnswer(answer) {
    if (currentQuestionIndex === questions.length - 1) {
      setQuestionRound(questionRound + 1)
      setResultUrl(
        resultUrl + (currentTestIndex + 1) + countYes([...answers, answer])
      )
      setCurrentQuestionIndex(0)
      setAnswers([])
    } else {
      setAnswers([...answers, answer])
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }
}

export function countYes(answers) {
  return answers.reduce((yesCount, answer) => {
    return answer ? yesCount + 1 : yesCount
  }, 0)
}

const ButtonRow = styled.section`
  display: flex;
  justify-content: space-between;
`
