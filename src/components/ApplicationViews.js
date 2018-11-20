import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
// import AnimalManager from "../modules/AnimalManager"


class ApplicationViews extends Component {
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
    { id: 1, name: "Doodles" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Angus" },
    { id: 4, name: "Henley" },
    { id: 5, name: "Derkins" },
    { id: 6, name: "Checkers" }
  ]

  ownersFromAPI = [
    { id: 1, phone: "865-489-6616", name: "Ryan Tanay" },
    { id: 2, phone: "615-222-2222", name: "Emma Beaton" },
    { id: 3, phone: "444-555-6666", name: "Dani Adkins" },
    { id: 4, phone: "666-777-9999", name: "Adam Oswalt" }
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

  state = {
    locations: [],
    animals: [],
    employees: []
}
  // state = {
  //   employees: this.employeesFromAPI,
  //   locations: this.locationsFromAPI,
  //   animals: this.animalsFromAPI,
  //   owners: this.ownersFromAPI,
  //   relationships: this.relationshipsFromAPI
  // }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews

// Create a route for /owners that renders the <OwnerList> component and sends the corresponding state property.