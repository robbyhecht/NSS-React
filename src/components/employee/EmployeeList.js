import React, { Component } from 'react'
class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
        {
          this.props.employees.map(employee =>
            <div key={employee.id}>
              {employee.name}
            </div>
          )
        }
      </section>
    )
  }
}

export default EmployeeList


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