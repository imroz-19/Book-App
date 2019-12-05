import React from 'react';

export default function BookList(props) {
    return (
        <div className="table-div">
          <div className="table-div__head">
            <div className="col">Book</div>
            <div className="col">Author Name</div>
            <div className="col">Details</div>
          </div>
        {
            props.items.map((item, index) => {
                const { volumeInfo: { authors = [], imageLinks: { smallThumbnail } } } = item;
                return (
                    authors[0] && <div key={index} className="table-div__body-ele">
                    <div className="col">
                        <img src={smallThumbnail} alt="bookName" className="col"/>
                    </div>
                        <div className="col">{authors[0]}</div>
                        <div className="col">
                            <button onClick={ () => { props.addSelectedBookDetails(item); }}>Get Author Details</button>
                        </div>
                    </div>
                );
            })

        }
    </div>
    );
}