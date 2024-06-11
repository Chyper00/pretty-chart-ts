import { motion } from 'framer-motion';

interface BarProps {
  value: number;
  maxHeight: number;
  backgroundColor?: string;
  borderRadius?: string;
  duration?: number;
}

export const Bar: React.FC<BarProps> = ({
  value,
  maxHeight,
  backgroundColor = '#55db34',
  borderRadius = '3px',
  duration = 1.5
}) => {
  const scaledHeight = (value / maxHeight) * 100;

  return (
    <div className='gap-2'>
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
