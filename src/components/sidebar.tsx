import { Avatar } from './avatar'
import global from './sidebar.module.css'

import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={global.sidebar}>
            <img className={global.cover}  src='https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

            <div className={global.profile}>
               <Avatar src='https://www.desenhoonline.com/site/wp-content/uploads/Mais-bonita-da-Gr%C3%A3-Bretanha.jpg'/>


                <strong>Erica Santos</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="">
                        <PencilLine size='20'/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}