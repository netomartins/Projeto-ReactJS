import React, {useState} from 'react';
import Header from './components/Header'
import './components/App.css';

import backgroundImage from './assets/background.jpg';

function App() {

const [projects, setProjets] = useState(['Desenvolvimento de app', 'Frontend web'])

function handeAddProject(){
    //projects.push(`Novo Projeto ${Date.now()}`)

    setProjets([...projects, `Novo Projeto ${Date.now()}` ])
    


    console.log(projects);
}

    return (
        <>
            <Header title="Projects"/>

            <img width={300}src={backgroundImage}/>

                <ul>
                    {projects.map(project => <li key={project}>{project}</li>)}
                </ul>

                <button type="button" onClick={handeAddProject}>Adicionar projeto</button>

           
        </>
    )
}

export default App;