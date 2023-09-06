import { registerLicense } from '@syncfusion/ej2-base'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhAYVJ0WmFZfV1gcF9HaVZTTGY/P1ZhSXxQdkxjXH5YcX1XTmFUVkY='
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
