import NavBarComponent from '@/components/NavBarComponent.vue'
import SideBarComponent from '@/components/SideBarComponent.vue'
//import axios from 'axios'

export default {
    name: 'MainView',
    data(){
        return {
            directories:this.$store.getters.GET_DIRECTORIES,
            currentDirectory: null,
            data:null,
            inputType: new Map([
                ['Число','text'],
                ['Объект','text'],
                ['Дата','date'],
                ['Дата и время','datetime-local'],
                ['Строка','text'],
                ['bool','text'],

            ]),
            editData:{},
            action:'',
            menu: true
        }
    },
    methods:{
        clickPlus(){
            this.action = "Добавить"
            this.editData = {}
            for(let item of this.$store.getters.GET_DICTIONARY){
                this.editData[item[0]]=''
            }
        },
        rowClick(row){
            this.editData=row
            this.action = "Редактировать"
        },
        async add(){
            if(this.action != "Добавить") return
            this.editData.id = null

            if(this.currentDirectory=='dirUsers'){
                let org = await this.$store.dispatch('GET_NOTE', 'dirExpertOrg/'+this.editData.organization);
                this.editData.organization = org
            }

            let data = {
                directory: this.currentDirectory,
                __Body__: this.editData,
                __dateUpdated__: new Date(),
                __userId__:'3210'
            }
            await this.$store.dispatch('POST_DIRECTORY', data);
        }

    }, 
    computed:{
        
    },
    watch:{
        currentDirectory: async function(){
           await this.$store.dispatch('SET_DIRECTORY', this.currentDirectory);
           //let org = await this.$store.dispatch('GET_NOTE', 'dirExpertOrg/'+this.editData.organization);
           this.data = this.$store.getters.GET_DIRECTORY
           this.$store.commit('SET_DICTIONARY', this.currentDirectory);
           for(let item of this.$store.getters.GET_DICTIONARY){
            this.editData[item[0]]=''
           }
           this.action = ''
           console.log(this.data)
        }
        
    },
    components:{
        NavBarComponent,
        SideBarComponent
    },
    updated(){
        console.log()
    }

}