import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface StatCardProps {
  icon: LucideIcon;
  iconColor: string;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, iconColor, value, label }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-center">
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-gray-800">{value}</p>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

export default StatCard;

