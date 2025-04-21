let slide  = document.querySelectorAll('.brands')
let cards = Array.from(document.querySelectorAll('.card'))
count = 0

slide.forEach((val, index)=>{
    val.style.left = `${index * 100}%`
})

function myfunc(){
slide.forEach((curval)=>{
    curval.style.transform = `translate(-${count *100}%)`
})
}

setInterval(()=>{
     count ++
     if(count == slide.length

     ){
        count = 0
     }

    myfunc()

}
    
    ,2000)

cards.forEach(element => {
    element.addEventListener("click", ()=>{
        window.open ("https://sfhealthtech.com/collections/gym-accessories", "_blank")
    })
});


const products = [
    {
        name : "Creatine supplement",
        price : 564 ,
        image : "/images/andrey-khoviakov-CywnFj7dSmo-unsplash.jpg",
        description : "a bag that can hold your gains"
    },
    {
        name : "Treadmill",
        price : 234 ,
        image : "/images/alina-chernysheva-JA2S6sJWleg-unsplash.jpg",
        description : "a bag that can hold your gains"
    },
    {
        name : "Protein",
        price : 653 ,
        image : "/images/andrey-khoviakov-CywnFj7dSmo-unsplash.jpg",
        description : "a bag that can hold your gains"
    },
    {
        name : "L Citrulline mallate",
        price : 99 ,
        image : "/images/andrey-khoviakov-CywnFj7dSmo-unsplash.jpg",
        description : "a bag that can hold your gains"
    },
    {
        name : "Weights",
        price : 349 ,
        image : "/images/brett-jordan-U2q73PfHFpM-unsplash.jpg",
        description : "a bag that can hold your gains"
    },
    {
        name : "Health tracking watch",
        price : 189 ,
        image : "/images/debagni-sarkhel-0jIxHsotdac-unsplash.jpg",
        description : "a bag that can hold your gains"
    },
    
]

function renderproducts (){
    const productscontainer = document.querySelector(".products")
    productscontainer.innerHTML = ""

    products.forEach(product => {
        const productcard = `
    <div class="card">
        <img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <p>costs you only at <span>$${product.price}</span> -/only</p>
        <p>${product.description}</p>
        <button onclick = "addtocart('${product.name}')" class="add-to-cart">Add to Cart</button>
    </div>
`


            productscontainer.innerHTML += productcard
    });
}

renderproducts()


// function addproducts(){
//     const names = document.querySelector("#name")
//     const prices = document.querySelector("#price")
//     const images = document.querySelector("#image")
//     const descriptions = document.querySelector("#description")
//     const submit = document.querySelector("#button")


//     submit.addEventListener("click", ()=>{
//         products.push({
//             name : names.value,
//             price : prices.value,
//             image : images.value,
//             description : descriptions.value
//         })
//     })


// }

// addproducts()

let cartCount = 0;

function updateCartDisplay() {
    document.querySelector(".cart-count").textContent = cartCount;
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        cartCount++;
        updateCartDisplay();
    }
});


let cart = [];

function addtocart(productName) {
  const product = products.find(p => p.name === productName);
  cart.push(product);
  updateCartCount();
  createcartui();
}

const cartBtn = document.getElementById("cart-btn");
const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");

cartBtn.addEventListener("click", () => {
  cartPopup.style.display = cartPopup.style.display === "none" ? "block" : "none";
});

closeCart.addEventListener("click", () => {
  cartPopup.style.display = "none";
});

function updateCartCount() {
  document.querySelector(".cart-count").textContent = cart.length;
}


function createcartui() {
  const cartlist = document.getElementById("cartlist");
  const totalPrice = document.getElementById("total-price");
  cartlist.innerHTML = "";
  let total = 0;

  cart.forEach((product, index) => {
    total += product.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${product.name} - $${product.price}
      <button onclick="removeItem(${index})" style="margin-left: 10px;">❌</button>
    `;
    cartlist.appendChild(li);
  });

  totalPrice.textContent = total;
}


function removeItem(index) {
  cart.splice(index, 1);
  updateCartCount();
  createcartui();
}
