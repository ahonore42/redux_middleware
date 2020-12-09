import {
  GetDepartmentProducts,
  GetDepartments
} from '../../services/DepartmentService'
import { GET_DEPARTMENTS, GET_DEPARTMENT_PRODUCTS } from '../types'

export const getDepartments = () => async (dispatch) => {
  try {
    const departments = await GetDepartments()
    // console.log(departments)
    dispatch({
      type: GET_DEPARTMENTS,
      payload: departments
    })
  } catch(err) { throw err }
};

export const getDepartmentProducts = (id) => async (dispatch) => {
  try {
    const products = await GetDepartmentProducts(id)
    console.log(products)
    dispatch({
      type: GET_DEPARTMENT_PRODUCTS,
      payload: products
    })
  } catch(err) { throw err }
}

