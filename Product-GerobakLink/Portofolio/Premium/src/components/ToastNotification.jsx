import { CheckCircle2 } from 'lucide-react';
import './ToastNotification.css';

const ToastNotification = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="toast-notification">
      <CheckCircle2 size={18} className="toast-icon" />
      <span>{message}</span>
    </div>
  );
};

export default ToastNotification;
