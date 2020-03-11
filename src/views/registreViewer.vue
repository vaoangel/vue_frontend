<template>
<div>
        <div class="card">
        <!-- <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"> -->
        <h1>Albaran: {{data.albaran }}</h1>
        <p class="price">Operario: {{data.operari}}</p>
        <div>
            <p>Imprimido: {{data.creado}}</p>
        </div>
        </div>
</div>
</template>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>
<script>
export default {
    name:"registreViewer",
    props:{
        data: {type: Object, required:true}
    }
}
</script>