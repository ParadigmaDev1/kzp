export const getBrowser = () => {
  const userAgent = navigator.userAgent;
  const userAgentData = navigator.userAgentData;
  if (userAgentData || userAgent) {
    if (
      userAgentData &&
      userAgentData.brands.find((brand) => brand.brand === "YaBrowser")
    )
      return "Yandex";
    if (/Firefox/i.test(userAgent)) {
      return "Firefox";
    } else if (/Chrome/i.test(userAgent) && !/Edg/i.test(userAgent)) {
      return "Chrome";
    } else if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) {
      return "Safari";
    } else if (/Edg/i.test(userAgent)) {
      return "Edge";
    } else if (/Opera|OPR/i.test(userAgent)) {
      return "Opera";
    } else if (/Trident/i.test(userAgent)) {
      return "Internet Explorer";
    } else {
      return "Unknown Browser";
    }
  }
};
