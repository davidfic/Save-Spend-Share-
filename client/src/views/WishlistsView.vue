<template>
  <div class="container">
    <div class="wishlists">
      <Header/>
      <Wishlists v-bind:wishlists="wishlists"/>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Wishlists from "../components/Wishlists.vue";

import axios from "axios";

export default {
  name: "WishlistsView",
  props: ["wishlist"],
  components: {
    Wishlists
  },
  data() {
    return {
      wishlists: []
    };
  },
  methods: {},
  created() {
    axios
      .get("http://localhost:5000/api/wishlists")
      .then(res => (this.wishlists = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>
