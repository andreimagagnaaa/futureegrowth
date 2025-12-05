import { BarChart3, Layers, Zap, Users, Cpu, Layout, Box, Eye, GraduationCap } from 'lucide-react';

export const getIcon = (iconName: string | null) => {
  switch (iconName) {
    case 'BarChart3': return BarChart3;
    case 'Layers': return Layers;
    case 'Zap': return Zap;
    case 'Users': return Users;
    case 'Cpu': return Cpu;
    case 'Layout': return Layout;
    case 'Eye': return Eye;
    case 'GraduationCap': return GraduationCap;
    default: return Box;
  }
};
