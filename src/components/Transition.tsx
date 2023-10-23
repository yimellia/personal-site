import {motion} from 'framer-motion';

const Transition: React.FC<{ Component: React.FC, effect:string }> = ({ Component, effect }) => {
    let variants = {};
  
    switch (effect) {
      case 'slide-in':
        variants = {
            initial: {
                opacity: 0, y: 100
            },
            animate: {
                opacity: 1, y: 0
            },
            exit: {
                opacity: 0, y: -100
            },
            transition: {
                duration: 3 
            }
        };
        break;
      case 'slide-out':
        break;
      case 'slide-left':
        break;
      case 'slide-right':
        break;
      default:
        break;
    }
  
    return (
      <motion.div
        key={window.location.pathname}
        className={effect}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Component />
      </motion.div>
    );
  };
  
  export default Transition;