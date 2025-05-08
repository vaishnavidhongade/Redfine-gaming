// import React, { useRef, useState } from "react";

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [VideoLoaded, setVideoLoaded] = useState(0);

//   const handleVdoLoaded = () => {
//     setVideoLoaded((prev) => prev + 1);
//   };

//   const totalVideos = 3;

//   const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

//   const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

//   const handleMiniVdClick = () => {
//     setCurrentIndex(upcomingVideoIndex);
//   };

//   return (
//     <div className="relative h-dvh w-screen overflow-x-hidden">
//       <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
//         <div>
//           {/* Front video */}
//           <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
//             <div
//               onClick={handleMiniVdClick}
//               className="origin-center scale-150 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
//             >
//               <video
//                 src={getVideoSrc(upcomingVideoIndex)}
//                 loop
//                 muted
//                 id="current-video"
//                 className="size-64 origin-center scale-150 object-cover object-center"
//                 onLoadedData={handleVdoLoaded}
//                 autoPlay
//               />
//             </div>
//           </div>

//           {/* Background video */}
//           <video
//             src={getVideoSrc(currentIndex)}
//             autoPlay
//             loop
//             muted
//             className="absolute left-0 top-0 size-full object-cover object-center"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useRef, useState } from "react";
import { TiLocation, TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [VideoLoaded, setVideoLoaded] = useState(0);

  const handleVdoLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const totalVideos = 3;
  const nextVdoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden ">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-150 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVdoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVdoLoaded}
              />
            </div>
          </div>
          <video
            ref={nextVdoRef}
            src="getVideoSrc(currentIndex)}"
            className="absolute-center absolute invisible z-20 size-64 object-cover object-center"
            loop
            muted
            id="next-video"
            onLoadedData={handleVdoLoaded}
          />
          <video
            src={getVideoSrc(currentIndex === totalVideos ? 1 : currentIndex)}
            // autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVdoLoaded}
          />
        </div>

        <h1 className="spacial-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z40 size-full">
          <div className="m-24 px-5 sm:px-10">
            <h1 className="spacial-font hero-heading text-blue-100">
              redfi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100 ">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="! bg-yellow-100 flex-center gap-1 "
            />
          </div>
        </div>
      </div>
      <h1 className="spacial-font hero-heading absolute bottom-5 right-5 z-40 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
