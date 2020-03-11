<template>
  <div>
    <b-card>
      <b-card>
        <b-card-text><span class="title">Albaran: </span> <span class="content">{{data.albaran }}</span></b-card-text>
        <b-card-text><span class="title">Operario: </span> <span class="content">{{data.operari}}</span></b-card-text>
        <b-card-text><span class="title">Impreso: </span> <span class="content">{{data.creado}}</span></b-card-text>
      </b-card>
    </b-card>
  </div>
</template>
<style>
.card {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	margin: auto;
	font-family: arial;
}

.content {
	font-size: 20px;;
}

.title {
	font-size: 22px;
	font-weight: bold;
}
</style>
<script>
export default {
  name: "registreViewer",
  props: {
    data: { type: Object, required: true }
  }
};
</script>