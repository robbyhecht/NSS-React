import React, { Component } from "react";
import "./Employee.css";

export default class EmployeeDetail extends Component {
  render() {
    const employee =
      this.props.employees.find(
        a => a.id === parseInt(this.props.match.params.employeeId)
      ) || {};

    return (
      <section className="employee">
        <div key={employee.id} className="card">
          <div className="card-body">
            <h4 className="card-title">{employee.name}</h4>
            <a
              href="#"
              onClick={() =>
                this.props
                  .deleteEmployee(employee.id)
                  .then(() => this.props.history.push("/employees"))
              }
              className="card-link"
            >
              Delete
            </a>
          </div>
        </div>
      </section>
    );
  }
}
