<template>
  <NavbarApp />
  <div class="container p-5">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarApp from "@/components/NavbarApp.vue";

export default defineComponent({
  name: "App",
  components: {
    NavbarApp,
  },
});
</script>
