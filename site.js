(function () {
  "use strict";
  var page = document.body.dataset.page || "";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var links = document.querySelectorAll("a[data-transition]");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (reduce || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) === "#" || link.target) return;
      event.preventDefault();
      document.body.classList.add("leaving");
      setTimeout(function () { window.location.assign(href); }, 330);
    });
  });
  function hearts(origin, count) {
    if (reduce) return;
    var rect = origin.getBoundingClientRect();
    for (var i = 0; i < count; i++) {
      var el = document.createElement("span");
      el.className = "heart-float";
      el.textContent = i % 3 === 0 ? "✿" : "♡";
      el.style.left = (rect.left + rect.width * (0.2 + Math.random() * 0.6)) + "px";
      el.style.top = (rect.top + rect.height * 0.5) + "px";
      el.style.setProperty("--x", (Math.random() * 150 - 75) + "px");
      el.style.setProperty("--r", (Math.random() * 100 - 50) + "deg");
      document.body.appendChild(el);
      setTimeout(function () { el.remove(); }, 1500);
    }
  }
  if (page === "intro") {
    var silly = document.getElementById("silly-button");
    var sillyNote = document.getElementById("silly-note");
    silly.addEventListener("click", function () {
      sillyNote.hidden = !sillyNote.hidden;
      silly.setAttribute("aria-expanded", String(!sillyNote.hidden));
      if (!sillyNote.hidden) hearts(silly, 7);
    });
  }
  if (page === "comfort") {
    var choices = document.querySelectorAll("[data-comfort]");
    var label = document.getElementById("comfort-label");
    var heading = document.getElementById("comfort-heading");
    var detail = document.getElementById("comfort-detail");
    var card = document.getElementById("comfort-paper");
    var messages = {
      past: {
        label: "if old feelings got stirred up",
        heading: "Something from your past showing up again doesn't erase how far you've come.",
        detail: "You don't owe anyone an immediate answer, a perfect reaction, or access to your peace. It's okay if you're confused. Take your time and choose what feels right for you, without pressure."
      },
      tired: {
        label: "if everything feels like too much",
        heading: "You can be tired without being weak. You can rest without falling behind.",
        detail: "If your body hurts, your feelings are extra loud, or you just need the world to be quiet for a second, that's okay. You don't need to be productive, cheerful, or easy to be around to deserve kindness."
      },
      doubt: {
        label: "if you're being hard on yourself",
        heading: "I hope you know that being a work in progress doesn't make you any less worthy of good things.",
        detail: "I see someone with a big heart and so much ahead of her. I hope you give yourself the patience you'd give someone you love. You deserve it too."
      },
      smile: {
        label: "extremely important research",
        heading: "In case nobody told you today: you're pretty wonderful. Unfortunately, also a professional pain.",
        detail: "Both things can be true. And, believe it or not, I wouldn't change either. Your annoying-friend subscription has been renewed indefinitely."
      }
    };
    choices.forEach(function (choice) {
      choice.addEventListener("click", function () {
        var message = messages[choice.dataset.comfort];
        choices.forEach(function (c) { c.setAttribute("aria-pressed", String(c === choice)); });
        label.textContent = message.label;
        heading.textContent = message.heading;
        detail.textContent = message.detail;
        card.classList.remove("flash");
        void card.offsetWidth;
        card.classList.add("flash");
        hearts(choice, 4);
      });
    });
  }
  if (page === "reasons") {
    var cards = document.querySelectorAll(".flip-card");
    var count = document.getElementById("revealed-count");
    var seen = {};
    cards.forEach(function (card, index) {
      card.addEventListener("click", function () {
        var flipped = card.getAttribute("aria-pressed") !== "true";
        card.setAttribute("aria-pressed", String(flipped));
        card.setAttribute("aria-label", flipped ? "Close reason " + (index+1) : "Reveal reason " + (index+1));
        if (flipped) {
          seen[index] = true;
          hearts(card, 5);
        }
        var total = Object.keys(seen).length;
        count.textContent = total + " / " + cards.length + " little things discovered" + (total === cards.length ? " · told you there was a lot ♡" : "");
      });
    });
  }
  if (page === "finale") {
    var button = document.getElementById("final-button");
    var note = document.getElementById("final-note");
    button.addEventListener("click", function () {
      var open = note.hidden;
      note.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      button.textContent = open ? "close your extra note ↑" : "one more thing, bella ↗";
      if (open) { hearts(button, 14); note.scrollIntoView({behavior:reduce?"auto":"smooth",block:"nearest"}); }
    });
    var hugButton = document.getElementById("hug-button");
    var hugText = document.getElementById("hug-text");
    hugButton.addEventListener("click", function () {
      hugText.textContent = "One very big, slightly awkward, but very real virtual hug sent. You're not alone. ♡";
      hearts(hugButton, 18);
    });
  }
}());