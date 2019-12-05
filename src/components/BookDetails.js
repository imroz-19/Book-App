import React from 'react';
import { connect } from 'react-redux';

class BookDetails extends React.Component{
    render() {
        const { title, subtitle, imageLinks: { thumbnail }, publishedDate, authors, language } = this.props.details;
        return(
            <div className="book-detail">
                <img src={thumbnail} alt={title} />
                <div className="b-info">
                    <div className="title">{title}</div>
                    <div className="subtitle">{subtitle}</div>
                </div>
                <div className="author">
                    Author: {authors[0]}
                </div>
                <div className="published">
                    Published Date: {publishedDate}
                </div>
                <div className="lang">
                    language: {language.toUpperCase()}
                </div>
            </div>
        )   
    }
}

const getDataFromCache = () => {
    const data = JSON.parse(window.localStorage.getItem('bookDetails'));
    return data.volumeInfo;
}

const mapStateToProps = (state) => {
    return {
        details: (state.selectedBookDetails && state.selectedBookDetails.volumeInfo) || getDataFromCache()
    }
}

export default connect(mapStateToProps)(BookDetails);