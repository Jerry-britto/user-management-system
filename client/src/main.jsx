import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import ShowGroup from './components/ShowGroup.jsx'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/showgroups' element={<ShowGroup/>}/>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
)
