import React, { Component } from "react";
import "./Employee.css";
import { Link } from "react-router-dom";

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
        {this.props.employees.map(employee => (
          <div key={employee.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                {employee.name}
                <Link className="nav-link" to={`/employees/${employee.id}`}>
                  Details
                </Link>
                <a
                  href="#"
                  onClick={() => this.props.deleteEmployee(employee.id)}
                  className="card-link"
                >
                  Delete
                </a>
              </h5>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

// import React, { Component } from 'react'
// class EmployeeList extends Component {
//   render() {
//     return (
//       <section className="employees">
//         {
//           this.props.employees.map(employee =>
//             <div key={employee.id}>
//               {employee.name}
//             </div>
//           )
//         }
//       </section>
//     )
//   }
// }

// export default EmployeeList

// import React, { Component } from 'react'
// export default class EmployeeList extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Employee List</h1>
//                 <section>Jessica Younker</section>
//                 <section>Jordan Nelson</section>
//                 <section>Zoe LeBlanc</section>
//                 <section>Blaise Roberts</section>
//             </article>
//         );
//     }
// }
