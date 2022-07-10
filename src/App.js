import categories from './api';
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
     <Banner/>
      {/* Em alta */}

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
