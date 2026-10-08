
/* ================= PRODUCTS ================= */

const products = [

    // Hot Drinks
    {
        id: 1,
        name: "شاي",
        price: 30,
        category: "hot",
        categoryName: "مشروبات ساخنة",
        icon: "🍵"
    },

    {
        id: 2,
        name: "شاي أخضر",
        price: 35,
        category: "hot",
        categoryName: "مشروبات ساخنة",
        icon: "🍃"
    },

    {
        id: 3,
        name: "قهوة تركي",
        price: 40,
        category: "hot",
        categoryName: "مشروبات ساخنة",
        icon: "☕"
    },

    {
        id: 4,
        name: "قهوة بندق",
        price: 50,
        category: "hot",
        categoryName: "مشروبات ساخنة",
        icon: "☕"
    },

    {
        id: 5,
        name: "إسبريسو",
        price: 50,
        category: "hot",
        categoryName: "مشروبات ساخنة",
        icon: "☕"
    },

    {
        id: 6,
        name: "كابتشينو",
        price: 65,
        category: "hot",
        categoryName: "مشروبات ساخنة",
        icon: "🥛"
    },

    {
        id: 7,
        name: "لاتيه",
        price: 65,
        category: "hot",
        categoryName: "مشروبات ساخنة",
        icon: "☕"
    },

    {
        id: 8,
        name: "هوت شوكليت",
        price: 65,
        category: "hot",
        categoryName: "مشروبات ساخنة",
        icon: "🍫"
    },


    // Cold Drinks
    {
        id: 9,
        name: "آيس كوفي",
        price: 65,
        category: "cold",
        categoryName: "مشروبات باردة",
        icon: "🧊"
    },

    {
        id: 10,
        name: "آيس لاتيه",
        price: 70,
        category: "cold",
        categoryName: "مشروبات باردة",
        icon: "🥤"
    },

    {
        id: 11,
        name: "آيس موكا",
        price: 75,
        category: "cold",
        categoryName: "مشروبات باردة",
        icon: "🍫"
    },

    {
        id: 12,
        name: "فرابيه كراميل",
        price: 80,
        category: "cold",
        categoryName: "مشروبات باردة",
        icon: "🥤"
    },

    {
        id: 13,
        name: "فرابيه شوكولاتة",
        price: 80,
        category: "cold",
        categoryName: "مشروبات باردة",
        icon: "🍫"
    },

    {
        id: 14,
        name: "آيس تي",
        price: 50,
        category: "cold",
        categoryName: "مشروبات باردة",
        icon: "🧊"
    },


    // Fresh
    {
        id: 15,
        name: "برتقال فريش",
        price: 55,
        category: "fresh",
        categoryName: "عصائر وفريش",
        icon: "🍊"
    },

    {
        id: 16,
        name: "مانجا",
        price: 65,
        category: "fresh",
        categoryName: "عصائر وفريش",
        icon: "🥭"
    },

    {
        id: 17,
        name: "فراولة",
        price: 60,
        category: "fresh",
        categoryName: "عصائر وفريش",
        icon: "🍓"
    },

    {
        id: 18,
        name: "ليمون نعناع",
        price: 50,
        category: "fresh",
        categoryName: "عصائر وفريش",
        icon: "🍋"
    },

    {
        id: 19,
        name: "موهيتو",
        price: 65,
        category: "fresh",
        categoryName: "عصائر وفريش",
        icon: "🍹"
    },

    {
        id: 20,
        name: "كوكتيل فواكه",
        price: 75,
        category: "fresh",
        categoryName: "عصائر وفريش",
        icon: "🍹"
    },


    // Snacks
    {
        id: 21,
        name: "كرواسون جبنة",
        price: 60,
        category: "snacks",
        categoryName: "فطار وسناكس",
        icon: "🥐"
    },

    {
        id: 22,
        name: "كرواسون شوكولاتة",
        price: 65,
        category: "snacks",
        categoryName: "فطار وسناكس",
        icon: "🥐"
    },

    {
        id: 23,
        name: "بان كيك",
        price: 80,
        category: "snacks",
        categoryName: "فطار وسناكس",
        icon: "🥞"
    },

    {
        id: 24,
        name: "وافل",
        price: 85,
        category: "snacks",
        categoryName: "فطار وسناكس",
        icon: "🧇"
    },

    {
        id: 25,
        name: "بطاطس",
        price: 55,
        category: "snacks",
        categoryName: "فطار وسناكس",
        icon: "🍟"
    },

    {
        id: 26,
        name: "تشيز كيك",
        price: 80,
        category: "snacks",
        categoryName: "فطار وسناكس",
        icon: "🍰"
    },

    {
        id: 27,
        name: "براونيز",
        price: 70,
        category: "snacks",
        categoryName: "فطار وسناكس",
        icon: "🍫"
    },

    {
        id: 28,
        name: "مولتن كيك",
        price: 85,
        category: "snacks",
        categoryName: "فطار وسناكس",
        icon: "🍰"
    },


    // Sandwiches
    {
        id: 29,
        name: "كريب فراخ",
        price: 110,
        category: "sandwiches",
        categoryName: "ساندوتشات",
        icon: "🌯"
    },

    {
        id: 30,
        name: "كريب ميكس جبن",
        price: 100,
        category: "sandwiches",
        categoryName: "ساندوتشات",
        icon: "🌯"
    },

    {
        id: 31,
        name: "برجر",
        price: 120,
        category: "sandwiches",
        categoryName: "ساندوتشات",
        icon: "🍔"
    },

    {
        id: 32,
        name: "تشيكن ساندوتش",
        price: 110,
        category: "sandwiches",
        categoryName: "ساندوتشات",
        icon: "🥪"
    },

    {
        id: 33,
        name: "كلوب ساندوتش",
        price: 130,
        category: "sandwiches",
        categoryName: "ساندوتشات",
        icon: "🥪"
    }

];


