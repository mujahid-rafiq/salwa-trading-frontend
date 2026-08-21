const backendOrigin =
  import.meta.env.VITE_REACT_APP_BASE_API_URL ||
  import.meta.env.VITE_REACT_APP_LIVE_SERVER_URL ||
  "http://localhost:3000";

export const getAssetUrl = (url?: string) => {
  if (!url) return "";

  try {
    return new URL(url, backendOrigin).toString();
  } catch {
    return url;
  }
};