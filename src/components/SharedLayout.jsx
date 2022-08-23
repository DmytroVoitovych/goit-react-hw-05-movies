import { List } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import {NavLink } from "react-router-dom";

export const SharedLayout = () => {
    return (
      <>
    <header>
       <nav>
        <List >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
        </List>
         </nav>
      </header>
            <Outlet />
             {/* /* отвечает за все дочернее содержимое */ }
            </>
  );
};
