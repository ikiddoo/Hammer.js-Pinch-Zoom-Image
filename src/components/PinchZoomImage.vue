<template>
  <div class="outer">
    <div class="container">
      <div>
        <div class="border">
          <img
            id="plate"
            v-pinch
            src="@/assets/1.jpg"
            class="image"
            :style="{ transform: 'translate3d(' +  `${currentDeltaX}` + 'px,' + `${currentDeltaY}` + 'px, 0)' + ' scale(' + `${currentScale}` + ')', }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Hammer from "hammerjs";
import { ref, defineComponent } from "vue";

const adjustDeltaX = ref<number>(0);
const adjustDeltaY = ref<number>(0);
const adjustScale = ref<number>(1);

const currentDeltaX = ref<any>();
const currentDeltaY = ref<any>();
const currentScale = ref<any>();

export default defineComponent({
  props: {
    enableTouchControl: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup() {
    return { currentDeltaX, currentDeltaY, currentScale };
  },
  directives: {
    pinch: {
      created(el: any) {
        const hammer = new Hammer.Manager(el);
        const pan = new Hammer.Pan();
        const pinch = new Hammer.Pinch();
        hammer.add([pan, pinch]);
        hammer.get("pan").set({ direction: Hammer.DIRECTION_ALL, threshold: 0 });
        hammer.get("pinch").set({ enable: true });

        // zoomin, zoomout scaling calculation
        hammer.on("panmove pinchin pinchout", function (e: any) {
          // calclulate scaling properties based on event scale
          currentScale.value = Math.max(1, adjustScale.value * e.scale);
          currentDeltaX.value = adjustDeltaX.value + e.deltaX / currentScale.value;
          currentDeltaY.value = adjustDeltaY.value + e.deltaY / currentScale.value;
          console.log(e, currentScale.value, currentDeltaX.value, currentDeltaY.value);
        });

        // capture the values so it does not reset when pinch/pan ends
        hammer.on("panend pinchend", function () {
          adjustScale.value = currentScale.value;
          adjustDeltaX.value = currentDeltaX.value;
          adjustDeltaY.value = currentDeltaY.value;
        });
      },
    },
  },
});
</script>

<style>
p {
  color: yellow;
}
.outer {
  margin: 1em;
  display: flex;
  justify-content: center;
  height: 100vh;
}
.container {
  background: rgb(98, 98, 98);
  border-radius: 5px;
  width: 950px;
  height: 650px;
  padding: 1em;
  overflow: hidden;
  font-family: "Trebuchet Ms", helvetica, sans-serif;
}
img {
  width: 950px;
  height: 650px;
  /* remove margins */
  margin-left: -18px;
  margin-top: -18px;
}
</style>
