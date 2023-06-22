<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import { page } from '$app/stores'
    let isOpen = false
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Noah Site</a>
      <button 
        on:click={()=>isOpen=!isOpen}
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class:show={isOpen} class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a  class:active = {$page.url.pathname === '/'} class="nav-link " aria-current="page" href="/">Home</a>
          </li>
          <li  class="nav-item">
            <a class:active = {$page.url.pathname === '/about'} class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class:active = {$page.url.pathname === '/contact'}  class="nav-link" href="/contact">Contact</a>
          </li>
      </div>
    </div>
  </nav>

<main class="container">
    <slot />
</main>