import React from "react";

interface LoadingSpinCircleProps {
  size?: number;
}
const LoadingSpinCircle: React.FC<LoadingSpinCircleProps> = ({ size = 56 }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div
        style={{
          width: size,
          height: size,
        }}
        className=" animate-spin rounded-full border-t-2 border-white
      "
      ></div>
    </div>
  );
};
export default LoadingSpinCircle;
