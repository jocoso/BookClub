import styled from "styled-components";

export default styled.div`

    box-shadow: 0 0.3rem 0.3rem 0 rgba( 0, 0, 0, 0.2 );
    transition: 0.3s;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    

    &:hover {
        box-shadow: 0 0.7rem 0.3rem 0 rgba( 0, 0, 0, 0.2 );
    }

    .container {
        padding: 2px 16px;
    }

    p.title {
        font-family: font-family: 'Overpass', sans-serif;
        border-radius: 0.5rem 0.5rem 0 0;
        background: black;
        color: white;
        font-size: 1.3rem;
        padding: 0.5rem;
        margin: 0px;
    }

    p {
        font-size: 0.9rem;
    }

    .information {
        margin-left: 0.2rem;
        font-family: 'Mate', serif;
        padding: 0.8rem;
    }

    strong {
        width: 1rem;
        font-size: 1.1rem;
    }

`;