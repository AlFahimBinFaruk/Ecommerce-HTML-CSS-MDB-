//suggestedProductList
let suggestedProductList = document.getElementById("suggestedProductList");

let suggestedProducthtml = "";

for (let i = 0; i < 15; i++) {
  suggestedProducthtml += `<div class="col-lg-2 col-md-2 col-6 mb-4">
  <div class="card shadow">
      <img src="https://mdbootstrap.com/img/new/standard/nature/137.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
          <div class="card-text">
              <h6>Macbook Air M1</h6>
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

suggestedProductList.innerHTML = suggestedProducthtml;