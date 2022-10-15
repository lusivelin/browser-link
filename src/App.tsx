import { useState } from 'react'
import {
  globalCss
} from '@stitches/core';
import Card from './elements/Card'
import DashboardLayout from './components/DashboardLayout';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
});

function App() {
  globalStyles()

  return (
    <DashboardLayout></DashboardLayout>
  )
}

export default App
