import './App.css';
import styled from "styled-components";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";


const AppSection = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: var(--primary-color);
  padding-bottom: 0.75rem;
  color: white;
  transition: background-color 0.5s ease-in-out 0s;
  align-items: center;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
   
  }
  a {
    text-decoration: none;
    color: gold;
  }
  .container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    background-color: var(--primary-color);
    padding-bottom: 0.75rem;
    color: white;
    transition: background-color 0.5s ease-in-out 0s;
  }
.content{
  padding: 0 0.75rem;
  max-width: 38.75rem;
  width: 100%;
  font-weight: 300;
  display: flex;
  flex-grow: 1;
  align-self: center;
  flex-direction: column;
}
`


function App() {
  return (

          <AppSection>
              <div className='container'>
                  <Header/>
                  <div className={'content'}>
                      <Timer/>
                  </div>
              </div>


          </AppSection>


  );
}

export default App;
