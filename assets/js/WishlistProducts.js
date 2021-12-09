//productlist
let WproductList = document.getElementById("WproductList");
let Wproducthtml = "";
for (let i = 0; i < 10; i++) {
  Wproducthtml += `<div class="col-lg-3 col-md-3 mb-4">
  <div class="card shadow">
      <a href="/product/ProductDetails.html">
          <img src="https://mdbootstrap.com/img/new/standard/nature/137.jpg" class="card-img-top" alt="..." />
          </a>
          <span
          class="
            btn btn-icon btn-danger
            position-absolute
            top-0
            end-0
            right-28
            py-1
            px-2
            m-2
          "
          ><i class="far fa-trash-alt"></i></span>
      <div class="card-body">
          <div class="card-text">
              <a href="/product/ProductDetails.html">
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
WproductList.innerHTML = Wproducthtml;
