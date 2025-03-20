<script>
  export default {
    name: 'App',

    data(){
      return{
        question: undefined,
        incorrectAnswer: undefined,
        correctAnswer: undefined
      }
    },
  
    computed: {
      answers(){
        return [...this.incorrectAnswer,this.correctAnswer].sort();
      }
    },
    created(){
      this.axios
      .get('https://opentdb.com/api.php?amount=1')
      .then((response) =>{
      console.log(response.data.results[0]);
        
        this.question = response.data.results[0].question;
        this.incorrectAnswer = response.data.results[0].incorrect_answers;
        this.correctAnswer = response.data.results[0].correct_answer;
      })
    }
  }

// https://opentdb.com/api.php?amount=1&type=boolean
</script>

<template>
  <div>
    <h1 v-html="this.question"></h1>

    <input type="radio" name="answer" value="true">
    <label>True</label>
    <br>

    <input type="radio" name="answer" value="false">
    <label>False</label>
    <br>

    <button class="send" type="button">Send</button>
  </div>
</template>