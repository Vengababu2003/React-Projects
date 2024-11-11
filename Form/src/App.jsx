import './App.css'
import { useEffect,useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import Favourites from './components/Favourites'
import PostDataComponent from './components/PostDataComponent'
function App() {
  
  // let [posts,setposts] = useState([])

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res=> res.json())
  //   .then(data =>setposts(data))
  // },[])
    
  return (
    <>
    {/* <div>
      <table>
        <thead>
          <th>User Id</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>
          {posts.map((postobj) =>(
            <tr  key={postobj.id}>
              <td>{postobj.userId}</td>
              <td>{postobj.id}</td>
              <td>{postobj.title}</td>
              <td>{postobj.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   */}
      {/* <Form/> */}
      {/* <List/>  */}
      <Favourites/>
      {/* <PostDataComponent/> */}
    </>
  )
}

export default App
