// Product Data
const products = [
    {
        id: 1,
        name: "Smart Watch",
        category: "Electronics",
        price: 1999,
        image: "image/SmartWatch.jpg",
        description: "Advanced fitness tracking with heart rate monitor"
    },
    {
        id: 2,
        name: "Sports Shoes",
        category: "Shoes",
        price: 3499,
        image: "https://picsum.photos/300/250?random=2",
        description: "Comfortable running shoes with gel cushioning"
    },
    {
        id: 3,
        name: "T-Shirt",
        category: "Fashion",
        price: 799,
        image: "https://picsum.photos/300/250?random=3",
        description: "Premium cotton T-shirt available in multiple colors"
    },
    {
        id: 4,
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 2499,
        image: "https://picsum.photos/300/250?random=4",
        description: "Noise-cancelling wireless earbuds with 30-hour battery"
    },
    {
        id: 5,
        name: "Jeans",
        category: "Fashion",
        price: 1499,
        image: "https://picsum.photos/300/250?random=5",
        description: "Stylish denim jeans suitable for all occasions"
    },
    {
        id: 6,
        name: "Formal Shoes",
        category: "Shoes",
        price: 2999,
        image: "https://picsum.photos/300/250?random=6",
        description: "Elegant formal shoes perfect for office and events"
    }
];

// Initialize Products
function initProducts() {
    displayProducts(products);
    setupFilterListeners();
}

// Display Products
function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById("product-container");
    
    if (!productContainer) return;
    
    if (productsToDisplay.length === 0) {
        productContainer.innerHTML = '<p class="text-center">No products found</p>';
        return;
    }

    productContainer.innerHTML = productsToDisplay.map(product => `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5>${product.name}</h5>
                    <p class="text-muted">${product.category}</p>
                    <p class="fw-bold">₹${product.price}</p>
                    <p class="small">${product.description}</p>
                    <button class="btn btn-primary btn-sm" onclick="viewDetails(${product.id})">
                        View Details
                    </button>
                    <button class="btn btn-success btn-sm" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Search Products
function searchProducts(searchTerm) {
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayProducts(filtered);
}

// Filter by Category
function filterByCategory(category) {
    if (category === "All Categories") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Filter by Price
function filterByPrice(priceRange) {
    let filtered = products;

    if (priceRange === "Under ₹1000") {
        filtered = products.filter(p => p.price < 1000);
    } else if (priceRange === "₹1000 - ₹3000") {
        filtered = products.filter(p => p.price >= 1000 && p.price <= 3000);
    } else if (priceRange === "Above ₹3000") {
        filtered = products.filter(p => p.price > 3000);
    }

    displayProducts(filtered);
}

// Setup Event Listeners
function setupFilterListeners() {
    const searchInput = document.querySelector('input[placeholder="Search Products"]');
    const categorySelect = document.querySelectorAll('select')[0];
    const priceSelect = document.querySelectorAll('select')[1];

    if (searchInput) {
        searchInput.addEventListener('input', (e) => searchProducts(e.target.value));
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => filterByCategory(e.target.value));
    }

    if (priceSelect) {
        priceSelect.addEventListener('change', (e) => filterByPrice(e.target.value));
    }
}

// View Product Details
function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`${product.name}\nPrice: ₹${product.price}\n${product.description}`);
    }
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`${product.name} added to cart!`);
        // You can add more functionality here later
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initProducts);
