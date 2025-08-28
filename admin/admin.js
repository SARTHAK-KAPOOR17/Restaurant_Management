
  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // Show loader
  function showLoader() {
    document.getElementById("loader").style.display = "flex";
  }

  // Sidebar navigation with loader (fixed for icon + text clicks)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      showLoader();
      const targetHref = e.currentTarget.href; // always get <a> href
      setTimeout(() => {
        window.location.href = targetHref;
      }, 800);
    });
  });

  // Logout with loader
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to logout?")) {
      showLoader();
      setTimeout(() => {
        window.location.href = "login.html"; 
      }, 1000);
    }
  });
