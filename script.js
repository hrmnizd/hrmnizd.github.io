window.addEventListener("scroll", function() {
    const header = document.querySelector(".global-header");
    const headerHeight = header.offsetHeight; // Get header height
    const scrollY = window.scrollY; // Get scroll position
  
    if (scrollY > headerHeight) {
      header.classList.add("hidden"); // Add a hidden class to the header
    } else {
      header.classList.remove("hidden");
    }
  });

  function showNoPlace() {
    let cover = document.getElementById("noplace-add-cover");
    cover.classList.toggle("active");
  }