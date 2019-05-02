
<template>
    <div >      
      <div class="container">
        <div class="row">
          <div class="col-sm col-sm-4">
            <div class="card">
              <div class="card-header">
                  {{wishlist.name}}
                  test
              </div>
              <div class="card-body" id="wishlistname" >
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <div class="col-sm">
                  <div class="row">
                      <div :id="wishlist.id"  class="200x160px" style="width:160px; height:200px"></div>
                      <vue-justgage  ref="g1"  class="gauge"></vue-justgage>
                      <AddMoneyToWishlist  />
                      <!-- <button type="button" class="btn btn-primary">Add Money</button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import Vue from 'vue';
import vueJustgage from 'vue-justgage';
import AddMoneyToWishlist from './AddMoneyToWishlist';
Vue.use(vueJustgage);

export default {
  
    name: 'WishlistItem',
    props: ['wishlist'],
    components: {
      AddMoneyToWishlist
    },
    data: function() {
      return {
          wishlists: [],
          dflt: {
            min: 0,
            max: this.wishlist.goal,
            donut: true,
            gaugeWidthScale: 0.6,
            counter: true,
            hideInnerShadow: true
        }

      }
    },
    mounted() {
      var g1 = this.$refs.g1.draw({
        id: this.wishlist.id,
        value: this.wishlist.added,
        title: this.wishlist.name,
        defaults: this.dflt
      });
  },
  methods: {
    // refresh() {
    //   this.$refs.g1.refresh(this.getRandomInt(0, 100));
    // }
  }


}
</script>


<style scoped>

</style>
