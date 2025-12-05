import { AlertTriangle, Clock, Calendar } from 'lucide-react';

export const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  
  // Handle ISO string if present (remove time part)
  const cleanDate = dateStr.split('T')[0];
  const [year, month, day] = cleanDate.split('-');
  
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const monthName = months[parseInt(month) - 1];
  
  const currentYear = new Date().getFullYear().toString();
  
  if (year === currentYear) {
    return `${day} ${monthName}`;
  }
  return `${day} ${monthName} ${year}`;
};

export const getDueDateStatus = (dateStr?: string, status?: string) => {
  if (!dateStr || status === 'done') return null;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Handle ISO string if present
  const cleanDate = dateStr.split('T')[0];
  const [year, month, day] = cleanDate.split('-').map(Number);
  const dueDate = new Date(year, month - 1, day);
  
  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return { color: 'text-red-400', label: 'Atrasado', icon: AlertTriangle };
  if (diffDays === 0) return { color: 'text-orange-400', label: 'Hoje', icon: Clock };
  if (diffDays === 1) return { color: 'text-yellow-400', label: 'Amanhã', icon: Clock };
  if (diffDays <= 2) return { color: 'text-yellow-400', label: 'Em breve', icon: Clock };
  
  return null;
};
