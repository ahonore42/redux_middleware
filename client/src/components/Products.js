import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getDepartmentProducts } from '../store/actions/DepartmentActions'

const mapStateToProps = ({productState}) => {
    return { productState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (id) => dispatch(getDepartmentProducts(id))
    }
}

const Products = (props) => {
    const {match, fetchProducts} = props
   
    useEffect(() => {
        fetchProducts(match.params.id)
    }, [match.params.id, fetchProducts])

    const products = props.productState.products.map((pro, index) => {
        return (
            <li key={index}>
                <h4>{pro.name}</h4>
                <p>{pro.description}</p>
            </li>
        )
    })

    return (
        <div>
            {props.productState.products.length ? 
            <div>
                <h2>Products</h2>
                <ul>
                    {products}
                </ul>
            </div>
            :
            <h2>No Products</h2>
            }

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)