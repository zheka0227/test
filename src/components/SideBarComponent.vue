<template>

  <div class="wrapper">
    <div class="sideBarList" v-for="elem in sideBarList" :key="elem">
      <div class="title-list" @click="clickTitleList($event)/*titleListClicked=titleListClicked?false:true*/">
        <span >{{ elem.title }}</span>
        <img src="../assets/SideBar/group-icon.svg" alt="" class="subelem-icon">
      </div>
      <div class="sublist-wrapper" :class="{'title-list-clicked':titleListClicked}">
        <div class="sublist" v-for="subelem in elem.subList" :key="subelem">
          <img :src=subelem.img alt="" class="subelem-icon">
          {{ subelem.title }}
        </div>
      </div>
    </div>
  </div>

<!--
  <div class="wrapper">
  <v-menu offset-y>
    <v-list v-for="elem in sideBarList" :key="elem">
      <template v-slot:activator="{ on }">
      <v-btn v-on="on">{{ elem.title }}</v-btn>
      </template>

      <v-list-item
        v-for="subelem in elem.subList" :key="subelem"
        active-color="primary"
        variant="plain"
      >
        <template v-slot:prepend>
          <v-icon :icon="subelem.img"></v-icon>
        </template>

        <v-list-item-title v-text="subelem.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  </div>
-->
</template>

<style lang="scss" scoped>
  .wrapper{
    width: 337px;
    max-width: 337px;
    min-width: 337px;
    //height: 100vh;
    //display: flex;
    //flex-grow: 1;
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
    padding-top: 12px;
    .sideBarList{
      //margin-top: 12px;
      .title-list{
        display: flex;
        justify-content: space-between;
        padding: 11px 30px 11px 30px;
        font-size: 20px;
        
      }
      .sublist-wrapper{
        .sublist{
          display: flex;
          padding: 12px 30px 12px 30px;
          .subelem-icon{
            margin-right: 20px;
          }
        }

      }
      .title-list-clicked{
          height: 0;
          overflow: hidden;
        }
      .list-head-clicked{
        height: 0;
        overflow: hidden;
      }

    }

  }

</style>

<script>
export default {
  name: 'SideBarComponent',
  data: () => ({
    titleListClicked:false,
    sideBarList: [
      {
        title: 'Экспертизы',
        subList:[
          {
            img: require(`../assets/SideBar/pen-icon.svg`),
            title: 'В работе'
          },
          {
            img: require('../assets/SideBar/ok-icon.svg'),
            title: 'Завершенные'
          },
          {
            img: require('../assets/SideBar/sheets-icon.svg'),
            title: 'Таможенные'
          },
          {
            img: require('../assets/SideBar/sheets-icon.svg'),
            title: 'Судебные по АП'
          },
          {
            img: require('../assets/SideBar/sheets-icon.svg'),
            title: 'Судебные по уп'
          },
          {
            img: require('../assets/SideBar/folder-icon.svg'),
            title: 'Все'
          }
        ]
      },
      {
        title: 'Журналы',
        subList:[
          {
            img: require('../assets/SideBar/sheet-icon.svg'),
            title: 'Решения'
          },
          {
            img: require('../assets/SideBar/sheet-icon.svg'),
            title: 'Постановления'
          },
          {
            img: require('../assets/SideBar/sheet-icon.svg'),
            title: 'Таможенные экспертизы (ТЭ)'
          },
          {
            img: require('../assets/SideBar/sheet-icon.svg'),
            title: 'Судебные экспертизы'
          },
          {
            img: require('../assets/SideBar/chart-icon.svg'),
            title: 'Учет проб и (или) образзов'
          },
          {
            img: require('../assets/SideBar/sheet-icon.svg'),
            title: 'Заключения по ТЭ'
          },
          {
            img: require('../assets/SideBar/sheet-icon.svg'),
            title: 'Заключения по СЭ'
          },
          {
            img: require('../assets/SideBar/sheet-icon.svg'),
            title: 'СНДЗ'
          },
          {
            img: require('../assets/SideBar/sheet-icon.svg'),
            title: 'Акты'
          }
        ]
      }
    ]
  }),
  methods: {
    clickTitleList(e){
      e.target.nextSibling.classList.toggle("list-head-clicked");
    }
  },
}
</script>



