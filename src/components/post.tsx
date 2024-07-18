import ptBR from 'date-fns/locale/pt-BR'
import { format, formatDistanceToNow } from 'date-fns'

import { Avatar } from './avatar'
import { Comment } from './comment'
import global from './post.module.css' 
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps){
    const [comments, setComments] = useState([
        'Post muito bacana, hein'
    ])

    const [ newCommentText, setNewCommentText ] = useState('')


    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { 
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt,{ 
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function onDeleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete
        })


        setComments(commentsWithoutDeleteOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;



    return(
       <article className={global.post}>
        <header>
            <div className={global.author}>
            <Avatar src={post.author.avatarUrl}/>
            <div className={global.authorInfo}>
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
            </div>
            </div>

            <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
               {publishedDateRelativeToNow} 
            </time>
         
            </header>

            <div className={global.content}>

                {post.content.map(line =>{
                    if(line.type === 'paragraph'){
                      return <p key={line.content}>{line.content}</p>;
                    } else if(line.type === 'link'){
                        return <p key={line.content}><a href='#'>{line.content}</a></p>;
                    }
                })}

            </div>

        <form onSubmit={handleCreateNewComment} className={global.commentForm}>
            <strong>Deixe seu feedback</strong>


            <textarea
                name='comment'
                placeholder='Deixe um comentario'
                onChange={handleNewCommentChange}
                value={newCommentText}
                onInvalid={handleNewCommentInvalid}
                required
            />

            <footer>
            <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>
            </footer>
        </form>
        <div className={global.commentList}>
           {comments.map(comment => {
                return(
                    (<  Comment 
                        key={comment} 
                        content={comment}
                        onDeleteComment={onDeleteComment}/>)
                )
           })}
        </div>


       </article>
    )
}