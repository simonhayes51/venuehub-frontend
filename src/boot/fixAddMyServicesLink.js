(function () {
  function isAddMyServicesEl(el) {
    if (!el) return false;
    const text = (el.textContent || "").trim().toLowerCase();
    return text === "add my services" || text.includes("add my services");
  }

  function retargetExisting() {
    // Fix anchors that already exist
    document.querySelectorAll("a").forEach(a => {
      if (isAddMyServicesEl(a)) {
        a.setAttribute("href", "/submit");
      }
    });
    // Fix buttons
    document.querySelectorAll("button").forEach(btn => {
      if (isAddMyServicesEl(btn)) {
        btn.setAttribute("data-add-services", "1");
      }
    });
  }

  // Delegate clicks anywhere in the document
  document.addEventListener("click", (e) => {
    const path = e.composedPath ? e.composedPath() : [e.target];
    for (const el of path) {
      if (!(el instanceof HTMLElement)) continue;
      if (isAddMyServicesEl(el) || el.getAttribute?.("data-add-services") === "1") {
        e.preventDefault();
        window.location.href = "/submit";
        return;
      }
      // Anchor with text match
      if (el.tagName === "A" && isAddMyServicesEl(el)) {
        el.setAttribute("href", "/submit");
        // allow default after fixing href
        return;
      }
    }
  }, true);

  // Run once on load and whenever DOM mutates
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", retargetExisting);
  } else {
    retargetExisting();
  }
  const obs = new MutationObserver(retargetExisting);
  obs.observe(document.documentElement, { subtree: true, childList: true });
})();
