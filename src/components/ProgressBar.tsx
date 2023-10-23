import { useState, useEffect } from 'react';

interface ProgressBarProps{
    targetPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps>= ({ targetPercentage }) => {
    const [currentPercentage, setCurrentPercentage] = useState<number>(0);

  useEffect(() => {
    const updateProgressBar = () => {
      if (currentPercentage < targetPercentage) {
        setCurrentPercentage((prevPercentage) => prevPercentage + 1);
      }
    };

    if (currentPercentage < targetPercentage) {
      const intervalId = setInterval(updateProgressBar, 20);
      return () => clearInterval(intervalId);
    }
  }, [currentPercentage, targetPercentage]);

  return (
    <div className="bg-[#C0B5AB] h-2.5 w-full rounded-full mt-6">
      <div
        className="bg-[#544541] h-full rounded-full"
        style={{ width: `${currentPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;