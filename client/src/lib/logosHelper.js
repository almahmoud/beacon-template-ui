export function logosHelper(path) {
  // If it already looks like a URL, return as-is
  if (
    typeof path === "string" &&
    (path.startsWith("http://") || path.startsWith("https://"))
  ) {
    return path;
  }

  // Otherwise assume it's a public local asset
  if (
    typeof path === "string" &&
    path.startsWith("/") &&
    !path.startsWith("//")
  ) {
    return `${process.env.PUBLIC_URL}${path}`;
  }
  return path;
}
