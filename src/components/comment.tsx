import { ThumbsUp, Trash } from 'phosphor-react'
import global from './comment.module.css'
import { useState } from 'react'
import { Avatar } from './avatar';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }
    

    return(
        <div className={global.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/141966018?v=4.png" alt=''/>

            <div className={global.commentBox}>
            <div className={global.commentContent}>
            <header>
                <div className={global.authorAndTime}>
                    <strong>Luiz Felipe</strong>
                    <time title='21 de junho às 10:27h' dateTime='2024-06-21'>Cerca de 1h atras</time>
                </div>

                <button onClick={handleDeleteComment} title='Deletar comentário'>
                    <Trash size={24}/>
                </button>

            </header>

                <p>{content}</p>

            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                     Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
            </div>
        </div>
    )
}