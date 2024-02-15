document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const productsContainer = document.getElementById('products');
    
    // Sample product data (replace with actual API response)
    const products = [
      { id: 1, category: 'men', image: 'm1.png', title: 'Mens Kurta', vendor: 'Manyvar', price: 1199.00, comparePrice: 1299.00 },
      { id: 2, category: 'men', image: 'm2.png', title: 'RCB Tshirt', vendor: 'Puma', price: 2199.00, comparePrice: 4299.00 },
      { id: 3, category: 'men', image: 'm3.png', title: 'Green Charm', vendor: 'Myntra', price: 1399.00, comparePrice: 1499.00 },
      { id: 4, category: 'men', image: 'm4.png', title: 'Mens Tshirt', vendor: 'Myntra', price: 599.00, comparePrice: 799.00},
      { id: 5, category: 'women', image: 'w1.png', title: 'Women Kurti', vendor: 'Manyvar', price: 1199.00, comparePrice: 1299.00 },
      { id: 6, category: 'women', image: 'w2.png', title: 'Yellow cas...', vendor: 'Myntra', price: 199.00, comparePrice: 299.00 },
      { id: 7, category: 'women', image: 'w3.png', title: 'Women Blac.', vendor: 'Myntra', price: 1399.00, comparePrice: 1499.00 },
      { id: 8, category: 'women', image: 'w4.png', title: 'METRO-Blac.', vendor: 'Myntra', price: 1599.00, comparePrice: 1799.00 },
      { id: 9, category: 'kids', image: 'k1.png',  title: 'Women Kurti', vendor: 'Manyvar', price: 1199.00, comparePrice: 1299.00 },
      { id: 10, category: 'kids', image: 'k2.png',  title: 'Yellow cas...', vendor: 'Myntra', price: 199.00, comparePrice: 299.00},
      { id: 11, category: 'kids', image: 'k3.png',  title: 'Women Blac.', vendor: 'Myntra', price: 1399.00, comparePrice: 1499.00 },
      { id: 12, category: 'kids', image: 'k4.png', title: 'METRO-Blac.', vendor: 'Myntra', price: 1599.00, comparePrice: 1799.00}
    ];
  
    // Function to render products based on category
    function renderProducts(category) {
      productsContainer.innerHTML = '';
      const filteredProducts = products.filter(product => product.category === category);
      filteredProducts.forEach(product => {
        const discount = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);
        const productCard = `
          <div class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <div class="product-info">
                <div class="product-title-vendor">
                    <div class="product-title">${product.title}</div>
                    <div class="dot"></div>
                    <div class="product-vendor">${product.vendor}</div>
                </div>
                <div class="price">
                    <div class="product-price">Rs ${product.price}</div>
                    <div class="product-compare-price">${product.comparePrice}</div>
                    <div class="product-discount">${discount}% off</div>
                </div>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        `;
        productsContainer.innerHTML += productCard;
      });
    }
  
    // Initialize with the "Men" category
    renderProducts('men');
  
    // Add event listeners to tabs
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        tabs.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
        renderProducts(category);
      });
    });
  });
  