import { useState } from "react";
import "./App.css";
import items from "./data";
import { Categories } from "./components/Categories";
import { Menu } from "./components/Menu"; 

function App() {
  const categories = ["all", ...new Set(items.map((item) => item.category))];
  const [menus, setMenus] = useState(items);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenus(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);

    setMenus(newItems);
  };

  return (
    <main>
      <section className='navbar'>
        <div className='title'>
          <h1>Our Menu</h1>
          <div className='underline'></div>
          </div>
          <Categories menuList={categories} filterItems={filterMenu}/>
          <Menu menus={menus}/>
      </section>
    </main>
  );
}

export default App;