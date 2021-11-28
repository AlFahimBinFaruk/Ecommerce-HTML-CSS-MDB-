// categorylist
let categoryList = document.getElementById("categoryList");
let categoryhtml = "";
for (let i = 0; i < 10; i++) {
  categoryhtml += `<div class="col-lg-3 col-md-3 col-6 mb-4">
<div class="card shadow">
<img
  src="https://mdbootstrap.com/img/new/standard/nature/134.jpg"
  class="card-img-top"
  alt="..."
/>
<div class="card-body">
  <p class="card-text">
    Electronics.
  </p>
</div>
</div>
</div>`;
}
categoryList.innerHTML = categoryhtml;



//historylist
let historyList = document.getElementById("historyList");
let historyhtml = "";
for (let i = 0; i < 15; i++) {
  historyhtml += `<div class="col-lg-2 col-md-2 col-6 mb-4">
    <div class="card shadow">
    <img
      src="https://mdbootstrap.com/img/new/standard/nature/137.jpg"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <p class="card-text">
        Macbook Air M1.
      </p>
    </div>
    </div>
    </div>`;
}
historyList.innerHTML = historyhtml;
