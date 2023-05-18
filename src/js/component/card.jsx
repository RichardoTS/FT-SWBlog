import React from 'react'

const Card = (props) => {
    

    return (
        props.elements &&
        props.elements.results.map((element, i) => (
            <div className="col-md-4" key={i}>
                
                <div className="card-body">
                    <h3 className='card-title fs-5 text-center'>
                        {element.name}
                    </h3>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <Link to={`${element.name.split(" ").join("").toLowerCase()}/${element.uid}`}>
                        <button type="button" className="btn btn-secondary">
                            Detail
                        </button>
                    </Link>
                </div>
            </div>
        ))
    )
}

export default Card