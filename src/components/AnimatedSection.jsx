import React from "react";
import Lottie from "lottie-react";


export default function AnimatedSection({animationData}) {
  return (
    <div className="w-auto max-w-md mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
