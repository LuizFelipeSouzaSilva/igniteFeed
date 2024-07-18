import { Header } from "./components/header.tsx";
import { Post, PostType } from "./components/post.tsx"
import { Sidebar } from "./components/sidebar.tsx";


import global from './App.module.css'
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://w7.pngwing.com/pngs/529/13/png-transparent-chin-cheek-forehead-eyebrow-jaw-nose-face-people-head.png',
      name: 'Carlos Henrique',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date ('2024-06-24 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://img.freepik.com/fotos-premium/pessoas-mulheres-negocios-e-conceito-de-retrato-rosto-de-jovem-sorridente-feliz_380164-121867.jpg',
      name: 'Maria clara',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date ('2024-06-26 11:00:00'),
  },
]


export function App() {
  return (
    <div>
      <Header/>
      
    <div className={global.wrapper}>
    <Sidebar/>

    <main>

    {posts.map(post => {
        return <Post
          key={post.id}
          post={post}
         />
      })}

    </main>
    
    </div>

    </div>
  )
}



