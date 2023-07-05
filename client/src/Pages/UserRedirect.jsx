import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading';

export default function UserRedirect() {
  const [isLoading,setIsLoading]=useState(false)
    const {id}=useParams()
    useEffect(() => {
        (async function(){
          setIsLoading(true)
            let {data} = await axios.get("user/geturl/"+id)
            setIsLoading(false)
            window.location.href=data.url.shortUrl
        })()
    }, [])
  return (
    <div>
      {
        isLoading?<div className="admin-loading"> <ReactLoading type="puff" color="black" height={80} width={80} /></div>:""
      }
    </div>
  )
}
