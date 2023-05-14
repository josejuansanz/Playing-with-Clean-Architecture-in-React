import { useDispatch } from 'react-redux';
import { createUser } from '@/redux/slices/user.slice';
import { fetchMorty } from '../services';
import { useEffect, useState } from 'react';
import { UserEmptyState } from '@/models';

export default function CreateHomeButton() {
  const dispatch = useDispatch();
  const [morty, setMorty] = useState(UserEmptyState);

  const getMorty = async () => {
    const mortyResponse = await fetchMorty();
    setMorty(mortyResponse);
  }

  useEffect(() => {
    getMorty();
  }, []);

  const dispatchAction = () => {
    dispatch(createUser(morty));
  };

  return <button onClick={dispatchAction}>Dispatch create action</button>;
}
