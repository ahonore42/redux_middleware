import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDepartments } from '../store/actions/DepartmentActions';

const mapStateToProps = ({ departmentState }) => {
  return { departmentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDepartments: () => dispatch(getDepartments())
  }
}

const Departments = (props) => {
  const {fetchDepartments} = props

  useEffect(() => {
    fetchDepartments()
  }, [fetchDepartments])

  return (
    <div>
      {props.departmentState.departments.map((department) => (
        <ul key={department.id}>
          <Link to={`/departments/${department.id}`}>{department.name}</Link>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Departments)
