import global from './header.module.css'

import igniteLogo from '../images/Ignite-logo.svg'

export function Header(){
    return(
        <header className={global.header}>
        <img src={igniteLogo}/>
        <strong>Ignite Feed</strong>
        </header>
    );
}

