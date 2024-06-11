import { motion } from 'framer-motion';

export const Bar = ({ value, maxHeight }: any) => {
  const scaledHeight = (value / maxHeight) * 100;
  return (
    <div className='gap-2'>
      <motion.div
        initial={{ width: 55 }}
        animate={{ height: scaledHeight }}  // Altura final da barra
        transition={{ duration: 1.5 }}  // Duração da animação
        style={{
          height: '0px',
          backgroundColor: '#3498db',
          borderRadius: '3px',
        }}
      />
    </div>
  );
};

