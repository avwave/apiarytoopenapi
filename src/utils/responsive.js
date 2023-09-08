import { useMediaQuery } from "usehooks-ts";

const useDesktopLayout = () => {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  return isDesktop;
}

const useMobileLayout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile;
}

export { useDesktopLayout, useMobileLayout };