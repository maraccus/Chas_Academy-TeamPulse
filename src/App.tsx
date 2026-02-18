import { useState } from 'react'
import { Navigation } from './components/Navigation';
import './App.css'

import AppContainer from "./components/AppContainer"
import CheckInForm from "./components/CheckInForm"

type View = 'checkin' | 'dashboard' | 'history';

function App() {
const [activeView, setActiveView] = useState<View>('checkin');
  return (

    <AppContainer>
      <Navigation activeView={activeView} onChange={setActiveView} />
       <main>
        {activeView === 'checkin' && <CheckInForm />}
      </main>
    </AppContainer>
  )
}

export default App
