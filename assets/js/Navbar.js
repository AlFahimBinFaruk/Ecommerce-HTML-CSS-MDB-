let navbar = document.getElementById("navbar");

navbar.innerHTML = `<div class="container-fluid">
<!-- Toggle button -->
<button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <i class="fas fa-bars"></i>
</button>

<!-- Collapsible wrapper -->
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <!-- Navbar brand -->
  <h5 class="brandLogo">
    <a class="navbar-brand mt-2 mt-lg-0" href="/home.html"> TechStore </a>
  </h5>
  <!-- Left links -->
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" href="#">Today's Deal</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Sell</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Your TechStore.com</a>
    </li>
  </ul>
  <!-- Left links -->
</div>
<!-- Collapsible wrapper -->

<!-- Right elements -->
<div class="d-flex align-items-center">
  <!-- Icon -->
  <a class="text-reset me-3" href="/cart/cart.html">
    <i class="fas fa-shopping-cart"></i>
  </a>

  <!-- Notifications -->
  <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button"
    data-mdb-toggle="dropdown" aria-expanded="false">
    <i class="fas fa-bell"></i>
    <span class="badge rounded-pill badge-notification bg-danger">1</span>
  </a>
  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
    <li>
      <a class="dropdown-item" href="#">Some news</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Another news</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Something else here</a>
    </li>
  </ul>

  <!-- Avatar -->
  <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuLink"
    role="button" data-mdb-toggle="dropdown" aria-expanded="false">
    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-circle" height="25" alt=""
      loading="lazy" />
  </a>
  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
    <li>
      <a class="dropdown-item" href="/auth/Account.html">My profile</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Settings</a>
    </li>
    <li>
      <a class="dropdown-item" href="/auth/Login.html">Login</a>
    </li>
    <li>
      <a class="dropdown-item" href="#">Logout</a>
    </li>
  </ul>
</div>
<!-- Right elements -->
</div>`;
