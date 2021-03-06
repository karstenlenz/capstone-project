import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import JournalForm from './JournalForm'

export default {
  title: 'Journal/JournalForm',
  component: JournalForm,
}

export const JournalFormExample = (args) => (
  <BrowserRouter>
    <JournalForm {...args}></JournalForm>
  </BrowserRouter>
)
