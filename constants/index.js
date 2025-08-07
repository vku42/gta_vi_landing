import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "50% 50%",
      initialMaskSize: "50000% 50000%",
      maskPos: "50% 50%",
      maskSize: "50% 50%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "50% 50%",
      initialMaskSize: "15000% 15000%",
      maskPos: "50% 50%",
      maskSize: "30% 30%",
    };
  }

  return {
    initialMaskPos: "50% 50%",
    initialMaskSize: "15000% 15000%",
    maskPos: "50% 50%",
    maskSize: "23% 23%",
  };
};
