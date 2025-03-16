export function removeIndexHtmlFromUrl() {
  if (window.location.pathname.endsWith("index.html"))
    history.replaceState(
      null,
      "",
      window.location.pathname.replace("index.html", "")
    );
}
