import { Routes as Switch, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { Login } from '@/pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Switch>
  );
}
