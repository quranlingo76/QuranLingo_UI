import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  borderHoverColor: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  iconColor,
  iconBgColor,
  borderHoverColor,
  title,
  description,
}) => {
  return (
    <div className={`group bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-${borderHoverColor} transition-all shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300`}>
      <div className={`w-16 h-16 bg-${iconBgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-8 h-8 text-${iconColor}`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;

