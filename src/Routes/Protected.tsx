import { Navigate } from 'react-router-dom';
import { useLogin } from '../core/Context/LoginContext';
import { ReactNode } from 'react';

interface ProtectedProps {
  children?: ReactNode;
}

export default function Protected({ children }: ProtectedProps) {
  const { isSignedIn } = useLogin();

  if (!isSignedIn) {
    return <Navigate to="/login" replace />
  }

  return children;
}