import './App.css';
import Bar from './components/Bar/Bar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Bar />
      <Profile />
    </div>
  );
}

export default App;
