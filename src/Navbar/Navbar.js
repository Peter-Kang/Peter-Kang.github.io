import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="./">Home</Link>
                  <Link to="./Work">Work</Link>
                  <Link to="./Projects">Projects</Link>
            </div>
      )
}
export default Navbar;