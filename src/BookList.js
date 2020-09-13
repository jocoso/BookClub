import React, { Component } from "react";
import BookCard from "./Components/BookCard/BookCard";
import ModalComponent from "./Components/Modal/index";
import BasicInformationPage from "./Components/Pages/BasicInformation";

class BookList extends Component {
    state = {
        modalHidden: true,
        modalContent: "",
        books: [
            {
                id: 0,
                title: "Farenheit 251",
                author: "Ray Bradbury",
                genres: [ "Dystopian", "Action", "Fiction" ],
                yop: "October 19, 1953",
                characters: [ 
                    "Guy Montag",
                    "Clarisse McClellan",
                    "Mildred",
                    "Beatty"
                ],
                synopsis: 
                "In an oppressive future, a fireman whose duty is to destroy all books begins to question his task.",
                img: "https://images-na.ssl-images-amazon.com/images/I/71ub2nWheJL.jpg",
                theme: {
                    titleBg: "#d93d25",
                    titleColor: "#ebe1d0",
                    background: "#0a0a0a",
                    contentColor: "#d93d25"
                }
            },
            {
                id: 1,
                title: "Unbirthday",
                author: "liz Braswell",
                genres: [ "Fantasy", "Fiction" ],
                yop:"September 1, 2020",
                copyright: "2020 Disney Enterprises, Inc",
                characters: [
                    "Alice",
                    "Red Queen"
                ],
                synopsis:
                "What if Wonderland was in peril and Alice was very, very late",
                img: "https://i1.wp.com/books.disney.com/content/uploads/2020/05/TT_Unbirthday_CVR.jpg?fit=1720%2C2550&ssl=1",
                theme: {
                    titleBg: "#631c26",
                    titleColor: "#ae343b",
                    background: "#0b0a0a",
                    contentColor: "#c4bf72"
                }

            },
        ]
    }

    searchBook =  id => {
        return this.state.books.find(book => book.id === id);
    }

    openBookModal =  id => {
        const book = this.searchBook(id);
        console.log(book.theme.titleBg);
        this.setState(
            {modalContent: <BasicInformationPage bookData={book} theme={book.theme} />}, () => this.setState({modalHidden: false})
        );
    }

    closeBookModal = () => {
        this.setState(
            {
                modalContent: '',
                modalHidden: true
            }
        );
    }
    
    render() {
        return(
            <div><h1>Book List</h1>
            {<ModalComponent 
                handleClose={this.closeBookModal}
                hidden={this.state.modalHidden}    
            >
                {this.state.modalContent}    
            </ModalComponent>}
                {this.state.books.map(
                    book => {
                        return <BookCard 
                            key={ book.title } 
                            bookData={ book } 
                            onClick={ this.openBookModal }
                        />
                    }
                )}
            </div>
        );
    }
}

export default BookList;