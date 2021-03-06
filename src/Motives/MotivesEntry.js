import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import HideElement from '../common/HideElement'
import { motiveData } from '../data/motiveData'
import MotiveItem from './MotiveItem'
import { MotivesList } from './MotivesList'
import { useMotiveSelection } from './useMotiveSelection'
import UserMotiveDroppableWrapper from './UserMotiveDroppableWrapper'

export default function MotivesEntry() {
  const {
    onDragStart,
    onDragEnd,
    motives,
    questionnaireUrl,
    handleMotiveClick,
  } = useMotiveSelection()

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <HeadlineUnderline>
        <h1>Schritt 1: Bedürfnisse</h1>
      </HeadlineUnderline>
      <SmallH2>
        Wählen Sie bitte intuitiv die drei Bedürfnisse aus, die für Sie am
        Wichtigsten sind. Sie können die Bedürfnisse hin- und herziehen oder
        anklicken.
      </SmallH2>
      <MotiveBG>
        {['slot1', 'slot2', 'slot3'].map((slot) => (
          <UserMotiveDroppableWrapper
            droppableId={slot}
            motives={motives}
            handleMotiveClick={handleMotiveClick}
            key={slot}
          />
        ))}
      </MotiveBG>
      <Droppable droppableId="list">
        {(provided, snapshot) => (
          <MotivesList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {motives.list?.map((motive, index) => (
              <MotiveItem
                droppableId="list"
                onClick={handleMotiveClick}
                key={'list' + motive}
                index={index}
                isDragDisabled={motives.slot1 && motives.slot2 && motives.slot3}
                motiveIndex={motive - 1}
              >
                {motiveData[motive - 1].name}
              </MotiveItem>
            ))}
            <HideElement>{provided.placeholder}</HideElement>
          </MotivesList>
        )}
      </Droppable>
      <FloatingButtonContainer to={questionnaireUrl}>
        <Button
          isButtonDisabled={
            !(
              motives.slot1.length === 1 &&
              motives.slot2.length === 1 &&
              motives.slot3.length === 1
            )
          }
          btnType="primary"
        >
          Fragebogen starten
        </Button>
      </FloatingButtonContainer>
    </DragDropContext>
  )
}

const SmallH2 = styled.h2`
  font-size: 1em;
  margin-top: 0;
`

const MotiveBG = styled.section`
  display: grid;
  grid-template-rows: repeat(2, 60px);
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    '. . one one one one . .'
    ' two two two two three three three three';
  gap: 15px;
  background: var(--secondary);
  min-height: 80px;
  margin: 0 -15px;
  padding: 30px 15px;

  > div {
    width: 100% !important;
  }

  > :nth-child(1) {
    grid-area: one;
  }

  > :nth-child(2) {
    grid-area: two;
  }

  > :nth-child(3) {
    grid-area: three;
  }
`
