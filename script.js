 tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            display: ["Space Grotesk", "sans-serif"],
            body: ["Inter", "sans-serif"],
          },
          boxShadow: {
            glass: "0 25px 80px rgba(80, 40, 100, .14)",
            soft: "0 12px 45px rgba(40, 20, 60, .12)",
          },
          animation: {
            float: "float 6s ease-in-out infinite",
            blob: "blob 12s ease-in-out infinite",
            marquee: "marquee 22s linear infinite",
            pulseSoft: "pulseSoft 3s ease-in-out infinite",
            rotate: "rotate 2s ease-in-out",
          },
          keyframes: {
            float: {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-12px)" },
            },
            blob: {
              "0%, 100%": { transform: "translate(0, 0) scale(1)" },
              "33%": { transform: "translate(25px, -30px) scale(1.08)" },
              "66%": { transform: "translate(-20px, 20px) scale(.94)" },
            },
            marquee: {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
            pulseSoft: {
              "0%, 100%": { opacity: ".45" },
              "50%": { opacity: "1" },
            },
            rotate: {
              "0%": {transform: "rotate(0deg)" },
              "100%": {transform: "rotate(360deg)"}
            },
          },
        },
      },
    };
 


    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // Mobile menu
    const mobileMenu = document.getElementById("mobileMenu");
    document.getElementById("openMenu").addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });
    document.getElementById("closeMenu").addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
    document.querySelectorAll(".mobile-link").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });

    // Active navigation based on scrolling
    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...document.querySelectorAll(".nav-link")];

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove("active"));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });

    sections.forEach(section => sectionObserver.observe(section));


 

    