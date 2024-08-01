import React,{useEffect, useState} from 'react'
import { Container, PostForm} from '..' 
import { useNavigate } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

function EditPost() {
    const [posts,setposts] = useState(null)
    const {slug}=useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if (slug){
            appwriteService.getPost(slug).then((post=>{
                

            }))
        }

    })
    return (
        
    )
}

export default EditPost
