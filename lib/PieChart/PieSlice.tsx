// import React from 'react';
// import { motion } from 'framer-motion';

// interface PieSliceProps {
//   color: string;
//   percentage: number;
//   angle: number;
//   rotation: number;
// }

// export const PieSlice: React.FC<PieSliceProps> = ({ color, percentage, angle, rotation }) => {
//   const sliceVariants = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   return (
//     <motion.div
//       className="pie-slice"
//       style={{
//         backgroundColor: color,
//         rotate: rotation + 'deg',
//       }}
//       variants={sliceVariants}
//       initial="hidden"
//       animate="visible"
//       transition={{ duration: 0.5 }}
//     />
//   );
// };
