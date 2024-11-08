document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.querySelector(".load-more");
  const modal = document.getElementById("freeSpinsModal");
  const closeButton = document.querySelector(".close");
  const modalTitle = document.querySelector("#freeSpinsModal .modal-header h2");
  let modalContent = document.querySelector(".modal-content");
  const promoCode = document.getElementById("promoCode");
  const copySuccess = document.getElementById("copySuccess");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("free-spins-trigger")) {
      const casinoName = e.target.dataset.casino;
      const freeSpins = e.target.dataset.spins;
      modalTitle.textContent = `${freeSpins} at ${casinoName}`;
      modal.style.display = "block";

      modalContent.style.position = "absolute";
      modalContent.style.left = `${e.clientX - window.screen.width / 10}px`;
      modalContent.style.top = `${e.clientY - window.screen.height / 5}px`;
    }
  });

  // Close modal handlers
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Promo code copy handler
  promoCode.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("WELCOME");
      copySuccess.classList.add("show-success");
      setTimeout(() => {
        copySuccess.classList.remove("show-success");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  });

  const additionalCasinos = [
    {
      name: "All Star Games Casino",
      logo: "https://placeholder.com/80x80",
      rating: 4.4,
      isNew: false,
      freeSpins: "25 Free Spins",
      bonus: "200% First deposit bonus",
    },
    {
      name: "All Star Slots Casino",
      logo: "https://placeholder.com/80x80",
      rating: 4.4,
      isNew: false,
      freeSpins: "20 Free Spins",
      bonus: "300% First deposit bonus",
    },
    {
      name: "Sports Interaction Casino",
      logo: "https://placeholder.com/80x80",
      rating: 4.4,
      isNew: false,
      noDepositBonus: "$25 No deposit bonus",
      bonus: "200% First deposit bonus",
    },
    {
      name: "VIP Stakes Casino",
      logo: "https://placeholder.com/80x80",
      rating: 4.4,
      isNew: false,
      freeSpins: "20 Free Spins",
      bonus: "200% First deposit bonus + 250 FS",
    },
    {
      name: "Jackpot Capital Casino",
      logo: "https://placeholder.com/80x80",
      rating: 4.4,
      isNew: false,
      freeSpins: "20 Free Spins",
      bonus: "400% First deposit bonus",
    },
  ];

  function loadMore() {
    const casinoList = document.getElementById("casino-list");
    additionalCasinos.forEach((casino) => {
      const casinoCard = createCasinoCard(casino);
      casinoList.insertAdjacentHTML("beforeend", casinoCard);
    });

    // Hide the load more button after loading additional casinos
    document.querySelector(".load-more").style.display = "none";
  }

  loadMoreButton.addEventListener("click", () => {
    loadMore();
  });
});
