(function () {
  var S = window.SITE, $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  var ext = ' target="_blank" rel="noreferrer"';
  document.title = S.name + " | Developer collective";
  document.querySelectorAll("[data-name]").forEach(function (e) { e.textContent = S.name; });
  document.querySelectorAll("[data-desc]").forEach(function (e) { e.textContent = S.description; });
  document.querySelectorAll("[data-gh]").forEach(function (e) { e.href = S.github; });
  $("year").textContent = new Date().getFullYear();
  var dots = { Active: "#34d399", Completed: "#5b8cff", Experimental: "#fbbf24" };
  function art(seed) {
    var r = '<svg viewBox="0 0 360 120" aria-hidden="true"><rect width="360" height="120" fill="#0a0c0f"/>';
    for (var i = 0; i < 18; i++) { var h = 14 + ((i * seed * 37) % 61);
      r += '<rect x="' + (10 + i * 19) + '" y="' + (110 - h) + '" width="9" height="' + h + '" rx="2" fill="' + (i % 5 === 0 ? "#3dd6f5" : "#5b8cff") + '" opacity="' + (0.25 + h / 75 * 0.6).toFixed(2) + '"/>'; }
    return r + "</svg>";
  }
  $("cards").innerHTML = S.projects.map(function (p) {
    return '<article class="card">' + art(p.seed) + '<div class="cbody"><div class="top"><h3 class="mono">' + esc(p.name) + '</h3><span class="status"><b style="background:' + dots[p.status] + '"></b>' + p.status + '</span></div><p>' + esc(p.description) +
      '</p><ul class="chips">' + p.stack.map(function (t) { return '<li class="chip">' + esc(t) + "</li>"; }).join("") + '</ul><div class="links2"><a href="' + p.repo + '"' + ext + ' aria-label="Repository for ' + esc(p.name) + '">Repository</a>' +
      (p.demo ? '<a href="' + p.demo + '"' + ext + ' aria-label="Live demo of ' + esc(p.name) + '">Live demo</a>' : "") + "</div></div></article>";
  }).join("");
  document.querySelectorAll(".card").forEach(function (c) {
    c.addEventListener("mousemove", function (e) { var r = c.getBoundingClientRect(); c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px"); });
  });
  $("tech-list").innerHTML = S.tech.map(function (c) {
    return '<div class="cell"><h3><i aria-hidden="true">&#9656;</i>' + esc(c.title) + '</h3><ul class="chips">' + c.items.map(function (t) { return '<li class="chip">' + esc(t) + "</li>"; }).join("") + "</ul></div>";
  }).join("");
  $("team-list").innerHTML = S.team.map(function (m) {
    var ini = m.name.split(" ").map(function (w) { return w[0]; }).slice(0, 2).join("");
    return '<li class="person"><div class="avatar" aria-hidden="true">' + esc(ini) + "</div><h3>" + esc(m.name) + '</h3><p class="role">' + esc(m.role) + "</p><p>" + esc(m.bio) + '</p><a href="' + m.github + '"' + ext + ' aria-label="GitHub profile of ' + esc(m.name) + '">GitHub</a></li>';
  }).join("");
  $("contact-list").innerHTML = '<a class="btn ghost" href="mailto:' + S.email + '">' + esc(S.email) + "</a>" +
    S.social.map(function (s) { return '<a class="btn ghost" href="' + s.href + '"' + ext + ">" + esc(s.label) + "</a>"; }).join("");
  var m = $("mobile"), b = $("menu");
  b.addEventListener("click", function () { var o = m.classList.toggle("open"); b.setAttribute("aria-expanded", o); b.setAttribute("aria-label", o ? "Close menu" : "Open menu"); });
  m.addEventListener("click", function (e) { if (e.target.tagName === "A") { m.classList.remove("open"); b.setAttribute("aria-expanded", "false"); } });
})();
