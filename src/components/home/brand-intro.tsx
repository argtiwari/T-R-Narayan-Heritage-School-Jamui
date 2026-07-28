"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BotanicalLoader } from "./botanical-loader";

interface BrandIntroProps {
  onFinish: () => void;
}

export default function BrandIntro({
  onFinish,
}: BrandIntroProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        if (typeof onFinish === "function") {
          onFinish();
        }
      }, 600);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8F5EF]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
            >
              <Image
                src="/images/branding/trnhs-logo-horizontal.png"
                alt="TR Narayan Heritage School"
                width={340}
                height={90}
                priority
              />
            </motion.div>

            <motion.h2
              className="mt-8 text-3xl font-semibold tracking-[0.25em] text-[#2B1F18]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
            >
              TR NARAYAN
            </motion.h2>

            <motion.p
              className="mt-2 uppercase tracking-[0.4em] text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
            >
              Heritage School
            </motion.p>

            <div className="mt-10">
              <BotanicalLoader />
            </div>

            <motion.p
              className="mt-8 text-sm tracking-[0.25em] text-[#7a755d]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .8 }}
            >
              Nurturing Every Beginning
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}