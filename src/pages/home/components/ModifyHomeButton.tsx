import { useDispatch } from 'react-redux';
import { modifyUser } from '@/redux/slices/user.slice';

export default function ModifyHomeButton() {
  const dispatch = useDispatch();

  const dispatchAction = () => {
    dispatch(modifyUser({ name: 'Luis Suarez', id: 2 }));
  };

  return <button onClick={dispatchAction}>Dispatch modify action</button>;
}
