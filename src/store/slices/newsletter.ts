import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface newsletterState {
  templates: {
    header: {
      textHeader: string
      color: string
      imgHeader: {
        data: string
        path: string
      }
      imgSponsored: {
        data: string
        path: string
      }
      haveSponsored: boolean
      id: string
      type: string
      title: string
    }
    news: any[]
    publicity: any[]
  }

  showSelectTemplate: boolean
  templateIdEditing: string
  previewImageb64?: any
  loadImages: boolean
}

const initialState: newsletterState = {
  templates: {
    header: {
      color: '',
      textHeader: '',
      imgHeader: {
        data: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/logoAdac.png',
        path: 'logo_ADAC_Horizontal.svg'
      },
      imgSponsored: {
        data: 'https://adac-development.s3.us-west-2.amazonaws.com/Media/spon.png',
        path: 'SimpliSafe_logo.svg'
      },
      haveSponsored: true,
      id: '0',
      type: 'header',
      title: 'Encabezado'
    },
    news: [],
    publicity: []
  },
  showSelectTemplate: false,
  templateIdEditing: '0',
  loadImages: false
}

export const newsletter = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    setTemplateValues: (state, action) => {
      state.templates.header.color = action.payload.color
      state.templates.header.textHeader = action.payload.textHeader
      state.templates.header.imgHeader = action.payload.imgHeader
      state.templates.header.imgSponsored = action.payload.imgSponsored
      state.templates.header.haveSponsored = action.payload.haveSponsored
      state.templates.header.id = action.payload.id
    },
    setShowSelectTemplate: (state, action: PayloadAction<boolean>) => {
      state.showSelectTemplate = action.payload
    },
    addNews: (state, action) => {
      const newNews = {
        id: action.payload.id,
        type: 'news',
        textHeader: 'texto del header',
        color: '#F9BB19',
        img: '',
        title: '',
        text: 'loren ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt',
        readingTime: '',
        tags: [],
        bagroundColor: '#a7a7a7bd'
      }
      state.templates.news.push(newNews)
      state.templateIdEditing = action.payload.id
    },
    addPublicity: (state, action) => {
      const newPublicity = {
        id: action.payload.id,
        type: 'news',
        textHeader: 'texto del header',
        color: '#39C0CC',
        img: '',
        title: '',
        text: 'loren ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt',
        readingTime: '',
        tags: [],
        bagroundColor: '#a7a7a7bd',
        Facebook: '',
        Instagram: '',
        Twitter: '',
        Linkedin: '',
        Tiktok: ''
      }
      state.templates.publicity.push(newPublicity)
      state.templateIdEditing = action.payload.id
    },

    setTemplateIdEditing: (state, action: PayloadAction<string>) => {
      state.templateIdEditing = action.payload
    },
    setNewsValuesByid: (state, action) => {
      const news = state.templates.news.find(n => n.id === action.payload.id)
      if (news) {
        Object.assign(news, action.payload)
      }
    },
    setPublicityValuesByid: (state, action) => {
      const publicity = state.templates.publicity.find(
        n => n.id === action.payload.id
      )
      if (publicity) {
        Object.assign(publicity, action.payload)
      }
    },
    deleteNewsById: (state, action) => {
      state.templates.news = state.templates.news.filter(
        n => n.id !== action.payload
      )
      state.templateIdEditing = '0'
    },
    setOrdererNews: (state, action) => {
      /* recibe el id y una direccion up o down lo que hace, si es up el id se mueve un indice antes en el array y si es dows un indice despues en el array */
      const index = state.templates.news.findIndex(
        n => n.id === action.payload.id
      )
      const news = state.templates.news[index]
      if (action.payload.direction === 'up') {
        if (index === 0) return
        state.templates.news[index] = state.templates.news[index - 1]
        state.templates.news[index - 1] = news
      }
      if (action.payload.direction === 'down') {
        if (index === state.templates.news.length - 1) return
        state.templates.news[index] = state.templates.news[index + 1]
        state.templates.news[index + 1] = news
      }
    },
    setPreviewImageB64: (state, action) => {
      state.previewImageb64 = action.payload
    },
    setLoadImages: (state, action) => {
      state.loadImages = action.payload
    }
  }
})

export const {
  setTemplateValues,
  setShowSelectTemplate,
  addNews,
  addPublicity,
  setTemplateIdEditing,
  setOrdererNews,
  setNewsValuesByid,
  setPublicityValuesByid,
  deleteNewsById,
  setPreviewImageB64,
  setLoadImages
} = newsletter.actions

export default newsletter.reducer
