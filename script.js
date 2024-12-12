// Product data
const products = [
    {
        id: 1,
        price: "$10",
        description: "A very good account for starters."
    },
    {
        id: 2,
        price: "$500",
        description: "Ultra og account."
    },
    {
        id: 3,
        price: "$40",
        description: "Unbelivable value."
    }
];

// Show product details in modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('modal-name').textContent = product.name;
        document.getElementById('modal-price').textContent = `Price: ${product.price}`;
        document.getElementById('modal-description').textContent = product.description;

        document.getElementById('product-modal').style.display = 'flex';
    }
}

// Close modal
function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}
