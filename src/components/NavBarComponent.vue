<template>
  <nav>
    <div class="navbar-leftside">
      <img src="../assets/NavBar/menuicon.svg" alt="" class="navbar-menuicon">
      <div class="role">{{ person.role }}</div>
      <div class="fio">{{ person.fio }}</div>
    </div>
    <div class="navbar-rightside">
      <img src="../assets/NavBar/search-icon.svg" alt="" class="search-icon">
      <img src="../assets/NavBar/bell-icon.svg" alt="" class="bell-icon">
      <img src="../assets/NavBar/plus-icon.svg" alt="" class="plus-icon">
      <img src="../assets/NavBar/nsi-icon.svg" alt="" class="nsi-icon">
      <img src="../assets/NavBar/chart-icon.svg" alt="" class="chart-icon">
      <img src="../assets/NavBar/question-icon.svg" alt="" class="question-icon">
    </div>
  </nav>
  <!--<router-link to="/">Главная</router-link>-->
  <!--<a href="/">Обновить страницу</a>-->
</template>

<script>
export default {
  name: 'NavBarComponent',
  data(){
    return{
      person:{
        role:'Администратор',
        fio:'Авин Андрей Александрович'
      }
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: #0F4C82;
    color: white;
    padding-left: 30px;
    padding-right: 50px;
    .navbar-leftside{
      display: flex;
      .navbar-menuicon{
        margin-right: 33px;
      }
      .role{
        margin-right: 10px;
      }
    }
    .navbar-rightside{
      display: flex;
      *{
        margin-left: 20px;
      }
    }
  }
</style>

