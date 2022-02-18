import { useState } from 'react'
// Parts
import Header from './components/Header'
import Content from './components/Content'
import { Provider as StoreProvider } from './store';

function App() {

  return (
    <StoreProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </StoreProvider>
  )
}

export default App;