/* ================= CART ================= */

let cart = JSON.parse(localStorage.getItem("takeyaCart")) || [];


/* ================= DISPLAY PRODUCTS ================= */

function displayProducts(list = products) {

    const container =
        document.getElementById("productsContainer");

    if (list.length === 0) {

        container.innerHTML = `
            <div class="empty-cart">
                مفيش نتائج مطابقة للبحث 😔
            </div>
        `;

        return;
    }

    container.innerHTML = list.map(product => `

        <div class="product-card">

            <div class="product-icon">
                ${product.icon}
            </div>

            <h3>${product.name}</h3>

            <p class="product-category">
                ${product.categoryName}
            </p>

            <div class="product-bottom">

                <span class="price">
                    ${product.price} ج
                </span>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    +
                </button>

            </div>

        </div>

    `).join("");
}


/* ================= FILTER ================= */

function filterMenu(category, button) {

    document
        .querySelectorAll(".category")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    document.getElementById("searchInput").value = "";

    if (category === "all") {

        displayProducts(products);

    } else {

        const filtered =
            products.filter(
                product => product.category === category
            );

        displayProducts(filtered);
    }
}


/* ================= SEARCH ================= */

function searchMenu() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();

    const result =
        products.filter(product =>
            product.name.toLowerCase().includes(search)
        );

    displayProducts(result);
}


/* ================= ADD TO CART ================= */

function addToCart(id) {

    const product =
        products.find(product => product.id === id);

    const existing =
        cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();
    updateCart();

    openCart();
}


/* ================= UPDATE CART ================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    const totalItems =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

    cartCount.textContent = totalItems;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                🛒
                <br><br>
                السلة فاضية
                <br>
                اختار حاجة من المنيو ❤️
            </div>
        `;

        cartTotal.textContent = "0 ج";

        return;
    }


    cartItems.innerHTML =
        cart.map(item => `

            <div class="cart-item">

                <div class="cart-item-icon">
                    ${item.icon}
                </div>

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>
                        ${item.price * item.quantity} ج
                    </p>

                </div>

                <div class="quantity">

                    <button
                        onclick="changeQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                </div>

            </div>

        `).join("");


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );

    cartTotal.textContent = `${total} ج`;
}


/* ================= QUANTITY ================= */

function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== id);

    }

    saveCart();
    updateCart();
}


/* ================= SAVE CART ================= */

function saveCart() {

    localStorage.setItem(
        "takeyaCart",
        JSON.stringify(cart)
    );
}


/* ================= OPEN CART ================= */

function openCart() {

    document
        .getElementById("cart")
        .classList.add("show");

    document
        .getElementById("overlay")
        .classList.add("show");
}


/* ================= CLOSE CART ================= */

function closeCart() {

    document
        .getElementById("cart")
        .classList.remove("show");

    document
        .getElementById("overlay")
        .classList.remove("show");
}


/* ================= CHECKOUT ================= */

function checkout() {

    if (cart.length === 0) {

        alert("السلة فاضية، اختار حاجة الأول ☕");

        return;
    }

    closeCart();

    document
        .getElementById("orderModal")
        .classList.add("show");

    cart = [];

    saveCart();
    updateCart();
}


/* ================= CLOSE ORDER ================= */

function closeOrderModal() {

    document
        .getElementById("orderModal")
        .classList.remove("show");
}


/* ================= INITIALIZE ================= */

displayProducts();
updateCart();

