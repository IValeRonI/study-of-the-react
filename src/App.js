import './App.css';
import Bar from './components/Bar';
import Profile from './components/Profile';
import Header from './components/Header';

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
