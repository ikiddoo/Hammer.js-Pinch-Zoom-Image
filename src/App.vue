<template>
<div>
  <PinchZoomImage />
</div>
</template>

<script lang="ts">
import PinchZoomImage from './components/PinchZoomImage.vue';

export default {
  name: "App",
  components: {
    PinchZoomImage
  },
  setup() {
    return { };
  },
};
</script>

<style>
html, body {
  background: #1a1a1b;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
