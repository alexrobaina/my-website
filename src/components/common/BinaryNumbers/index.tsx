import { useState, useEffect, FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './styles.module.css'

interface BinaryNumberProps {
  number: string
  isActive: boolean
}

const BinaryNumber: FC<BinaryNumberProps> = ({ number, isActive }) => {
  return (
    <motion.div
      style={{
        color: isActive ? 'green' : 'white',
      }}
      initial={{ opacity: 0, y: 20 }}
      className={styles.binaryNumber}
      transition={{ duration: 0.5, delay: 1 }}
      animate={{ opacity: isActive ? 1 : 0.5, y: 0 }}
    >
      {number}
    </motion.div>
  )
}

interface BinarySequenceProps {
  quantityNumbers: number
  animationTime: number
}

export const BinarySequence: FC<BinarySequenceProps> = ({
  quantityNumbers,
  animationTime,
}) => {
  const [sequence, setSequence] = useState(() =>
    generateRandomBinarySequence(0),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setSequence(generateRandomBinarySequence(quantityNumbers))
    }, animationTime)

    return () => clearInterval(interval)
  }, [quantityNumbers, animationTime])

  return (
    <div className={styles.binarySequence}>
      <AnimatePresence>
        {sequence.map((num, index) => (
          <BinaryNumber key={index} number={num} isActive={index % 2 === 0} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function generateRandomBinarySequence(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 2).toString())
}
