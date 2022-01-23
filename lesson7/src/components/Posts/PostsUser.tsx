import React, {useEffect, useState} from 'react'
import {IPost} from '../../Types'
import PostItem from './PostItem'
import {CircularProgress, List} from '@mui/material'

interface UserPostsProps {
  id: string
}

function PostsUser({id}: UserPostsProps) {
  const [posts, setPosts] = useState<IPost[]>()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <List sx={{ml: 5}}>
      {posts?.length ?
        posts?.map((post, index) => <PostItem key={post.id} idx={index + 1} post={post}/>) :
        <CircularProgress sx={{ml: 5}}/>
      }
    </List>
  )
}

export default PostsUser

