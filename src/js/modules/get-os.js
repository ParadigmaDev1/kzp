export const getOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("ipod")
  )
    return "iOS";
  if (userAgent.includes("android")) return "Android";
  if (userAgent.includes("win")) return "Windows";
  if (userAgent.includes("mac")) return "MacOS";
  if (userAgent.includes("x11") || userAgent.includes("linux")) return "Linux";

  return "Unknown OS";
};
