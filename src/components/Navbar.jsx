import React from 'react'
import {useNavigate} from 'react-router'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();
   
   const s = "bg-white text-orange-700 p-2 m-2"
    return (
        <div className="bg-orange-700 h-20 p-4">
          <ul className="flex list-none">
            <li className="mr-2">
              <Link className={s} to="/">
                Home
              </Link>
            </li>
            <li className="mr-2">
              <Link className={s} to="/Books">
                Add Books
              </Link>
            </li>
            <li className="mr-2">
              <Link className={s} to="/Booklist">
                List Of Books
              </Link>
            </li>
            <li className="mr-2">
              <Link className={s} to="/Bookupdate">
                Update a Book
              </Link>
            </li>
            <li>
              <Link className={s} to="/Bookdel">
                Delete a book
              </Link>
            </li>
            <li><button className={s} onClick={()=>{props.tix();}}>logout</button></li>
          </ul>

          

        </div>
      )
}

export default Navbar