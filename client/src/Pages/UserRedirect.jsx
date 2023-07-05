import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function UserRedirect() {
  const [isLoading,setIsLoading]=useState(false)
    const {id}=useParams()
    useEffect(() => {
        (async function(){
          setIsLoading(true)
          console.log(isLoading)
            let {data} = await axios.get("user/geturl/"+id)
            setIsLoading(false)
            window.location.href=data.url.shortUrl
        })()
    }, [])
  return (
    <div>
      {
        isLoading?<p>Redirecting</p>:""
      }
    </div>
  )
}
