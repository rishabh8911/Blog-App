import React, {useState, useEffect} from 'react'
import { Container,  PostCard } from '../components'
import { appwriteService } from 'appwrite'

function AllPost() {
    const [posts, setPosts] = use([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]). then((posts)=>{
        if (posts){
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post)=>(
                        <div key={post.$id}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
        
    )
}
import { formatPostcssSourceMap } from 'vite'
import { set } from 'react-hook-form'

export default AllPost
