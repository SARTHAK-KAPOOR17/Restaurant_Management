
    /*const toggle = document.getElementById("modeToggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });

    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to logout?")) {
        window.location.href = "login.html"; 
      }
    });

    // Sample menu data
    const menu = {
  "Appetizers": [
    { name: "Golden Spring Rolls", price: "₹150", img: "https://source.unsplash.com/400x300/?asian-food" },
    { name: "Herbed Garlic Bread", price: "₹120", img: "https://source.unsplash.com/400x300/?garlic-bread" },
    { name: "Cheese Loaded Nachos", price: "₹200", img: "https://source.unsplash.com/400x300/?nachos" },
    { name: "Stuffed Portobello Mushrooms", price: "₹200", img: "https://source.unsplash.com/400x300/?mushrooms" },
    { name: "Spicy Chicken Wings", price: "₹200", img: "https://source.unsplash.com/400x300/?chicken-wings" },
    { name: "Crispy Prawn Tempura", price: "₹200", img: "https://source.unsplash.com/400x300/?prawns" },
    { name: "Lamb Seekh Kababs", price: "₹200", img: "https://source.unsplash.com/400x300/?lamb" },
    { name: "Grilled Chicken Skewers", price: "₹250", img: "https://source.unsplash.com/400x300/?grilled-chicken" },
    { name: "Fish Fingers with Dip", price: "₹250", img: "https://source.unsplash.com/400x300/?fish-sticks" },
    { name: "Roasted Red Pepper Hummus", price: "₹180", img: "https://source.unsplash.com/400x300/?hummus" },
    { name: "Stuffed Mushrooms", price: "₹200", img: "https://source.unsplash.com/400x300/?stuffed-mushrooms" },
    { name: "Crispy Tofu Bites", price: "₹220", img: "https://source.unsplash.com/400x300/?tofu" },
    { name: "Spiced Vegetable Spring Rolls", price: "₹180", img: "https://source.unsplash.com/400x300/?vegetable-spring-rolls" },
    { name: "Grilled Vegetable Skewers", price: "₹200", img: "https://source.unsplash.com/400x300/?grilled-vegetables" }
  ],
  "Beverages": [
    { name: "Mojito", price: "₹180", img: "https://source.unsplash.com/400x300/?mojito" },
    { name: "Cold Coffee", price: "₹150", img: "https://source.unsplash.com/400x300/?cold-coffee" },
    { name: "Lemonade", price: "₹100", img: "https://source.unsplash.com/400x300/?lemonade" },
    { name: "Classic Cappuccino", price: "₹150", img: "https://source.unsplash.com/400x300/?cappuccino" },
    { name: "Espresso Shot", price: "₹120", img: "https://source.unsplash.com/400x300/?espresso" },
    { name: "Iced Latte", price: "₹180", img: "https://source.unsplash.com/400x300/?iced-latte" },
    { name: "Freshly Squeezed Orange Juice", price: "₹130", img: "https://source.unsplash.com/400x300/?orange-juice" },
    { name: "Green Detox Smoothie", price: "₹200", img: "https://source.unsplash.com/400x300/?green-smoothie" },
    { name: "Mint Lemonade", price: "₹120", img: "https://source.unsplash.com/400x300/?mint-lemonade" },
    { name: "Iced Cold Brew Coffee", price: "₹180", img: "https://source.unsplash.com/400x300/?cold-brew" },
    { name: "Herbal Chamomile Tea", price: "₹140", img: "https://source.unsplash.com/400x300/?herbal-tea" },
    { name: "Mango Lassi", price: "₹150", img: "https://source.unsplash.com/400x300/?mango-lassi" },
    { name: "Sparkling Water with Lime", price: "₹100", img: "https://source.unsplash.com/400x300/?sparkling-water" }
  ],
  "Starters": [
    { name: "Paneer Tikka Skewers", price: "₹220", img: "https://source.unsplash.com/400x300/?paneer-tikka" },
    { name: "Cheese Garlic Breadsticks", price: "₹180", img: "https://source.unsplash.com/400x300/?garlic-bread" },
    { name: "Stuffed Mushrooms", price: "₹200", img: "https://source.unsplash.com/400x300/?stuffed-mushrooms" },
    { name: "Crispy Corn Fritters", price: "₹190", img: "https://source.unsplash.com/400x300/?corn-fritters" },
    { name: "Vegetable Spring Rolls", price: "₹180", img: "https://source.unsplash.com/400x300/?vegetable-spring-rolls" },
    { name: "Spicy Chicken Wings", price: "₹250", img: "https://source.unsplash.com/400x300/?chicken-wings" },
    { name: "Garlic Prawns", price: "₹300", img: "https://source.unsplash.com/400x300/?garlic-prawns" },
    { name: "Chicken Satay Skewers", price: "₹280", img: "https://source.unsplash.com/400x300/?chicken-satay" },
    { name: "Fish Fingers", price: "₹260", img: "https://source.unsplash.com/400x300/?fish-sticks" },
    { name: "Grilled Vegetable Skewers", price: "₹200", img: "https://source.unsplash.com/400x300/?grilled-vegetables" },
    { name: "Vegan Spring Rolls", price: "₹180", img: "https://source.unsplash.com/400x300/?vegan-spring-rolls" },
    { name: "Chickpea & Spinach Patties", price: "₹190", img: "https://source.unsplash.com/400x300/?chickpea-patties" },
    { name: "Roasted Cauliflower Bites", price: "₹200", img: "https://source.unsplash.com/400x300/?roasted-cauliflower" },
    { name: "Vegan Hummus with Pita", price: "₹160", img: "https://source.unsplash.com/400x300/?vegan-hummus" }
  ],
  "Main Course": [
    { name: "Paneer Butter Masala", price: "₹280", img: "https://source.unsplash.com/400x300/?paneer-butter-masala" },
    { name: "Vegetable Biryani", price: "₹250", img: "https://source.unsplash.com/400x300/?vegetable-biryani" },
    { name: "Palak Paneer", price: "₹260", img: "https://source.unsplash.com/400x300/?palak-paneer" },
    { name: "Mix Veg Curry", price: "₹220", img: "https://source.unsplash.com/400x300/?mixed-vegetable-curry" },
    { name: "Mushroom Masala", price: "₹240", img: "https://source.unsplash.com/400x300/?mushroom-masala" },
    { name: "Chole Masala", price: "₹200", img: "https://source.unsplash.com/400x300/?chole-masala" },
    { name: "Vegetable Korma", price: "₹250", img: "https://source.unsplash.com/400x300/?vegetable-korma" },
    { name: "Butter Chicken", price: "₹320", img: "https://source.unsplash.com/400x300/?butter-chicken" },
    { name: "Chicken Biryani", price: "₹300", img: "https://source.unsplash.com/400x300/?chicken-biryani" },
    { name: "Mutton Rogan Josh", price: "₹400", img: "https://source.unsplash.com/400x300/?mutton-rogan-josh" },
    { name: "Grilled Fish Fillet", price: "₹350", img: "https://source.unsplash.com/400x300/?grilled-fish" },
    { name: "Prawn Masala", price: "₹360", img: "https://source.unsplash.com/400x300/?prawn-masala" },
    { name: "Chicken Tikka Masala", price: "₹330", img: "https://source.unsplash.com/400x300/?chicken-tikka-masala" },
    { name: "Lamb Curry", price: "₹380", img: "https://source.unsplash.com/400x300/?lamb-curry" },
    { name: "Vegan Thai Green Curry", price: "₹280", img: "https://source.unsplash.com/400x300/?thai-green-curry" },
    { name: "Tofu Stir Fry", price: "₹260", img: "https://source.unsplash.com/400x300/?tofu-stir-fry" },
    { name: "Vegan Lentil Stew", price: "₹220", img: "https://source.unsplash.com/400x300/?lentil-stew" },
    { name: "Chickpea Coconut Curry", price: "₹240", img: "https://source.unsplash.com/400x300/?chickpea-curry" },
    { name: "Vegan Vegetable Paella", price: "₹300", img: "https://source.unsplash.com/400x300/?vegetable-paella" },
    { name: "Grilled Portobello Mushrooms", price: "₹260", img: "https://source.unsplash.com/400x300/?portobello-mushrooms" }
  ],
  "Desserts": [
    { name: "Classic NewYork Cheese Cake", price: "₹200", img: "https://source.unsplash.com/400x300/?cheesecake" },
    { name: "Chocolate Lava", price: "₹240", img: "https://source.unsplash.com/400x300/?chocolate-lava" },
    { name: "Tiramisu with Espresso Drizzle", price: "₹300", img: "https://source.unsplash.com/400x300/?tiramisu" },
    { name: "Red Velvet Pastry with Cream Cheese Frosting", price: "₹290", img: "https://source.unsplash.com/400x300/?red-velvet-cake" },
    { name: "Blueberry Cheesecake Slice", price: "₹210", img: "https://source.unsplash.com/400x300/?blueberry-cheesecake" },
    { name: "Gulab Jamun with Rabri", price: "₹290", img: "https://source.unsplash.com/400x300/?gulab-jamun" },
    { name: "Baklava (Middle Eastern Dessert)", price: "₹299", img: "https://source.unsplash.com/400x300/?baklava" },
    { name: "French Crème Brûlée", price: "₹200", img: "https://source.unsplash.com/400x300/?creme-brulee" },
    { name: "Italian Panna Cotta with Berry Compote", price: "₹500", img: "https://source.unsplash.com/400x300/?panna-cotta" },
    { name: "Belgian Chocolate Ice Cream Sundae", price: "₹600", img: "https://source.unsplash.com/400x300/?chocolate-ice-cream" },
    { name: "Mango Kulfi with Pistachio Crumble", price: "₹200", img: "https://source.unsplash.com/400x300/?mango-kulfi" },
    { name: "Tender Coconut Ice Cream", price: "₹200", img: "https://source.unsplash.com/400x300/?coconut-ice-cream" },
    { name: "Strawberry Sorbet (Vegan)", price: "₹700", img: "https://source.unsplash.com/400x300/?strawberry-sorbet" },
    { name: "Oreo Brownie Sundae", price: "₹200", img: "https://source.unsplash.com/400x300/?oreo-brownie" },
  ]
};

    function shuffle(arr) {
      return arr.sort(() => Math.random() - 0.5);
    }

    function displayOrders(category) {
      const list = document.getElementById("ordersList");
      const title = document.getElementById("orderTitle");
      title.textContent = category + " Orders";
      list.innerHTML = "";

      const shuffled = shuffle(menu[category]);
      shuffled.forEach((item, index) => {
        list.innerHTML += `
          <div class="order-card">
            <img src="${item.img}" alt="${item.name}">
            <div class="order-overlay">
              <h3>${item.name}</h3>
              <p>Order #${1000 + index} | Table ${Math.ceil(Math.random()*10)}</p>
              <p class="price">${item.price}</p>
            </div>
          </div>
        `;
      });
    }

    displayOrders("Main Course");

    document.querySelectorAll(".category-nav a").forEach(link => {
      link.addEventListener("click", () => {
        displayOrders(link.dataset.category);
      });
    });
  
*/
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "login.html"; 
  }
});

