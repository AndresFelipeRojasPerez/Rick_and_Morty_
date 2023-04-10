import SearchBar from './SearchBar/SearchBar.jsx'
import style from "./Nav.module.css"
import { Link } from 'react-router-dom';



export default function Nav(props) {

      
      return (
         <div className={style.container}>
         <Link className={style.aboutLink} to = "/about">
         <p> About </p></Link>
          

         <Link className={style.aboutHome}  to = "/home">
         <p> Home </p></Link>

          <SearchBar  onSearch={props.onSearch}/>

         <Link className={style.aboutFavorites}  to = "/favorites">
         <p> Favorites </p></Link>

         <Link className={style.aboutLogout}  to = "/">
         <p> Logout </p></Link>

       </div>
    );
   }
 