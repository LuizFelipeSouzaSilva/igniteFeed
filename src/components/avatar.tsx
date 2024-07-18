import global from './avatar.module.css'
import { ImgHTMLAttributes } from 'react';


interface AvatarPropos extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarPropos) {
    return(
        <img className={hasBorder ? global.avatarWithBorder : global.avatar} 
        {...props}
        />
    );
}