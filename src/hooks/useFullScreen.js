import { useRef } from "react";

const useFullScreen = () => {
  const mediaRefs = useRef([]);

  const handleFullScreen = (index) => {
    if (mediaRefs.current[index]) {
      const mediaElement = mediaRefs.current[index];
      if (document.fullscreenElement) {
        // Exit fullscreen if already in fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen(); // Safari
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen(); // IE11
        }
      } else {
        // Enter fullscreen mode
        if (mediaElement.requestFullscreen) {
          mediaElement.requestFullscreen();
        } else if (mediaElement.webkitRequestFullscreen) {
          mediaElement.webkitRequestFullscreen(); // Safari
        } else if (mediaElement.msRequestFullscreen) {
          mediaElement.msRequestFullscreen(); // IE11
        }
      }
    }
  };

  return { mediaRefs, handleFullScreen };
};

export default useFullScreen;
