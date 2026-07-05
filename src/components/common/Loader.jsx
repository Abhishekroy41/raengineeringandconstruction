import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-paper)]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Loader2 size={48} className="animate-spin text-[var(--color-gold-500)]" />
      </motion.div>
    </motion.div>
  );
}
