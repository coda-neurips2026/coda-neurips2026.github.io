// ===================== Mobile nav toggle =====================
(function () {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();

// ===================== Header shadow on scroll =====================
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = function () {
    header.classList.toggle("scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// ===================== Reveal on scroll =====================
(function () {
  const targets = document.querySelectorAll(
    ".section-head, .loop-card, .topic-card, .tl-item, .speaker-card, .sched-row, .submit-card, .org-card, .callout, .debate-banner"
  );
  targets.forEach(function (el, i) {
    el.setAttribute("data-reveal", "");
    el.style.transitionDelay = (i % 6) * 40 + "ms";
  });
  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach(function (el) { io.observe(el); });
})();

// ===================== Program Committee data =====================
(function () {
  const container = document.getElementById("pcList");
  if (!container) return;

  const members = [
    ["Ahmed Imteaj", "Southern Illinois University", "Meta-Reviewer"],
    ["Young Jin Kim", "Microsoft", "Meta-Reviewer"],
    ["Yue Dong", "UC Riverside", "Meta-Reviewer"],
    ["Sayeh Sharify", "d-Matrix Corp", "Meta-Reviewer"],
    ["Soheila Samiee", "BASF Canada Inc.", "Meta-Reviewer"],
    ["Peyman Passban", "Sanofi", "Meta-Reviewer"],
    ["Walid Ahmed", "Huawei Canada", "Meta-Reviewer"],
    ["Jahangir Alam", "CRIM", "Meta-Reviewer"],
    ["Saleh Ashkboos", "ETH Zurich", "Meta-Reviewer"],
    ["Xin Wang", "d-Matrix Corporation", "Meta-Reviewer"],
    ["Alessio Brutti", "Fondazione Bruno Kessler", "Meta-Reviewer"],
    ["Parijat Dube", "IBM", "Meta-Reviewer"],
    ["Yuhui Xu", "Salesforce", "Meta-Reviewer"],
    ["Abbas Ghaddar", "Huawei Technologies Canada", "Meta-Reviewer"],
    ["Hamidreza Mahyar", "McMaster University", "Meta-Reviewer"],
    ["Jonathan Mamou", "Intel Labs", "Meta-Reviewer"],
    ["Ruixiang Zhang", "Apple", "Meta-Reviewer"],
    ["Ahmad Rashid", "U Waterloo & Vector Institute", "Meta-Reviewer"],
    ["Peilin Yu", "Brown University", "Reviewer"],
    ["Mojtaba Valipour", "Hum.ai", "Reviewer"],
    ["Shangyu Wu", "City University of Hong Kong", "Reviewer"],
    ["Huiqiang Jiang", "Microsoft Research", "Reviewer"],
    ["Lei Gao", "University of Southern California", "Reviewer"],
    ["Daria Soboleva", "Cerebras", "Reviewer"],
    ["Mike Lasby", "University of Calgary", "Reviewer"],
    ["Ali Edalati", "Cohere", "Reviewer"],
    ["Abderrahim Fathan", "CRIM", "Reviewer"],
    ["Haz Sameen Shahgir", "UC Riverside", "Reviewer"],
    ["Sai Ganesh Mirishkar", "IIIT Hyderabad", "Reviewer"],
    ["Mohammadreza Tayaranian", "McGill University", "Reviewer"],
    ["Satya Sai Srinath Namburi", "University of Wisconsin–Madison", "Reviewer"],
    ["Tushar Shinde", "IIT Madras Zanzibar", "Reviewer"],
    ["Maryam Dialameh", "University of Waterloo", "Reviewer"],
    ["Mahdi Biparva", "Huawei Canada", "Reviewer"],
    ["Coleman Hooper", "UC Berkeley", "Reviewer"],
    ["Ning Shi", "University of Alberta", "Reviewer"],
    ["Yujie Pan", "Intel", "Reviewer"],
    ["Raffy Fahim", "Microsoft", "Reviewer"],
    ["Nikhil Bhendawade", "Apple", "Reviewer"],
    ["Ankur Kumar", "Amazon", "Reviewer"],
    ["Heitor R. Guimarães", "INRS", "Reviewer"],
    ["Taehyeon Kim", "LG AI Research", "Reviewer"],
    ["Pieter-Jan Hoedt", "Johannes Kepler University, Linz", "Reviewer"],
    ["Benyamin Jamialahmadi", "Huawei", "Reviewer"],
    ["Cen Lu", "EPFL", "Reviewer"],
    ["Harry Dong", "Carnegie Mellon University", "Reviewer"],
    ["Amrit Khera", "OpenAI", "Reviewer"],
    ["Richard He Bai", "Apple", "Reviewer"],
    ["Omid Ghahroodi", "QCRI", "Reviewer"]
  ];

  const frag = document.createDocumentFragment();
  members.forEach(function (m) {
    const item = document.createElement("div");
    item.className = "pc-item";
    const name = document.createElement("span");
    name.className = "pc-name";
    name.textContent = m[0];
    const meta = document.createElement("span");
    meta.className = "pc-meta";
    meta.textContent = m[1];
    const role = document.createElement("span");
    role.className = "pc-role";
    role.textContent = m[2];
    item.appendChild(name);
    item.appendChild(meta);
    item.appendChild(role);
    frag.appendChild(item);
  });
  container.appendChild(frag);
})();

// ===================== Footer year =====================
(function () {
  const y = new Date().getFullYear();
  // Workshop is fixed to 2026; only update copyright if site lives past then.
})();
