let cartCount = 0;
let cartItems = [];

const cartCountEl = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".cart-btn");
const cartItemsList = document.getElementById("cart-items");
const cartMessage = document.querySelector(".cart-message");
const checkoutBtn = document.getElementById("checkout-btn");
const clearBtn = document.getElementById("clear-cart-btn");
const cartDropdown = document.getElementById("cart-dropdown");
const cartIcon = document.querySelector(".cart-icon-img");

const cartModal = document.getElementById("cart-modal");
const checkoutForm = document.getElementById("checkout-form");

// Add to Cart Logic
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.dataset.name || "Item";
    cartCount++;
    cartItems.push(itemName);

    cartCountEl.textContent = cartCount;
    updateCartList();
  });
});

// Update cart item list in small dropdown view
function updateCartList() {
  cartItemsList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItemsList.appendChild(li);
  });

  cartMessage.style.display = "none";
  checkoutBtn.style.display = "block";
  clearBtn.style.display = "block";
}

// Toggle Cart View on Icon Click
cartIcon.addEventListener("click", () => {
  if (cartItems.length > 0) {
    updateCartModal();
    cartModal.classList.remove("hidden");
    cartDropdown.classList.add("hidden");
  } else {
    cartDropdown.classList.toggle("hidden");
  }
});

// Populate items in cart modal
function updateCartModal() {
  const cartItemsList = document.getElementById("cart-items-list");
  cartItemsList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItemsList.appendChild(li);
  });
}

// Proceed to checkout
checkoutBtn.addEventListener("click", () => {
  cartModal.classList.add("hidden");
  checkoutForm.classList.remove("hidden");
});

// Clear Cart
clearBtn.addEventListener("click", () => {
  cartCount = 0;
  cartItems = [];
  cartCountEl.textContent = "0";
  cartItemsList.innerHTML = "";
  cartMessage.style.display = "block";
  checkoutBtn.style.display = "none";
  clearBtn.style.display = "none";
});


// Carousel logic
const carousel = document.getElementById("signature-carousel");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let scrollAmount = 0;
const scrollStep = 320;
const maxScroll = carousel.scrollWidth - carousel.clientWidth;

rightBtn.addEventListener("click", () => {
  scrollAmount = Math.min(scrollAmount + scrollStep, maxScroll);
  carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  scrollAmount = Math.max(scrollAmount - scrollStep, 0);
  carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

setInterval(() => {
  scrollAmount += scrollStep;
  if (scrollAmount >= maxScroll) scrollAmount = 0;
  carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
}, 5000);

// Scroll spy
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
