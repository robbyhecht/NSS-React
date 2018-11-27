import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalManager from "../modules/AnimalManager";
import EmployeeManager from "../modules/EmployeeManager";
import LocationManager from "../modules/LocationManager";
import OwnerManager from "../modules/OwnerManager";
// import AnimalManager from "../modules/AnimalManager"

export default class ApplicationViews extends Component {
  state = {
    locations: [],
    animals: [],
    employees: [],
    owners: []
  };

  componentDidMount() {
    const newState = {};

    // fetch("http://localhost:5002/locations")
    //   .then(r => r.json())
    //   .then(locations => (newState.locations = locations))

    LocationManager.getAll().then(
      locations => (newState.locations = locations)
    );

    // .then(() => fetch("http://localhost:5002/animals"))
    // .then(r => r.json())
    // .then(animals => (newState.animals = animals));

    AnimalManager.getAll().then(animals => (newState.animals = animals));

    // .then(() => fetch("http://localhost:5002/employees"))
    // .then(r => r.json())
    // .then(employees => (newState.employees = employees))

    EmployeeManager.getAll().then(
      employees => (newState.employees = employees)
    );

    // .then(() => fetch("http://localhost:5002/owners"))
    // .then(r => r.json())
    // .then(owners => (newState.owners = owners))

    OwnerManager.getAll()
      .then(owners => (newState.owners = owners))

      .then(() => this.setState(newState));
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <LocationList locations={this.state.locations} />;
          }}
        />
        <Route
          path="/animals"
          render={props => {
            return (
              <AnimalList
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
              />
            );
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return (
              <EmployeeList
                deleteEmployee={this.deleteEmployee}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return (
              <OwnerList
                deleteOwner={this.deleteOwner}
                owners={this.state.owners}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }

  // refactored to include function from AnimalManager module
  deleteAnimal = id => {
    return AnimalManager.removeAndList(id).then(animals =>
      this.setState({
        animals: animals
      })
    );
  };

  deleteEmployee = id => {
    return EmployeeManager.removeAndList(id).then(employees =>
      this.setState({
        employees: employees
      })
    );
  };

  deleteOwner = id => {
    return OwnerManager.removeAndList(id).then(owners =>
      this.setState({
        owners: owners
      })
    );
  };
}

// Create a route for /owners that renders the <OwnerList> component and sends the corresponding state property.

// employeesFromAPI = [
//   { id: 1, name: "Jessica Younker" },
//   { id: 2, name: "Jordan Nelson" },
//   { id: 3, name: "Zoe LeBlanc" },
//   { id: 4, name: "Blaise Roberts" }
// ]

// locationsFromAPI = [
//   { id: 1, name: "Nashville North", address: "500 Circle Way" },
//   { id: 2, name: "Nashville South", address: "10101 Binary Court" }
// ]

// animalsFromAPI = [
//   { id: 1, name: "Doodles" },
//   { id: 2, name: "Jack" },
//   { id: 3, name: "Angus" },
//   { id: 4, name: "Henley" },
//   { id: 5, name: "Derkins" },
//   { id: 6, name: "Checkers" }
// ]

// ownersFromAPI = [
//   { id: 1, phone: "865-489-6616", name: "Ryan Tanay" },
//   { id: 2, phone: "615-222-2222", name: "Emma Beaton" },
//   { id: 3, phone: "444-555-6666", name: "Dani Adkins" },
//   { id: 4, phone: "666-777-9999", name: "Adam Oswalt" }
// ]

//   // intersection table
// relationshipsFromAPI = [
//   { id: 1, animal_id: 1, owner_id: 1 },
//   { id: 2, animal_id: 2, owner_id: 2 },
//   { id: 3, animal_id: 2, owner_id: 3 },
//   { id: 4, animal_id: 3, owner_id: 4 },
//   { id: 5, animal_id: 3, owner_id: 5 },
//   { id: 6, animal_id: 4, owner_id: 6 },
// ]

// --

// state = {
//   employees: this.employeesFromAPI,
//   locations: this.locationsFromAPI,
//   animals: this.animalsFromAPI,
//   owners: this.ownersFromAPI,
//   relationships: this.relationshipsFromAPI
// }

// export default ApplicationViews

// old unmodularized delete code:
// deleteAnimal = id => {
//   return fetch(`http://localhost:5002/animals/${id}`, {
//     method: "DELETE"
//   })
//     .then(e => e.json())
//     .then(() => fetch(`http://localhost:5002/animals`))
//     .then(e => e.json())
//     .then(animals =>
//       this.setState({
//         animals: animals
//       })
//     );
// };
