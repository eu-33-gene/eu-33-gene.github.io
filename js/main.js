(function () {
  const root = document.documentElement;
  const grid = document.getElementById("app-grid");

  function hostOf(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch (e) {
      return url;
    }
  }

  function createCard(app) {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.className = "app-card";
    a.href = app.url;
    a.target = "_blank";
    a.rel = "noopener";

    // 画像があればサムネイル、なければ頭文字アイコンを表示
    let visual;
    if (app.image) {
      visual = document.createElement("span");
      visual.className = "app-thumb";
      const img = document.createElement("img");
      img.src = app.image;
      img.alt = "";
      img.width = 1200;
      img.height = 630;
      img.loading = "lazy";
      img.decoding = "async";
      visual.append(img);
    } else {
      visual = document.createElement("span");
      visual.className = "app-icon";
      visual.textContent = app.name.charAt(0).toUpperCase();
      if (app.color) visual.style.setProperty("--icon-bg", app.color);
    }
    visual.setAttribute("aria-hidden", "true");

    const body = document.createElement("span");
    body.className = "app-body";

    const name = document.createElement("span");
    name.className = "app-name";
    name.textContent = app.name;

    const desc = document.createElement("span");
    desc.className = "app-desc";
    desc.textContent = app.description;

    const link = document.createElement("span");
    link.className = "app-link";
    link.textContent = hostOf(app.url);

    body.append(name, desc, link);
    if (app.image) a.classList.add("has-thumb");
    a.append(visual, body);
    li.append(a);
    return li;
  }

  grid.append(...APPS.map(createCard));

  document.getElementById("year").textContent = new Date().getFullYear();

  // ライト／ダークモード切替
  document.querySelector(".theme-toggle").addEventListener("click", function () {
    const current =
      root.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
})();
