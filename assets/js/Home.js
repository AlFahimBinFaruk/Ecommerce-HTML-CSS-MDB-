// categorylist
let categoryList = document.getElementById("categoryList");
let categoryhtml = "";
for (let i = 0; i < 10; i++) {
  categoryhtml += `<div class="col-lg-3 col-md-3 col-6 mb-4">
  <div class="card shadow">
      <a href="product/Shop.html">
          <img src="https://mdbootstrap.com/img/new/standard/nature/134.jpg" class="card-img-top" alt="..." />
      </a>
      <div class="card-body">
          <a href="product/Shop.html">
              <p class="card-text">
                  Electronics.
              </p>
          </a>
      </div>
  </div>
</div>`;
}
categoryList.innerHTML = categoryhtml;




