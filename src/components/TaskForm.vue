<template>
  <div class="col-md-4 offset-md-4">
    <form class="card card-body" @submit.prevent="saveTask()">
      <h1 class="text-center h3 mb-3">Create Task</h1>
      <input
        class="form-control mb-3"
        type="text"
        placeholder="Wrire a title"
        v-model="task.title"
      />
      <textarea
        class="form-control mb-3"
        rows="3"
        placeholder="Write a description"
        v-model="task.description"
      >
      </textarea>
      <button
        class="btn btn-primary"
        :disabled="!task.title || !task.description"
      >
        save
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskServices";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      //redirecionar para a pagina de tasks
      this.$router.push({ name: "tasks" });
    },
  },
});
</script>
