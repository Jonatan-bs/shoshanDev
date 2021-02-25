export default {
 stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  fadeUp:{
      initial: {
        y: 30,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          type: "spring"
        }
      }
  },
  fadeDown:{
      initial: {
        y: -30,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          type: "spring"
        }
      }
  },
  fadeRight:{
      initial: {
        x: -100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
          type: "spring"
        }
      }
  },
  fade:{
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring"
      }
    }
},
}