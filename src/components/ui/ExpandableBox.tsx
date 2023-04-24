import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ExpandableBox = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mx-auto flex h-auto w-[60%] flex-col space-y-14 bg-gradient-to-r from-primary to-secondary px-8 py-4 shadow-md shadow-secondary ">
      <div className=" flex items-center justify-between">
        <div className="text-3xl ">{question}</div>
        <motion.div
          className="cursor-pointer text-2xl"
          onClick={() => {
            setExpanded(!expanded);
          }}
          whileHover={{
            scale: 1.5,
            rotateZ: 180,
            transition: { duration: 0.5 },
          }}
        >
          {!expanded ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </motion.div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 100,
              transition: { duration: 1 },
            }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.5 } }}
            className="text-lg "
          >
            <div>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableBox;
