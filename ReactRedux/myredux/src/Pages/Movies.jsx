import { Box, Input } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

const Movies = () => {

    const [movieSearch,setMovieSearch] = useState('')
    const dispatch = useDispatch()
    const debounceTime = useRef()
  
    useEffect(()=>{
        clearTimeout(debounceTime.current)

        debounceTime.current = setTimeout(()=>{
            setTimeout
        },1000)

    },[debounceTime])



  return (
      <Box>
           <Input type='text' value={movieSearch} onChange={(e)=>setMovieSearch(e.target.value)} />
      </Box>
  )
}

export default Movies