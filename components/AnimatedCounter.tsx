'use client';

import React from 'react';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  amount: number;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  amount,
  prefix = '$',
  duration = 1.5,
  decimals = 2,
  className = 'w-full',
}) => {
  return (
    <div className={className}>
     
        <CountUp
            end={amount}
            duration={duration}
            prefix={prefix}
            decimals={decimals}
            decimal=','
            separator=","
        />
    </div>
  );
};

export default AnimatedCounter;
