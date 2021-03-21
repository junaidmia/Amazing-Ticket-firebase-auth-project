import React from 'react';
import { Link } from 'react-router-dom';

const BusCategories = (props) => {
    const { title, img, id } = props.busCategory


    const design = {
        width: '50%',
        margin: '0 auto',
        paddingTop: '20px',


    }
    return (
        <Link to={`/busDetails/${id}`} className="col-md-3" style={{textDecoration:'none',color:'black'}}>

            <div>
                <div class="card m-3" style={{ height: '200px' }} >
                    <div className="" style={design}>
                        <img src={img} class="card-img-top " alt="..." />
                    </div>

                    <div class="card-body">
                        <h4 className="text-center">{title}</h4>
                        {/* <p>{id}</p> */}
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default BusCategories;
