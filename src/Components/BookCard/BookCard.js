import React, {Component} from 'react';
import Card from "../../Styled/Card";

class BookCard extends Component {
    render() {
        return(
            <Card onClick={ () => { this.props.onClick( this.props.bookData.id ) } }>
                <p className="title"> { this.props.bookData.title } </p>
                <div className="information">
                    <strong>Author:</strong><p> { this.props.bookData.author } </p>
                    <strong>Year of Publication:</strong> <p> { this.props.bookData.yop }  </p>
                    {this.props.bookData.copyright && <div><strong>Copyright:</strong> <p> { "©" + this.props.bookData.copyright } </p></div>}
                    <strong>Synopsis:</strong> <p>
                        { this.props.bookData.synopsis }
                    </p>
                </div>
            </Card>
        );
    }
}

export default BookCard;