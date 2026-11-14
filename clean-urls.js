"use strict";

// Keep old bookmarks working while showing the extension-free page URL.
if (window.location.pathname.endsWith(".html")) {
  const path = window.location.pathname.replace(/(?:index)?\.html$/, "");
  window.location.replace(path + window.location.search + window.location.hash);
}
