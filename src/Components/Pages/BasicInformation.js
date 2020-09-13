import React from 'react';
import styled from 'styled-components';

export default function BasicInformationPage( { bookData } ) {
    return (
        <StyledPage className="row">
            <p className="title row">{bookData.title}</p>
            <div className="subtitle row"> [basic information] </div>
            <div className="row content">
                <table className="column">
                    <tbody>
                        <tr>
                            <td>author:</td>
                            <td>{bookData.author}</td>
                        </tr>


                        <tr>
                            <td>genre:</td>
                            <td>
                                <ul>
                                    {bookData.genres.map(
                                        genre => {
                                        return <li key={genre}>{genre}</li>
                                        }
                                    )}
                                </ul>
                            </td>
                        </tr>


                        <tr>
                            <td>year of publication:</td>
                            <td>{bookData.yop}</td>
                        </tr>

                        <tr>
                            <td>characters: </td>
                            <td>
                                <ul>
                                    { bookData.characters.map(
                                        character => {
                                            return <li key={character}>{character}</li>
                                        }
                                    ) }
                                </ul>
                            </td>
                        </tr>

                        <tr>
                            <td>synopsis: </td>
                            <td>{bookData.synopsis}</td>
                        </tr>
                    </tbody>
                </table>
            

                <img className="column" src={bookData.img} alt="book cover" />
            </div>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    margin: 0 auto;
    height: 30%;
    
    table {
        width: 60%;
        text-align: center;
        overflow: scroll;
    }

    img {
        width: 40%;
    }

    tr td {
        text-align: left;
    }

    td {
        border: none;
    }

    tr td:first-child {
        font-weight: bold;
        text-transform: capitalize;
        font-size: 1.3vw;
    }

    tr td:nth-child(2) {
        font-family: sans-serif;
        font-size: 1.3vw;
        font-weight: light;
    }

    
    .title {
        font-family: 'Overpass', sans-serif;
        font-weight: bold;
        text-align: center;
        font-size: 2vw;
        text-decoration: underline;
        text-align: center;
    }

    .subtitle {
        background: black;
        color: white;
        text-transform: capitalize;
        font-size: 1.5vw;
        text-align: center;
    }

    .content {
        
    }
`;
