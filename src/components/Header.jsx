import './Header.css';

export default function Header() {
   return(
      <header className="Header">
         <div className="react-img"></div>
         <h1><span className="react-clr">React</span> CRUD</h1>
         <nav>
            <ul>
               <li>Add User</li>
               <li>Add</li>
            </ul>
         </nav>
      </header>
   );
}