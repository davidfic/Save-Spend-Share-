
<template>
    <div >
        <div class="row">
            <div class="col-sm col-sm-4">
                <div class="card">
                    <div class="card-header">
                        {{bucket.name}}
                    </div>
                    <img class="card-img-top" src="https://via.placeholder.com/75" alt="Card image cap">
                    <div class="card-body" >
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                        <p id="p_total">TOTAL:  {{bucket.amount}}</p>
                        <button @click="$emit('add-money', bucket.id )" class="add-btn">Add Money</button>                        
                        <button @click="$emit('del-money', bucket.id )" class="del-btn">Withdraw Money</button>                        
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BucketCard',
        props: ['bucket'],
        methods: {
            
        }
    }
</script>

<style scoped>
  .add-btn {
    background: #555;
    color: #fff;
    padding: 7px 20px;
  }

  .add-btn:hover {
    background: rgb(110, 216, 49);
  }

  .del-btn {
    background: #555;
    color: #fff;
    padding: 7px 20px;
   
  }

  .del-btn:hover {
    background: rgb(218, 13, 13);
  }

</style>
