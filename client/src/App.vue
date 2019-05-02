<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view/>
    </div>
  </div>
</template>



<script>
import Header from './components/layout/Header'
export default {
  name: "app",
  components: {
    Header
  }

}
</script>


<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 1.6;
    background: #0a0101
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
