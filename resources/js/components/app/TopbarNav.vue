<script setup lang="ts">
import { useRouter } from 'vue-router';
import { getCurrentInstance, onMounted } from 'vue';

defineProps<{
  menu: {
    icon: String,
    text: String,
    url: String,
    highlight: Boolean,
    children: Object
  };
}>();

function subIsActive(urls: Array<{ url: String }>) {
  const currentRoute = useRouter().currentRoute.value.path;
  return urls.some(urlObj => urlObj.url === currentRoute);
}

const { proxy } = getCurrentInstance();
const signOut = async () => {
  localStorage.removeItem('user');
  window.location.reload();
};

const user = JSON.parse(localStorage.getItem('user') || '{}');

onMounted(() => {
  // Additional logic if needed on mount
});
</script>

<template>
  
  <nav class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-glass" data-navbar-darken-on-scroll="primary">
  <div class="container-fluid"><a class="navbar-brand" href="#">BLUE INVESTMENT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLightExample" aria-controls="navbarLightExample" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarLightExample">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Profile</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Tourism Sector</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Boat Building Sector</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Conservation Base Financing</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Renewable Energy</a></li>
        <!-- <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarLightExampleDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tourism Sector</a>
          <div class="dropdown-menu py-0" aria-labelledby="navbarLightExampleDropdown">
            <div class="bg-white dark__bg-1000 py-2 rounded-3"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a>
              <hr class="dropdown-divider" /><a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </li> -->
        <li class="nav-item"><a class="nav-link" href="#">Readings</a></li>
        <!-- <li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li> -->
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-light" type="submit">Search</button>
      </form> -->
      <div class="col-auto">
        <div class="avatar avatar-xl">
          <img class="rounded-circle" src="/assets/img/team/1.jpg" alt="" />
        </div>
      </div>
    </div>
    
  </div>
</nav>

  
</template>

<style>
/* Add any custom styles here */
</style>
