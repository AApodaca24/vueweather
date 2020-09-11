<template>
  <div>
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "weatherMap",
  data: () => ({
    center: { lat: 39.0069241, lon: "-104.8850611" }
  })
};
</script>

<style scoped></style>
