
import { Suspense } from 'react';
import './App.css'
import Countries from './Countries';
// import ToDo from './Todo';

const countriesPromis=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())
function App() {
 

  return (
    <>
     <Suspense fallback={<p>waiting for message...</p>}>
    <Countries countriesPromis={countriesPromis}></Countries>
    </Suspense>
     
    
    </>
  )
}

export default App
