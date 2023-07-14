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
  }

  showSelectTemplate: boolean
  templateIdEditing: string
}

const initialState: newsletterState = {
  templates: {
    header: {
      color: '',
      textHeader: '',
      imgHeader: {
        data: 'https://storage.mlcdn.com/account_image/421950/gdYZxKgNWogvwZ9aZ2Qmjg5WeLeIkOB3aZhSMZta.png',
        path: 'logo_ADAC_Horizontal.svg'
      },
      imgSponsored: {
        data: 'https://storage.mlcdn.com/account_image/421950/xXboKiEuvfD6VxLTby08V8nghsrxY58h00YLZi3w.png',
        path: 'SimpliSafe_logo.svg'
      },
      haveSponsored: true,
      id: '0',
      type: 'header',
      title: 'Encabezado'
    },
    news: []
  },
  showSelectTemplate: false,
  templateIdEditing: '0'
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
        tags: []
      }
      state.templates.news.push(newNews)
      state.templateIdEditing = action.payload.id
    },
    setTemplateIdEditing: (state, action: PayloadAction<string>) => {
      state.templateIdEditing = action.payload
    },
    setNewsValuesByid: (state, action) => {
      const news = state.templates.news.find(n => n.id === action.payload.id)
      if (news) {
        news.textHeader = action.payload.textHeader
        news.color = action.payload.color
        news.img = action.payload.img
        news.title = action.payload.title
        news.text = action.payload.text
        news.readingTime = action.payload.readingTime
        news.tags = action.payload.tags
      }
    },
    deleteNewsById: (state, action) => {
      state.templates.news = state.templates.news.filter(
        n => n.id !== action.payload
      )
      state.templateIdEditing = '0'
    }
  }
})

export const {
  setTemplateValues,
  setShowSelectTemplate,
  addNews,
  setTemplateIdEditing,
  setNewsValuesByid,
  deleteNewsById
} = newsletter.actions

export default newsletter.reducer
