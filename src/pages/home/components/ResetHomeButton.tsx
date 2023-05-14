import { useDispatch } from 'react-redux';
import { resetUser } from '@/redux/slices/user.slice';

export default function ResetHomeButton() {
  const dispatch = useDispatch();

  const dispatchAction = () => {
    dispatch(resetUser());
  };

  return <button onClick={dispatchAction}>Dispatch reset action</button>;
}
