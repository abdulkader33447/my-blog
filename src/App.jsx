import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount,setReadingCount]=useState(0)

  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked,blog]);
  };

// console.log(bookmarked)

const handleMarkAsRead= (time,id)=>{
  // console.log('hello')
  // console.log(time)
  // console.log(id)
  setReadingCount(readingCount+time)
  handleRemoveFromBookmark(id)

}

const handleRemoveFromBookmark=(id)=>{
const remainingBookmark=bookmarked.filter((mark)=>mark.id !==id)
// console.log(remainingBookmark);
setBookmarked(remainingBookmark)
}

// console.log(readingCount) 
  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex gap-5 text-center">
        <div className="left-container w-[70%] border">
          <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time : {readingCount}</h1>
          <h1>bookmarked count : {bookmarked.length}</h1>
          {
            bookmarked.map(marked => <p key={marked.id} className="text-xl p-2 m-2 rounded-xl bg-purple-100">{marked.title}</p>)
          }
        </div>
      </div>
    </>
  );
}

export default App;
