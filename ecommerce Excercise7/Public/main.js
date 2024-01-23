// document.addEventListener("DOMContentLoaded", function () {
//     // Fetch data from the Fake Store API
//     fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(data => {
//             // Create and populate the category dropdown
//             const categorySelect = document.getElementById('categorySelect');
//             const categories = [...new Set(data.map(product => product.category))];
//             categories.forEach(category => {
//                 const option = document.createElement('option');
//                 option.value = category;
//                 option.textContent = category;
//                 categorySelect.appendChild(option);
//             });

//             // Display all products initially
//             displayProducts(data);

//             // Event listener for category selection change
//             categorySelect.addEventListener('change', function () {
//                 const selectedCategory = this.value;
//                 const filteredProducts = selectedCategory
//                     ? data.filter(product => product.category === selectedCategory)
//                     : data;
//                 displayProducts(filteredProducts);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));

//     // Function to display products in Bootstrap cards
//     function displayProducts(products) {
//         const productCardsContainer = document.getElementById('productCardsContainer');
//         productCardsContainer.innerHTML = '';

//         products.forEach(product => {
//             const card = document.createElement('div');
//             card.classList.add('col-md-4', 'mb-4');
//             card.innerHTML = `
//                 <div class="card">
//                     <img src="${product.image}" class="card-img-top" alt="${product.title}">
//                     <div class="card-body">
//                         <h5 class="card-title">${product.title}</h5>
//                         <p class="card-text">${product.description}</p>
//                         <p class="card-text"><strong>$${product.price.toFixed(2)}</strong></p>
//                     </div>
//                 </div>
//             `;
//             productCardsContainer.appendChild(card);
//         });
//     }
// });