// ✅ Updated menu with Pexels images
const menu = {
  "Appetizers": [
    { name: "Golden Spring Rolls", price: "₹150", img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Herbed Garlic Bread", price: "₹120", img: "https://images.pexels.com/photos/4198028/pexels-photo-4198028.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Cheese Loaded Nachos", price: "₹200", img: "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Spicy Chicken Wings", price: "₹200", img: "https://images.pexels.com/photos/60616/chicken-wings-food-snack-spicy-60616.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ],
  "Beverages": [
    { name: "Mojito", price: "₹180", img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Cold Coffee", price: "₹150", img: "https://images.pexels.com/photos/3650788/pexels-photo-3650788.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Lemonade", price: "₹100", img: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ],
  "Main Course": [
    { name: "Butter Chicken", price: "₹320", img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Chicken Biryani", price: "₹300", img: "https://images.pexels.com/photos/4106485/pexels-photo-4106485.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Paneer Butter Masala", price: "₹280", img: "https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ],
  "Desserts": [
    { name: "Classic Cheesecake", price: "₹200", img: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Chocolate Lava Cake", price: "₹240", img: "https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Tiramisu", price: "₹300", img: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ]
};

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function displayOrders(category) {
  const list = document.getElementById("ordersList");
  const title = document.getElementById("orderTitle");
  title.textContent = category + " Orders";
  list.innerHTML = "";

  const shuffled = shuffle(menu[category]);
  shuffled.forEach((item, index) => {
    list.innerHTML += `
      <div class="order-card">
        <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Food+Image'">
        <div class="order-overlay">
          <h3>${item.name}</h3>
          <p>Order #${1000 + index} | Table ${Math.ceil(Math.random()*10)}</p>
          <p class="price">${item.price}</p>
        </div>
      </div>
    `;
  });
}

displayOrders("Main Course");

document.querySelectorAll(".category-nav a").forEach(link => {
  link.addEventListener("click", () => {
    displayOrders(link.dataset.category);
  });
});
