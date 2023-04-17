import React from "react";
import HeroLanding from "~/components/HeroLanding";

interface indexProps {}
const Home: React.FC<indexProps> = () => {
  return (
    <div className=" h-auto w-full bg-primary">
      {/* hero */}
      <HeroLanding />
      <div className="h-screen w-full">123</div>
    </div>
  );
};
export default Home;
