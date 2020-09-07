import React from 'react';
import styled from 'styled-components';

export default function BasicInformationPage( { bookData } ) {
    return (
        <StyledPage>
            <p className="title">{bookData.title}</p>
            <div className="subtitle"> [basic information] </div>
            <img src={bookData.img} alt="book cover" />
            <table>
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
        </StyledPage>
    )
}

const StyledPage = styled.div`
    margin: 0 auto;
    
    table {
        width: 60%;
        border-collapse: collapse;
    }

    img {
        width: 40%;
        float: right;
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
        font-size: 0.65vw;
    }

    tr td:nth-child(2) {
        font-family: sans-serif;
        font-size: 0.65vw;
        font-weight: light;
    }

    
    .title {
        font-family: 'Overpass', sans-serif;
        font-weight: bold;
        text-align: center;
        font-size: 1vw;
        text-decoration: underline;
    }

    .subtitle {
        background: black;
        color: white;
        text-transform: capitalize;
        font-size: 1vw;
    }
`;
