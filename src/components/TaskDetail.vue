<template>
  <div class="col-md-4 offset-md-4">
    <form class="card card-body" @submit.prevent="handleUpdade()">
      <h1 class="text-center h3 mb-3">Task Detail</h1>
      <input
        class="form-control mb-3"
        type="text"
        v-model="currentTask.title"
      />
      <textarea
        class="form-control mb-3"
        rows="3"
        v-model="currentTask.description"
      ></textarea>
      <button class="btn btn-success">Update</button>
    </form>
    <div class="text-center">
      <button class="btn btn-danger mt-3" @click="handleDelete()">
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTask, updateTask, deleteTask } from "@/services/TaskServices";
import { Task } from "@/interfaces/Task";

export default defineComponent({
  //rodar explicacao nesse codigo
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.currentTask = res.data;
      //console.log(res);
    },
    async handleUpdade() {
      if (typeof this.$route.params.id === "string") {
        const res = await updateTask(this.$route.params.id, this.currentTask);
        console.log(res);
        this.$router.push("/");
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        const res = await deleteTask(this.$route.params.id);
        console.log(res);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>
