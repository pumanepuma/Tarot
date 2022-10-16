import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import Weekly from './pages/Weekly';
import CardPage from './pages/CardPage';
import AuthPage from './pages/AuthPage';
import UserStore from './store/UserStore';
import { observer } from 'mobx-react-lite';
import AlignmentsPage from './pages/AlignmentsPage';
import AlignmentPage from './pages/AlignmentPage';
import Layout from './components/Layout';

const App = observer(() => {
  return (
    <div className="App">
      <Layout>
      {
        UserStore.isAuth ?
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/week' element={<Weekly />} />
            <Route path='/my' element={<AlignmentsPage/>}/>
            <Route path='/my/:id' element={<AlignmentPage/>}/>
            <Route path='/cards/:id' element={<CardPage />} />
            <Route path='*' element={<Main />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/week' element={<Weekly />} />
            <Route path='/cards/:id' element={<CardPage />} />
            <Route path='*' element={<Main />} />
          </Routes>
      }
      </Layout>
    </div>
  );
})

export default App;
