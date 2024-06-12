import { motion } from 'framer-motion';
import { useState } from 'react';

interface BarProps {
  value: number;
  maxHeight: number;
  backgroundColor?: string;
  borderRadius?: string;
  duration?: number;
  description: string;
  callback?: (arg0: number, arg1: string) => void
}

export const Bar: React.FC<BarProps> = ({
  value,
  maxHeight,
  backgroundColor = '#7134db',
  borderRadius = '3px',
  duration = 1.5,
  description,
  callback
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const scaledHeight = (value / maxHeight) * 100;


  const handleClick = () => {
    if (callback) {
      callback(value, description);
    }
  };
  return (
    <div
      className='gap-2'
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleClick}

      style={{ position: 'relative' }}

    >
      {showTooltip && (
        <div className="absolute bottom-full bg-black bg-opacity-75 text-white p-2 rounded whitespace-nowrap z-10">
          {description}
        </div>
      )}
      <motion.div
        initial={{ width: 55 }}
        animate={{ height: scaledHeight }}
        transition={{ duration }}
        style={{
          height: '0px',
          backgroundColor,
          borderRadius,
        }}
      />
    </div>
  );
};
