<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'active',
      tasks: ['task 1', 'task 2', 'task 3'],
    };
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
</template>
