<template cla>
  <ul class="list-group">
    <li
      class="list-group-item list-group-item-action"
      style="cursor: pointer"
      v-for="(task, index) in tasks"
      :key="index"
      @click="this.$router.push(`/tasks/${task._id}`)"
    >
      {{ index + 1 }}.
      {{ task.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTasks } from "@/services/TaskServices";
import { Task } from "@/interfaces/Task";

export default defineComponent({
  data() {
    return {
      //store the data from getTasks
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      //console.log(res);
      this.tasks = res.data;
    },
  },
  //show the list of tasks after loading teh page
  mounted() {
    this.loadTasks();
  },
});
</script>
