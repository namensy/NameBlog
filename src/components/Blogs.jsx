import React, { useState } from 'react'
import blogs from '../data/blogs'
import blogpic from '../images/Blog.jpg'
import "./Blogs.css"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


function Blogs() {

  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([])


  useEffect(() => {
    const result = blogs.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    setFilterBlog(result)
  }, [search])

  return (
    <div className='container mx-auto p-10'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-full mb-5'>
          <input type="text" className='p-2 rounded-md border-2 border-black w-full' placeholder='Seach blogs' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <article>
          {filterBlog.map((item) => (
            <Link to={`/Blogs/${item.id}`} key={item.id}>
              <div className='flex flex-col justify-center items-center'>
                  <h2 className='font-bold text-lg mb-3' >{item.title}</h2>
                  <img className='w-[500px] rounded-md mb-3 h-[300px]' src={item.image_url} alt="" />
                  <hr />
              </div>
            </Link>
          ))}
        </article>
      </div>
    </div>
  )
}

export default Blogs