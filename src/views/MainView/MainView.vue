<template>
  <NavBarComponent></NavBarComponent>
  <div class="side-main">
    <SideBarComponent v-if="this.menu"></SideBarComponent>
    <div class="main">
      <div class="row1">
        <select name="" id="directories" v-model="currentDirectory">
          <option v-for="directory in directories" v-bind:key="directory" :value="directory.code">{{ directory.name }}</option>
        </select>
        <div class="directories-icons">
          <img src="../../assets/Main/Row1/plus-icon.svg" alt="" class="plus-icon" @click="clickPlus()">
          <img src="../../assets/Main/Row1/pen-icon.svg" alt="" class="pen-icon">
          <img src="../../assets/Main/Row1/delete-icon.svg" alt="" class="delete-icon">
          <img src="../../assets/Main/Row1/download-icon.svg" alt="" class="download-icon">
          <img src="../../assets/Main/Row1/filter-icon.svg" alt="" class="filter-icon">
        </div>
      </div>
      <div class="row2">
        <div class="directory">
          <v-table v-if="data">
            <thead>
              <tr>
                <th v-for="(value, name) in data.content[0]" :key="name">
                  {{ this.$store.getters.GET_DICTIONARY.get(name)[0] }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in data.content" :key="row" @click="rowClick(row)">
                <td v-for="(value, name) in row" :key="name">
                  {{ typeof(value)=='object' ? value.id : value }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
        <div class="directory-edit" v-if="data && this.action">
          <div class="input" v-for="name in this.$store.getters.GET_DICTIONARY" :key="name" >
            <span>{{ this.$store.getters.GET_DICTIONARY.get(name[0])[0] }}</span>
            <input :type="inputType.get(this.$store.getters.GET_DICTIONARY.get(name[0])[1])" v-model="this.editData[name[0]]">
          </div>
          <div class="save" @click="add()">{{ this.action }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style src="./MainView.scss" lang="scss" scoped></style>
<script src="./MainView.js"></script>