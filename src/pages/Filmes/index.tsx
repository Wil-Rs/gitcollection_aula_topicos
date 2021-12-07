import React from 'react'
import { Formulario, FilmesList, Title } from './styles'

import logo from '../../assets/logo.svg'
import axios from 'axios'

export const Filmes: React.FC = () => {

    // vamos criar um tipo de dados
    interface IFilmesInfo {
        Title: string;
        Year: string;
        owReleasedner: string;
        Genre: string;
        Director: string;
        Poster: string;
        Ratings:
            {
              Source: string;
              Value: string;
            }
    }
    
    const [novoFilme, setNovoFilme] = React.useState('')
    const [filme, setFilme] = React.useState<IFilmesInfo[]>([])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void{
       
        setNovoFilme(event.target.value)
        
    }
 
    async function handleAddRepo(event: React.FormEvent<HTMLFormElement>, ): Promise<void>{

        event.preventDefault(); 
        
        try {
            const resposta = await axios.get<IFilmesInfo>(`https://www.omdbapi.com/?t=${novoFilme}&apikey=a5370246`)
            const aux = resposta.data 
            console.log(filme)
            setFilme([...filme, aux]) 
        }
        catch {
            console.log(`Filme não encontrado`)
        }
    }

    return (
        <>
            <img src={logo} alt="Git Collection"/>
            <Title> Catálogo de Filmes </Title>
            <Formulario onSubmit={handleAddRepo}>
                <input placeholder="titulo do filme" onChange={handleInputChange}/>
                <button type="submit"> Buscar </button>
            </Formulario>
            <FilmesList>
                {
                    filme.map((item, indice) => (
                        <div>
                            <div>
                                <img src={item.Poster} alt={item.Title} />
                                <p><strong>{item.Title}</strong></p>
                                <p>{item.Genre}</p>
                                <p>{item.Director}</p>
                                <p>{item.Year}</p>
                            </div>
                        </div>
                    ))
                }
            </FilmesList>
        </>
    )
}