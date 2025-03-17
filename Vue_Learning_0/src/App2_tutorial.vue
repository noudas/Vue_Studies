<script>
export default {
  
  data() {
    return {
      name: 'John Doe',
      status: 'active',
      tasks: ['task 1', 'task 2', 'task 3'],
      link: 'https://www.google.com',
    };
  },

  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else if (this.status === 'pending') {
        this.status = 'inactive';
      }
      else {
        this.status = 'active';
      }
    },
  },
};
</script>

<template>
  <h1>
    {{ name }}
  </h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is Pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task"> {{ task }}</li>
  </ul>

  <!-- "<a v-bind:href="link">CLick for Google</a> -->
  <a :href="link">CLick for Google</a>

  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button :click="toggleStatus">Change Status</button>
</template>
