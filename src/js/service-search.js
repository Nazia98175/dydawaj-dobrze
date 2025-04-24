const customInput = document.getElementById("customSearchInput");
const suggestionBox = document.getElementById("customSuggestionsList");
const suggestions = document.querySelectorAll(".custom-suggestion");
const noResult = document.getElementById("customNoResults");
const customSearchTerm = document.getElementById("customSearchTerm");

function showSuggestions() {
  suggestionBox.classList.remove("hidden", "dropdown-exit");
  suggestionBox.classList.add("dropdown-enter");
}

function hideSuggestions() {
  suggestionBox.classList.remove("dropdown-enter");
  suggestionBox.classList.add("dropdown-exit");
  setTimeout(() => {
    suggestionBox.classList.add("hidden");
    suggestionBox.classList.remove("dropdown-exit");
  }, 200);
}

function highlight(term, label) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  return label.replace(regex, `<span class="highlight">$1</span>`);
}

function filterCustomSuggestions(term) {
  let matchCount = 0;
  suggestions.forEach((item) => {
    const text = item.dataset.label;
    const labelSpan = item.querySelector(".custom-suggestion-text");
    console.log(labelSpan);

    if (!text || !labelSpan) {
      item.classList.add("hidden");
      return;
    }

    if (text.toLowerCase().includes(term)) {
      item.classList.remove("hidden");
      labelSpan.innerHTML = highlight(term, text);
      matchCount++;
    } else {
      item.classList.add("hidden");
    }
  });

  customSearchTerm.textContent = term;
  noResult.classList.toggle("hidden", matchCount > 0);
  showSuggestions();
}

customInput.addEventListener("input", () => {
  const query = customInput.value.trim().toLowerCase();
  if (query.length === 0) {
    suggestions.forEach((item) => {
      item.classList.remove("hidden");
      const labelSpan = item.querySelector(".custom-suggestion-text");
      if (labelSpan && item.dataset.label) {
        labelSpan.innerHTML = item.dataset.label;
      }
    });
    noResult.classList.add("hidden");
    hideSuggestions();
  } else {
    filterCustomSuggestions(query);
  }
});

customInput.addEventListener("focus", () => {
  if (customInput.value.trim().length > 0) {
    showSuggestions();
  }
});

document.addEventListener("click", (e) => {
  if (!customInput.contains(e.target) && !suggestionBox.contains(e.target)) {
    hideSuggestions();
  }
});

suggestions.forEach((item) => {
  item.addEventListener("click", () => {
    const text = item.dataset.label || "";
    customInput.value = text;
    hideSuggestions();
  });
});
