//productlist
let productList = document.getElementById("productList");
let producthtml = "";
for (let i = 0; i < 10; i++) {
  producthtml += `<div class="col-lg-3 col-md-3 mb-4">
  <div class="card shadow">
      <a href="ProductDetails.html">
          <img src="https://mdbootstrap.com/img/new/standard/nature/137.jpg" class="card-img-top" alt="..." />
      </a>
      <div class="card-body">
          <div class="card-text">
              <a href="ProductDetails.html">
                  <h6>Macbook Air M1</h6>
              </a>
              <p>
                  Price: <b>$1236</b>.
              </p>
              <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
              </div>
          </div>
      </div>
  </div>
</div>`;
}
productList.innerHTML = producthtml;