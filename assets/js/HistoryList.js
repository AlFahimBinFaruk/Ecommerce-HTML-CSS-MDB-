//historylist
let historyList = document.getElementById("historyList");

let historyhtml = "";

for (let i = 0; i < 15; i++) {
  historyhtml += `<div class="col-lg-2 col-md-2 col-6 mb-4">
  <div class="card shadow">
      <a href="/product/ProductDetails.html">
          <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" class="card-img-top" alt="..." />
      </a>
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

historyList.innerHTML = historyhtml;
