function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} telah ditambahkan ke keranjang!`);
    updateCart();
}
function updateCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItemsContainer.innerHTML = ""; // Kosongkan daftar item
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement("li");
        itemElement.classList.add("cart-item"); // Tambahkan kelas untuk styling

        // Buat elemen gambar
        const imgElement = document.createElement("img");
        imgElement.src = item.image;
        imgElement.alt = item.name;
        imgElement.style.width = "50px"; // Atur lebar gambar

        // Buat elemen nama dan harga
        const nameElement = document.createElement("span");
        nameElement.textContent = `${item.name} - Rp${item.price}`;
        
        // Buat tombol hapus
        const removeButton = document.createElement("button");
        removeButton.textContent = "Hapus";
        removeButton.onclick = function() {
            removeFromCart(index); // Panggil fungsi hapus
        };

        // Tambahkan semua elemen ke item
        itemElement.appendChild(imgElement);
        itemElement.appendChild(nameElement);
        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);
        
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: Rp${totalPrice}`;
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Hapus item berdasarkan index
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart(); // Update tampilan keranjang
}
function toggleCart() {
    const cartSidebar = document.getElementById("cartSidebar");
    cartSidebar.classList.toggle("active"); // Menambahkan/removing kelas active
    updateCart(); // Memperbarui tampilan keranjang setiap kali sidebar dibuka
}
