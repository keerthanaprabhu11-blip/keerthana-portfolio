const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

// Digital Wardrobe Organizer: local, illustrative demo interactions
const wardrobeFilters = document.querySelectorAll('.filter-btn');
const wardrobeItems = document.querySelectorAll('.wardrobe-item');
wardrobeFilters.forEach((button) => button.addEventListener('click', () => {
  wardrobeFilters.forEach((item) => item.classList.toggle('active', item === button));
  const filter = button.dataset.filter;
  wardrobeItems.forEach((item) => { item.hidden = filter !== 'all' && item.dataset.category !== filter; });
}));
const outfitButton = document.getElementById('generateOutfit');
if (outfitButton) outfitButton.addEventListener('click', () => {
  const outfits = [
    ['Blue tee + cream trousers + white sneakers', 'A relaxed everyday combination.'],
    ['Pink weekend top + cream trousers + white sneakers', 'A soft colour palette for a casual day.'],
    ['Blue tee + cream trousers', 'A simple, comfortable combination.']
  ];
  const outfit = outfits[Math.floor(Math.random() * outfits.length)];
  document.querySelector('#outfitResult b').textContent = outfit[0];
  document.querySelector('#outfitResult small').textContent = outfit[1];
  document.getElementById('wardrobeFeedback').textContent = 'Sample outfit generated using demo items.';
});
