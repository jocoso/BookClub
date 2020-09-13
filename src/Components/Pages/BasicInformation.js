import React from 'react';
import styled from 'styled-components';
import CircleButton from '../CircleButton/index';

export default function BasicInformationPage( { bookData, theme } ) {
    return (
        <StyledPage theme={theme}>
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
            <div className="row footer">
                <CircleButton radius={2.5}> {"<"} </CircleButton>
                <CircleButton radius={2.5}> {">"} </CircleButton>
            </div>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    margin: 0 auto;
    height: 30%;
    
    .content table {
        width: 60%;
        text-align: center;
        overflow: scroll;
    }

    .content img {
        width: 40%;
        display: block;
        margin-top: auto;
        margin-bottom: auto;
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
        margin: 0;
        padding: 0;
        background: ${props => props.theme.titleBg ? props.theme.titleBg : "gray"};
        color: ${props => props.theme.titleColor ? props.theme.titleColor : "black"};
    }

    .subtitle {
        background: black;
        color: white;
        text-transform: capitalize;
        font-size: 1.5vw;
        text-align: center;
    }

    .content {
        background: ${props => props.theme.background ? props.theme.background : "white" };
        color: ${props => props.theme.contentColor ? props.theme.contentColor : "black"};
        padding: 10px;
    }

    .footer{
        background: ${props => props.theme.titleBg ? props.theme.titleBg : "gray"};
        display: block;
        width: 100%;
        border-radius: 0 0 0.6rem 0.6rem;
    }

    .footer button {
        position: relative;
        left: 100%;
        transform: translate(-220%, 0);
        background: ${props => props.theme.titleColor ? props.theme.titleColor : "black"};
    }
`;
