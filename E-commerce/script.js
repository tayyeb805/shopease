document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('.header');
    
    // Toggle sidebar
    sidebarToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        header.classList.toggle('active');
        
        // Add ripple effect
        createRippleEffect(this);
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && 
            !sidebarToggle.contains(event.target) && 
            mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            header.classList.remove('active');
        }
    });
    
    // Ripple effect function
    function createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple-effect');
        element.appendChild(ripple);
        
        // Remove ripple after animation completes
        setTimeout(() => {
            ripple.remove();
        }, 800);
    }
    
    // Initialize products (you can keep your existing product initialization code)
    // ...
});
  // Rest of your existing code...
// Sample product data for clothing store
const products = [
    {
        id: 1,
        title: "Classic White T-Shirt",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 5,
        reviews: 124,
        badge: "Hot"
    },
    {
        id: 2,
        title: "Denim Jacket",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4,
        reviews: 87,
        badge: "New"
    },
    {
        id: 3,
        title: "Cotton Hoodie",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 5,
        reviews: 215,
        badge: "-10%"
    },
    {
        id: 4,
        title: "Slim Fit Jeans",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4,
        reviews: 156,
        badge: "Sale"
    },
    {
        id: 5,
        title: "Summer Dress",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 5,
        reviews: 92,
        badge: "Hot"
    },
    {
        id: 6,
        title: "Formal Shirt",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4,
        reviews: 78,
        badge: "New"
    },
    {
        id: 7,
        title: "Casual Sneakers",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 5,
        reviews: 143,
        badge: "-15%"
    },
    {
        id: 8,
        title: "Leather Jacket",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 5,
        reviews: 67,
        badge: "Sale"
    }
];

// Best selling products
const bestSellingProducts = [
    {
        id: 9,
        title: "Premium Suit Set",
        price: 259.99,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 5,
        reviews: 89
    },
    {
        id: 10,
        title: "Designer Handbag",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4,
        reviews: 112
    },
    {
        id: 11,
        title: "Casual Trousers",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4,
        reviews: 76
    },
    {
        id: 12,
        title: "Winter Coat",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 5,
        reviews: 134
    }
];

// Render products
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let badgeHtml = '';
        if (product.badge) {
            badgeHtml = `<div class="product-badge">${product.badge}</div>`;
        }
        
        let ratingStars = '';
        for (let i = 0; i < 5; i++) {
            if (i < product.rating) {
                ratingStars += '<i class="fas fa-star"></i>';
            } else {
                ratingStars += '<i class="far fa-star"></i>';
            }
        }
        
        productCard.innerHTML = `
            ${badgeHtml}
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-actions">
                    <button class="wishlist-btn"><i class="far fa-heart"></i></button>
                    <button class="quick-view-btn"><i class="far fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-rating">
                    ${ratingStars} (${product.reviews})
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add To Cart</button>
            </div>
        `;
        container.appendChild(productCard);
    });
}

// Countdown timer
function updateCountdown() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    let days = parseInt(daysElement.textContent);
    let hours = parseInt(hoursElement.textContent);
    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);
    
    seconds--;
    
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    
    if (minutes < 0) {
        minutes = 59;
        hours--;
    }
    
    if (hours < 0) {
        hours = 23;
        days--;
    }
    
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Render products
    renderProducts(products, 'flash-sales-products');
    renderProducts(bestSellingProducts, 'best-selling-products');
    renderProducts([...products, ...bestSellingProducts].sort(() => 0.5 - Math.random()).slice(0, 8), 'explore-products');
    
    // Set up countdown timer
    setInterval(updateCountdown, 1000);
    
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart')) {
            const productId = e.target.closest('.add-to-cart').getAttribute('data-id');
            alert(`Product ${productId} added to cart!`);
        }
        
        if (e.target.closest('.wishlist-btn')) {
            const productCard = e.target.closest('.product-card');
            const heartIcon = productCard.querySelector('.wishlist-btn i');
            heartIcon.classList.toggle('far');
            heartIcon.classList.toggle('fas');
            heartIcon.classList.toggle('text-red-500');
        }
    });
});

// Ripple effect for login/signup link
document.querySelector('a[href="login.html"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    
    const ripple = document.createElement('div');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple-effect');
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
        window.location.href = this.href;
    }, 800);
});