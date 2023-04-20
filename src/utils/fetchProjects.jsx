import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
})
client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response))
  .catch(console.error)

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}
