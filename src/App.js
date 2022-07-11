import categories from './api';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
      {categories.map((category,index) => {
        return(
          <Row 
            key={category.name} 
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        )
      })}
    </div>
  );
}

export default App;
