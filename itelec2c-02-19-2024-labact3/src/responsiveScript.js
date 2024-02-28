export function handleScreenResize() {
  const navbarSearch = document.getElementById("navbarSearch");

  if (window.innerWidth <= 576) {
    navbarSearch.classList.remove("order-0");
    navbarSearch.classList.add("order-4");
    navbarSearch.classList.add("search-collapse");
  } else {
    navbarSearch.classList.remove("order-4");
    navbarSearch.classList.remove("search-collapse");
    navbarSearch.classList.add("order-0");
  }
}
