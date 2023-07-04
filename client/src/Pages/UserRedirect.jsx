import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function UserRedirect() {
    const {id}=useParams()
    useEffect(() => {
        (async function(){
            let {data} = await axios.get("user/geturl/"+id)
            window.location.href=data.url.shortUrl
        })()
    }, [])
  return (
    <div>
      
    </div>
  )
}
