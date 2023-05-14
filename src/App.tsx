import { useSelector } from 'react-redux';
import './App.css';
import { Home } from './pages';
import { AppStore } from './redux/store';

function App() {
  const user = useSelector((state: AppStore) => state.user);

  return (
    <>
      {JSON.stringify(user)}
      <Home />
    </>
  );
}

export default App;
