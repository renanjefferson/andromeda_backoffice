import { Routes as Switch, Route } from 'react-router-dom';
import { Login } from '@/pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
    </Switch>
  );
}
