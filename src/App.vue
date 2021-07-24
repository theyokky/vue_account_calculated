<template>
  <div id="app">

    <h1>โปรแแกรม บัญชีรายรับ / รายจ่าย</h1>

    <div class="insert-group">
      <Insert type="income" />
      <div class="line"></div>
      <Insert type="outcome" />
    </div>

    <div style="display:flex; justify-content:center;">
      <Fetch />
    </div>

  </div>
</template>

<script>
import Insert from './components/Insert.vue'
import Fetch from './components/Fetch.vue'

export default {
  name: 'App',
  components: {
    Insert,
    Fetch
  },
  methods:{
    
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,500;1,400&display=swap');

.insert-group{
  display:flex;
  justify-content: center;
  align-items:center;
  margin-bottom:5vh;
}

#app {
  text-align: center;
  color:white;
}

.line{
  background-color:#2c3e50;
  width:2px;
  height:100px;
}

body{
  margin:0;
  background:rgb(19, 156, 161);
}

*{
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{
  margin:0;
  padding:0;
  height:100vh;
  width:100vw;
}

</style>
