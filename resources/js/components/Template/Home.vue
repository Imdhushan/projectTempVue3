<template>

  <div class="container">

    <div class="row g-3 mb-3 mt-4">
      <div class="col-md-12 col-sm-12 col-lg-12 ">
      <div class="card bg-dark text-white overflow-hidden light" style="max-width: 100rem; max-height: 20rem;">
        <div class="card-img-top"><img class="img-fluid" src="/assets/img/generic/3.jpg" alt="Card image" /></div>
        <div class="card-img-overlay d-flex align-items-end">
          <div>
            <h5 class="card-title text-white">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-md-12 col-sm-12 col-lg-6 col-xxl-3" v-for="(card, index) in cardIconStatData"
        :key="index">

        <CardIconStat
            :title="card.title"
            :headingTag="'h4'"
            :badgeText="card.badgeText"
            :icon="card.icon"
            :href="card.href"
            :imageIndex="card.imageIndex"
            :textClass="card.textClass"
            :iconColor="card.colorCode"
        />
      </div>
    </div>

  </div>




</template>

<script setup>
import {ref} from "vue";
import CardIconStat from "../bootstrap/CardIconStat.vue";
import CardBody from "../bootstrap/CardBody.vue";
import Card from "../bootstrap/Card.vue";
import CardStat from "../bootstrap/CardStat.vue";

const user = JSON.parse(localStorage.getItem('user'));

const cardIconStatData = ref([
  {
    title: 'Tourism Sector',
    badgeText: '4 shorts',
    icon: 'fas fa-user-clock fs-5',
    colorCode:'#C5E1A5',
    href: '/tourismsector/asset',
    imageIndex: 2,
    textClass: 'text-warning'
  },
  {
    title: 'Boat Building',
    badgeText: '4 shorts',
    icon: 'fas fa-chalkboard-teacher fs-5',
    colorCode:'#64DD17',
    href: '/leave-requests',
    imageIndex: 2,
    textClass: 'text-warning'
  },
  {
    title: 'Conservation Base Financing',
    badgeText: '4 shorts',
    icon: 'fas fa-user-check fs-5',
    colorCode:'#D1C4E9',
    href: '/attendance',
    imageIndex: 2,
    textClass: 'text-warning'
  },
  {
    title: 'Renewable Energy',
    badgeText: '4 shorts',
    icon: 'far fa-handshake fs-5',
    colorCode:'#B39DDB',
    href: '#',
    imageIndex: 2,
    textClass: 'text-warning'
  },

  




]);



</script>
