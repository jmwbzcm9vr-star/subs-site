(function () {
  var langs = ["en", "es", "ca"];

  function apply(lang) {
    if (langs.indexOf(lang) === -1) lang = "en";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang-block]").forEach(function (el) {
      el.hidden = el.getAttribute("data-lang-block") !== lang;
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem("subs-lang", lang); } catch (e) {}
  }

  var stored = null;
  try { stored = localStorage.getItem("subs-lang"); } catch (e) {}
  var nav = (navigator.language || "en").toLowerCase().slice(0, 2);
  apply(langs.indexOf(stored) !== -1 ? stored : langs.indexOf(nav) !== -1 ? nav : "en");

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-set-lang"));
    });
  });
})();
