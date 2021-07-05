<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Bilemo 📱</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                  to="/mobiles"
                  :class="['nav-link', this.$route.path === '/mobiles' ? 'active': '']"
              >Mobiles</router-link>
            </li>
            <li class="nav-item">
              <router-link
                  to="/utilisateurs"
                  :class="['nav-link', this.$route.path === '/utilisateurs' ? 'active': '']"
              >Utilisateurs</router-link>
            </li>
            <li class="nav-item">
              <router-link
                  to="/clients"
                  :class="['nav-link', this.$route.path === '/clients' ? 'active': '']"
              >Clients</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
