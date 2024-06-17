import { motion } from 'framer-motion';
import { useState } from 'react';
import { BarProps } from './Bar.interface';

export const Bar: React.FC<BarProps> = ({
  value,
  maxHeight,
  duration = 1.5,
  description,
  callback,
  children,
  childrenPosition = 'outside',
  width = 55,
  style = 'bg-purple-800 rounded-sm',
  ...rest
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const scaledHeight = (value / maxHeight) * 100;

  const handleClick = () => {
    if (callback) {
      callback({ value, description, children, childrenPosition, ...rest });
    }
  };

  return (
    <div
      className={`relative gap-2 ${callback && 'cursor-pointer'}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleClick}
    >
      {showTooltip && description && (
        <div className="absolute bottom-full bg-black bg-opacity-75 text-white p-2 rounded whitespace-nowrap z-10">
          {description}
        </div>
      )}
      {childrenPosition === 'outside' && (
        <div className="flex w-full p-1 justify-center align-middle items-center">
          {children}
        </div>
      )}
      <motion.div
        initial={{ width: width }}
        animate={{ height: scaledHeight }}
        transition={{ duration }}
        className={style}
      >
        {childrenPosition === 'inside' && (
          <div className="flex w-full p-1 justify-center align-middle items-center">
            {children}
          </div>
        )}
      </motion.div>
    </div>
  );
};
