const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  // set items to Local Srtorage and Session
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (e) => {
  if (e.target.className == "fa-solid fa-minus") {
    if(e.target.parentElement.querySelector(".quantity").innerText >1 ){
      e.target.parentElement.querySelector(".quantity").innerText --;
    }else{
      if(confirm("Product will be removed ?") ){
        e.target.parentElement.parentElement.parentElement.remove();

      }
    }
    
    
  } else if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.innerText ++;
    
  } else if (e.target.className == "remove-product") {
    
  } else {
    
  }
});
