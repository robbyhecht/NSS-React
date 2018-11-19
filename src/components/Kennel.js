import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import "./Kennel.css"

class Kennel extends Component {

  // These will eventually get pulled from the API

  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ]

  animalsFromAPI = [
    { id: 1, name: "Arisari" },
    { id: 2, name: "Giraffe" },
    { id: 3, name: "Sloth" },
    { id: 4, name: "Elephant"}
  ]

  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" },
    { id: 2, name: "Emma Beaton" },
    { id: 3, name: "Dani Adkins" },
    { id: 4, name: "Adam Oswalt" },
    { id: 5, name: "Fletcher Bangs" },
    { id: 6, name: "Angela Lee" }
  ]

  // intersection table
  relationshipsFromAPI = [
    { id: 1, animal_id: 1, owner_id: 1 },
    { id: 2, animal_id: 2, owner_id: 2 },
    { id: 3, animal_id: 2, owner_id: 3 },
    { id: 4, animal_id: 3, owner_id: 4 },
    { id: 5, animal_id: 3, owner_id: 5 },
    { id: 6, animal_id: 4, owner_id: 6 },
  ]

  // Initial state

  state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    relationships: this.relationshipsFromAPI
  }

  // render function

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals} />
      </article>
    )
  }
}

export default Kennel


// export default class Kennel extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         {/* invoke the whole location & employee modules */}
//         <LocationList />
//         <EmployeeList />
//       </React.Fragment>
//     )
//   }
// }