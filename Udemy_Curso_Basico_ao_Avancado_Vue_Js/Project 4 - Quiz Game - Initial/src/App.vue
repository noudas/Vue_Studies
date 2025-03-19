<script setup>
// https://opentdb.com/api.php?amount=1&type=boolean
</script>

<template>
  <div>
    <h1>This is a Question</h1>

    <input type="radio" name="answer" value="true">
    <label>True</label>
    <br>

    <input type="radio" name="answer" value="false">
    <label>False</label>
    <br>

    <button class="send" type="button">Send</button>
  </div>
</template>