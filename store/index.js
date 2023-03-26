/* eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
const options = {
  //mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin' :'*',
    'Content-Type': 'application/json;charset=UTF-8',
  }
}

export const store = createStore({
  state () {
    return {
      directories: null,
      directory: null,
      dictionary: null,

    }
  },
  getters: {
    GET_DIRECTORIES: state=>{
      return state.directories
    },
    GET_DIRECTORY: state=>{
      return state.directory
    },
    GET_DICTIONARY: state=>{
      return state.dictionary
    }

  },
  mutations: {
    SET_DIRECTORIES: (state, payload) => {
      state.directories = payload;
    },
    SET_DIRECTORY: (state, payload) => {
      state.directory = payload;
    },
    SET_DICTIONARY: (state, payload) => {
      let dictionary = parseDictionary(payload)
      state.dictionary = dictionary;
    }


  },
  actions: {
    SET_DIRECTORIES: async (context, payload) => {
      let directories = (await axios.get('api/avep/dictionary/list', options)).data
      //let directories = await fetch('api/avep/dictionary/list',options)
      context.commit('SET_DIRECTORIES', directories);
    },
    SET_DIRECTORY: async (context, payload) => {
      let url = 'api/avep/dictionary/list/'+payload
      let directory = (await axios.get(url,options)).data
      context.commit('SET_DIRECTORY', directory);
      //return directory
    },
    POST_DIRECTORY: async (context, payload) => {
      let response = await axios.post('api/avep/dictionary/list/'+payload.directory, payload,options)
      return response
    },
    GET_NOTE: async (context, payload) => {
      //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      let response = (await axios.get('api/avep/dictionary/'+payload,options)).data
      return response
    },

  }
})

const dirUsers_text = `
| id | Идентификатор | Число | Нет |
| code | Код пользователя | Число | Нет |
| organization | Объект экспертной организации | Объект | Да | organization.name~\*__строка из фильтра__\* |
| department | Наименование подразделения | Строка | Да | department~\*__строка из фильтра__\* |
| position | Наименование должности | Строка | Да | position~\*__строка из фильтра__\* |
| fullName | ФИО | Строка | Да | fullName~\*__строка из фильтра__\* |
| education | Образование | Строка | Да | education~\*__строка из фильтра__\* |
| speciality | Специализация | Строка | Да | speciality~\*__строка из фильтра__\* |
| workExperience | Стаж экспертной работы | Строка | Да | workExperience~\*__строка из фильтра__\* |
| phone | Телефонный номер | Строка | Нет |
| fax | Факс | Строка | Нет |
| email | Адрес электронной почты | Строка | Нет |
| dateActivate | Дата активации | Дата | Да | dateActivate>=__дата из фильтра__ |
| dateDeactivate | Дата деактивации | Дата | Да | dateDeactivate<=__дата из фильтра__ |
| dateUpdate | Дата и время последней операции | Дата и время | Нет |
| userId | Идентификатор пользователя последней операции | Строка | Нет |
`

const dirExpertOrg_text = `
| id | Идентификатор | Число | Нет |
| code | Код записи | Число | Нет |
| name | Полное наименование | Объект | Да | name~\*__строка из фильтра__\* |
| unp | УНП | Строка | Да | unp~\*__строка из фильтра__\* |
| orgBriefName | Краткое наименование | Строка | Да | orgBriefName~\*__строка из фильтра__\* |
| headPositionName | Наименование должности руководителя | Строка | Нет |
| headFullName | ФИО руководителя | Строка | Нет |
| orgAddress | Адрес | Строка | Нет |
| dateActivate | Дата активации | Дата | Да | dateActivate>=__дата из фильтра__ |
| dateDeactivate | Дата деактивации | Дата | Да | dateDeactivate<=__дата из фильтра__ |
| dateUpdate | Дата и время последней операции | Дата и время | Нет |
| userId | Идентификатор пользователя последней операции | Строка | Нет |
`

const dirExpertiseKind_text = `
| id | Идентификатор | Число | Нет |
| code | Код записи | Число | Нет |
| name | Наименование | Объект | Да | name~\*__строка из фильтра__\* |
| type | Объект типа экспертизы | Объект | Да | type.name~\*__строка из фильтра__\* |
| labRequired | Требуется ли лабаратория | bool | Да | labRequired=__значение из фильтра__
| dateActivate | Дата активации | Дата | Да | dateActivate>=__дата из фильтра__ |
| dateDeactivate | Дата деактивации | Дата | Да | dateDeactivate<=__дата из фильтра__ |
| dateUpdate | Дата и время последней операции | Дата и время | Нет |
| userId | Идентификатор пользователя последней операции | Строка | Нет |
`

const dirExpertiseType_text = `
| id | Идентификатор | Число | Нет |
| code | Код записи | Число | Нет |
| name | Наименование | Объект | Да | name~\*__строка из фильтра__\* |
| dateActivate | Дата активации | Дата | Да | dateActivate>=__дата из фильтра__ |
| dateDeactivate | Дата деактивации | Дата | Да | dateDeactivate<=__дата из фильтра__ |
| dateUpdate | Дата и время последней операции | Дата и время | Нет |
| userId | Идентификатор пользователя последней операции | Строка | Нет |
`

const dirExpertiseStages_text = `
| id | Идентификатор | Число | Нет |
| code | Код записи | Число | Нет |
| name | Наименование | Объект | Да | name~\*__строка из фильтра__\* |
| dateActivate | Дата активации | Дата | Да | dateActivate>=__дата из фильтра__ |
| dateDeactivate | Дата деактивации | Дата | Да | dateDeactivate<=__дата из фильтра__ |
| dateUpdate | Дата и время последней операции | Дата и время | Нет |
| userId | Идентификатор пользователя последней операции | Строка | Нет |
`

function parseDictionary(directory){
  let text = new Map([
    ['dirUsers', dirUsers_text],
    ['dirExpertOrg', dirExpertOrg_text],
    ['dirExpertiseKind', dirExpertiseKind_text],
    ['dirExpertiseType', dirExpertiseType_text],
    ['dirExpertiseStages', dirExpertiseStages_text],
  ]).get(directory)

  let dictionary = new Map()
  let rows = text.split('\n')
  rows.shift()
  rows.pop()
  for(let row of rows){
    let words = row.split('|')
    dictionary.set(words[1].trim(), [words[2].trim(), words[3].trim()])
  }

  return dictionary
}
