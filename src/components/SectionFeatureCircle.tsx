import React from "react";

const FeatureCircle: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-backgroundColor py-72 relative">
      {/* Center Image */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-20">
        <img
          src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_01_home_04-600x540.png" // Replace with the correct path
          alt="Center Content"
          className="h-96 bg-none"
          height={6}
        />
      </div>

      {/* Features in Circular Layout */}
      <div className="relative w-[800px] h-[800px] mt-[-220px]">
        {/* Feature 1 - Top */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-green-300"
          style={{ top: "10px", left: "310px" }}
        >
          <div className="text-4xl">🫙</div>
          <p className="mt-4 text-base font-semibold text-white">
            Cold pressed & always fresh
          </p>
        </div>

        {/* Feature 2 - Top Right */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-yellow-300"
          style={{ top: "160px", left: "620px" }}
        >
          <div className="text-4xl">🥗</div>
          <p className="mt-4 text-base font-semibold text-white">
            Fresh in the fridge for 10 days
          </p>
        </div>

        {/* Feature 3 - Bottom Right */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-orange-300"
          style={{ top: "550px", left: "640px" }}
        >
          <div className="text-4xl">🍎</div>
          <p className="mt-4 text-base font-semibold text-white">
            100% organic ingredients
          </p>
        </div>

        {/* Feature 4 - Bottom */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-orange-400"
          style={{ top: "780px", left: "310px" }}
        >
          <div className="text-4xl">♻️</div>
          <p className="mt-4 text-base font-semibold text-white">
            100% recyclable packaging
          </p>
        </div>

        {/* Feature 5 - Bottom Left */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-yellow-400"
          style={{ top: "550px", left: "0px" }}
        >
          <div className="text-4xl">🍴</div>
          <p className="mt-4 text-base font-semibold text-white">
            No spices, salt or sugar
          </p>
        </div>

        {/* Feature 6 - Top Left */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-green-400"
          style={{ top: "160px", left: "0px" }}
        >
          <div className="text-4xl">📍</div>
          <p className="mt-4 text-base font-semibold text-white">
            Small local producer
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCircle;