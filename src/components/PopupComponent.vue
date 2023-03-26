<template>
  <div id="background" :style="{'min-height':windowHeight() + 'px'}">
    <div id="wrapperInfo">
      <div id="info">
        <div id="message" v-html="this.modelValue"></div>
        <button @click="OK()">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupComponent',
  props:{
    modelValue: String
  },
  emits: ['update:modelValue'],
  methods:{
    OK(){
      this.$emit('update:modelValue', '')
    },
    windowHeight(){
      return document.body.offsetHeight
    }
  }
}

</script>


<style scoped lang="scss">
#background{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left:-8px;
  width: 100%;
  //min-height: 1200px;
  background: rgba(0, 0 ,0, 0.5);
  z-index: 1000;
}

#wrapperInfo{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
}

#info{
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 400px;
  background: rgba(255, 255 ,255, 1);
  border: 4px solid rgb(0, 0, 0);
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  
}

#message{
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  overflow-y: scroll;
  font-size: 18px;
}

button{
  
  width: 95px;
  height: 35px;
  
}


</style>
