/* ============================================
   QUICKSELL – Main JavaScript
   ============================================ */

// ============================================
// PRODUCT DATA
// ============================================

const allProducts = [
  // Electronics
  { id: 1, name: "Sony WH-1000XM5 Wireless Headphones", category: "Electronics", price: 24999, originalPrice: 34999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", rating: 4.8, reviews: 2341, badge: "deal", discount: 29, isNew: false },
  { id: 2, name: "Apple MacBook Air M2 13-inch Laptop", category: "Electronics", price: 114900, originalPrice: 129900, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80", rating: 4.9, reviews: 876, badge: "hot", discount: 12, isNew: false },
  { id: 3, name: "Samsung 65\" 4K QLED Smart TV", category: "Electronics", price: 79999, originalPrice: 129999, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=400&q=80", rating: 4.7, reviews: 1230, badge: "deal", discount: 38, isNew: false },
  { id: 4, name: "iPhone 15 Pro Max 256GB", category: "Electronics", price: 134900, originalPrice: 159900, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80", rating: 4.9, reviews: 5621, badge: "hot", discount: 16, isNew: true },
  { id: 5, name: "Canon EOS R50 Mirrorless Camera", category: "Electronics", price: 55000, originalPrice: 72000, image: "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?w=400&q=80", rating: 4.6, reviews: 432, badge: "new", discount: 24, isNew: true },
  { id: 6, name: "Logitech MX Master 3S Wireless Mouse", category: "Electronics", price: 8995, originalPrice: 11995, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80", rating: 4.8, reviews: 3210, badge: null, discount: 25, isNew: false },

  // Fashion
  { id: 7, name: "Men's Premium Slim Fit Blazer – Navy", category: "Fashion", price: 2499, originalPrice: 4999, image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80", rating: 4.4, reviews: 890, badge: "deal", discount: 50, isNew: false },
  { id: 8, name: "Women's Floral Wrap Midi Dress", category: "Fashion", price: 1299, originalPrice: 2499, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", rating: 4.5, reviews: 1560, badge: "hot", discount: 48, isNew: false },
  { id: 9, name: "Nike Air Max 270 Running Shoes", category: "Fashion", price: 7999, originalPrice: 12995, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", rating: 4.7, reviews: 4250, badge: null, discount: 38, isNew: false },
  { id: 10, name: "Leather Crossbody Handbag – Brown", category: "Fashion", price: 1899, originalPrice: 3999, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", rating: 4.3, reviews: 678, badge: "new", discount: 53, isNew: true },
  { id: 11, name: "Men's Classic Denim Jacket", category: "Fashion", price: 1799, originalPrice: 2999, image: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=400&q=80", rating: 4.5, reviews: 892, badge: null, discount: 40, isNew: false },

  // Home
  { id: 12, name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker", category: "Home", price: 6999, originalPrice: 11999, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80", rating: 4.8, reviews: 3400, badge: "deal", discount: 42, isNew: false },
  { id: 13, name: "Premium Memory Foam Mattress Queen", category: "Home", price: 18999, originalPrice: 34999, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80", rating: 4.7, reviews: 987, badge: "deal", discount: 46, isNew: false },
  { id: 14, name: "Philips Air Purifier 2000i", category: "Home", price: 12999, originalPrice: 19999, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80", rating: 4.6, reviews: 654, badge: "new", discount: 35, isNew: true },
  { id: 15, name: "Dyson V15 Detect Cordless Vacuum", category: "Home", price: 45900, originalPrice: 59900, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", rating: 4.9, reviews: 1123, badge: "hot", discount: 23, isNew: false },

  // Books
  { id: 16, name: "Atomic Habits by James Clear", category: "Books", price: 449, originalPrice: 799, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80", rating: 4.9, reviews: 12450, badge: "hot", discount: 44, isNew: false },
  { id: 17, name: "The Alchemist – Paulo Coelho (Special Ed.)", category: "Books", price: 299, originalPrice: 499, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80", rating: 4.8, reviews: 8760, badge: null, discount: 40, isNew: false },
  { id: 18, name: "Rich Dad Poor Dad – Robert Kiyosaki", category: "Books", price: 349, originalPrice: 599, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80", rating: 4.7, reviews: 9870, badge: null, discount: 42, isNew: false },

  // Sports
  { id: 19, name: "Decathlon Yoga Mat Non-Slip Premium", category: "Sports", price: 1499, originalPrice: 2499, image: "https://images.unsplash.com/photo-1601925228120-87b01bd0d4a5?w=400&q=80", rating: 4.6, reviews: 2345, badge: null, discount: 40, isNew: false },
  { id: 20, name: "Adjustable Dumbbell Set 5–52.5 lbs", category: "Sports", price: 12999, originalPrice: 21999, image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=400&q=80", rating: 4.8, reviews: 1678, badge: "deal", discount: 41, isNew: false },
  { id: 21, name: "Garmin Forerunner 255 GPS Watch", category: "Sports", price: 29999, originalPrice: 39999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", rating: 4.7, reviews: 890, badge: "new", discount: 25, isNew: true },

  // Beauty
  { id: 22, name: "Dyson Airwrap Complete Styler", category: "Beauty", price: 36900, originalPrice: 45900, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80", rating: 4.9, reviews: 3450, badge: "hot", discount: 20, isNew: false },
  { id: 23, name: "Korean Skincare Essentials Set 10-piece", category: "Beauty", price: 2499, originalPrice: 4999, image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80", rating: 4.6, reviews: 2100, badge: "deal", discount: 50, isNew: false },
  { id: 24, name: "Maison Margiela Replica Perfume 100ml", category: "Beauty", price: 8999, originalPrice: 13500, image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80", rating: 4.8, reviews: 1230, badge: null, discount: 33, isNew: false },
];

// ============================================
// STATE
// ============================================
let cart = [];
let wishlist = [];
let visibleCount = 8;
let activeFilter = "All";
let filteredProducts = [...allProducts];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderDeals();
  startCountdown();
  initScrollEffects();
});

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts(reset = false) {
  if (reset) visibleCount = 8;
  const grid = document.getElementById("productsGrid");
  const toShow = filteredProducts.slice(0, visibleCount);

  grid.innerHTML = toShow.map(p => productCardHTML(p)).join("");

  // Load more button
  const btn = document.getElementById("loadMoreBtn");
  btn.style.display = visibleCount >= filteredProducts.length ? "none" : "block";
}

function productCardHTML(p) {
  const isWishlisted = wishlist.some(w => w.id === p.id);
  const badgeHTML = p.badge === "deal"
    ? `<div class="badge-deal"><span>−${p.discount}% OFF</span></div>`
    : p.badge === "hot"
    ? `<div class="badge-hot"><span>🔥 Hot</span></div>`
    : p.badge === "new"
    ? `<div class="badge-new"><span>New</span></div>`
    : "";

  return `
    <div class="product-card fade-in" id="product-${p.id}">
      <div class="product-img-wrap">
        ${badgeHTML}
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        <div class="card-actions">
          <button class="action-btn ${isWishlisted ? "wishlisted" : ""}" onclick="toggleWishlistItem(${p.id})" title="Wishlist">
            <i class="fa${isWishlisted ? "s" : "r"} fa-heart"></i>
          </button>
          <button class="action-btn" onclick="quickView(${p.id})" title="Quick View">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="product-body">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${getStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString("en-IN")}</span>
          <span class="price-original">₹${p.originalPrice.toLocaleString("en-IN")}</span>
          <span class="price-discount">${p.discount}% off</span>
        </div>
        <button class="add-to-cart-btn" onclick="addToCart(${p.id})">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

// ============================================
// RENDER DEALS
// ============================================
function renderDeals() {
  const dealProducts = allProducts.filter(p => p.badge === "deal" || p.badge === "hot").slice(0, 4);
  const grid = document.getElementById("dealsGrid");
  grid.innerHTML = dealProducts.map(p => productCardHTML(p)).join("");
}

// ============================================
// FILTER & SORT
// ============================================
function filterProducts(category, btn) {
  activeFilter = category;
  // Update button states
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  applyFilterAndSort();
}

function filterByCategory(category) {
  activeFilter = category;
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.textContent.trim() === category);
  });
  applyFilterAndSort();
  scrollToProducts();
  showToast(`🔍 Showing ${category} products`);
}

function sortProducts() {
  applyFilterAndSort();
}

function applyFilterAndSort() {
  let products = activeFilter === "All"
    ? [...allProducts]
    : allProducts.filter(p => p.category === activeFilter);

  const sort = document.getElementById("sortSelect").value;
  if (sort === "price-low") products.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") products.sort((a, b) => b.price - a.price);
  else if (sort === "rating") products.sort((a, b) => b.rating - a.rating);
  else if (sort === "newest") products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

  filteredProducts = products;
  renderProducts(true);
}

function loadMore() {
  visibleCount += 4;
  renderProducts();
}

// ============================================
// CART
// ============================================
function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`🛒 "${product.name.split(" ").slice(0, 3).join(" ")}..." added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
  renderCartSidebar();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { updateCartUI(); renderCartSidebar(); }
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartBadge").textContent = total;
  renderCartSidebar();
}

function renderCartSidebar() {
  const container = document.getElementById("cartItems");
  const footer = document.getElementById("cartFooter");

  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-state"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>`;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}"/>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">₹${(item.price * item.qty).toLocaleString("en-IN")}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
    </div>
  `).join("");

  const grandTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cartTotal").textContent = `₹${grandTotal.toLocaleString("en-IN")}`;
}

function checkout() {
  if (cart.length === 0) return;
  showToast("✅ Order placed successfully! Thank you for shopping at QuickSell.");
  cart = [];
  updateCartUI();
  closeAll();
}

// ============================================
// WISHLIST
// ============================================
function toggleWishlistItem(id) {
  const product = allProducts.find(p => p.id === id);
  const idx = wishlist.findIndex(w => w.id === id);

  if (idx === -1) {
    wishlist.push(product);
    showToast(`❤️ "${product.name.split(" ").slice(0, 3).join(" ")}..." added to wishlist!`);
  } else {
    wishlist.splice(idx, 1);
    showToast(`💔 Removed from wishlist`);
  }

  document.getElementById("wishlistBadge").textContent = wishlist.length;
  renderProducts();
  renderDeals();
  renderWishlistSidebar();
}

function renderWishlistSidebar() {
  const container = document.getElementById("wishlistItems");

  if (wishlist.length === 0) {
    container.innerHTML = `<div class="empty-state"><i class="fas fa-heart"></i><p>Your wishlist is empty</p></div>`;
    return;
  }

  container.innerHTML = wishlist.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}"/>
      <div class="wishlist-item-info">
        <p class="wishlist-item-name">${item.name}</p>
        <p class="wishlist-item-price">₹${item.price.toLocaleString("en-IN")}</p>
        <button class="wishlist-to-cart" onclick="addToCart(${item.id}); showToast('🛒 Moved to cart!')">Move to Cart</button>
      </div>
      <button class="cart-item-remove" onclick="toggleWishlistItem(${item.id})"><i class="fas fa-times"></i></button>
    </div>
  `).join("");
}

// ============================================
// SEARCH
// ============================================
function handleSearch() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const category = document.getElementById("searchCategory").value;

  if (!query) { showToast("Please enter a search term"); return; }

  filteredProducts = allProducts.filter(p => {
    const matchQuery = p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
    const matchCat = category === "All" || p.category === category;
    return matchQuery && matchCat;
  });

  activeFilter = "All";
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(".filter-btn").classList.add("active");

  renderProducts(true);
  scrollToProducts();

  if (filteredProducts.length === 0) {
    showToast(`😕 No results for "${query}"`);
    document.getElementById("productsGrid").innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)"><i class="fas fa-search" style="font-size:3rem;color:var(--border);margin-bottom:16px;display:block"></i><p>No products found for "<strong>${query}</strong>"</p></div>`;
  } else {
    showToast(`🔍 Found ${filteredProducts.length} product${filteredProducts.length > 1 ? "s" : ""} for "${query}"`);
  }
}

// Allow pressing Enter to search
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
  });
});

// ============================================
// SIDEBAR TOGGLES
// ============================================
function toggleCart() {
  const sidebar = document.getElementById("cartSidebar");
  const wishSidebar = document.getElementById("wishlistSidebar");
  const overlay = document.getElementById("overlay");

  const isOpen = sidebar.classList.contains("open");
  wishSidebar.classList.remove("open");
  sidebar.classList.toggle("open", !isOpen);
  overlay.classList.toggle("active", !isOpen);
}

function toggleWishlist() {
  const sidebar = document.getElementById("wishlistSidebar");
  const cartSidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("overlay");

  const isOpen = sidebar.classList.contains("open");
  cartSidebar.classList.remove("open");
  sidebar.classList.toggle("open", !isOpen);
  overlay.classList.toggle("active", !isOpen);

  renderWishlistSidebar();
}

function toggleAccount() {
  const modal = document.getElementById("accountModal");
  modal.classList.toggle("active");
}

function closeAll() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("wishlistSidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("accountModal").classList.remove("active");
}

// ============================================
// ACCOUNT MODAL TABS
// ============================================
function switchTab(tab, btn) {
  document.querySelectorAll(".modal-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("loginForm").style.display = tab === "login" ? "block" : "none";
  document.getElementById("signupForm").style.display = tab === "signup" ? "block" : "none";
}

function fakeLogin() {
  showToast("✅ Logged in successfully! Welcome back.");
  closeAll();
}

function fakeSignup() {
  showToast("🎉 Account created! Welcome to QuickSell.");
  closeAll();
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}

// ============================================
// NEWSLETTER
// ============================================
function subscribeNewsletter() {
  const email = document.getElementById("nlEmail").value.trim();
  if (!email || !email.includes("@")) {
    showToast("⚠️ Please enter a valid email address");
    return;
  }
  document.getElementById("nlEmail").value = "";
  showToast(`🎉 Subscribed! Best deals coming to ${email}`);
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function startCountdown() {
  // Set a target time 8 hours from now
  const target = new Date();
  target.setHours(target.getHours() + 8, target.getMinutes() + 23, target.getSeconds() + 45);

  function update() {
    const now = new Date();
    let diff = Math.max(0, target - now);

    const h = Math.floor(diff / 3600000);
    diff -= h * 3600000;
    const m = Math.floor(diff / 60000);
    diff -= m * 60000;
    const s = Math.floor(diff / 1000);

    document.getElementById("hours").textContent = String(h).padStart(2, "0");
    document.getElementById("minutes").textContent = String(m).padStart(2, "0");
    document.getElementById("seconds").textContent = String(s).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Navbar
    navbar.classList.toggle("scrolled", scrollY > 60);

    // Back to top
    backToTop.classList.toggle("visible", scrollY > 400);
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function scrollToDeals() {
  document.getElementById("deals").scrollIntoView({ behavior: "smooth" });
}

// ============================================
// QUICK VIEW
// ============================================
function quickView(id) {
  const p = allProducts.find(prod => prod.id === id);
  showToast(`👁️ Viewing: ${p.name.split(" ").slice(0, 4).join(" ")}...`);
  // In a full app this would open a modal with product details
}

// ============================================
// TOAST
// ============================================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3200);
}

// ============================================
// UTILITIES
// ============================================
function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

// Close sidebar/modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});

// Highlight active nav links on scroll
const sections = ["home", "categories", "deals", "products", "contact"];
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
      document.querySelectorAll(".nav-links a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${id}` || (id === "home" && a.getAttribute("href") === "#"));
      });
    }
  });
});
