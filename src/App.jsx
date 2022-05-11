import { useState } from 'react'
import styled from 'styled-components'

import TabSection from './Components/TabSection'
import AddTask from './Components/AddTask'
import Tasks from './Components/Tasks'
import Task from './Components/Task'

const H1 = styled.h1`
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  font-size: 36px;
  line-height: 42.26px;
  leter-spacing: -0.045em;
  color: #333333;
  display: flex;
  text-align: center;
  justify-content: center;
`

function App(props) {

  const [tab, setTab] = useState('all');
  const [currentTask, setCurrentTast] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <header className='header'>
        <H1>#todo</H1>
      </header>
      <main className="main">
        <TabSection />
        <AddTask />
        <Tasks>
          <Task task={'brush teeth'} tab="completed"/>
          <Task task={'brush teeth'} tab="completed"/>
          <Task task={'bathing'} tab="completed"/>
        </Tasks>
      </main>
    </div>
  )
}

export default App
