import React, { Component } from 'react'

class LocationList extends Component {
  render() {
    return (
      <section className="locations">
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              {location.name}
            </div>
          )
        }
      </section>
    )
  }
}

export default LocationList


// import React, { Component } from 'react'

// export default class LocationList extends Component {
//   render() {
//     return (
//       <React.Fragment>
//       <div>
//       <h3>Student Kennels</h3>
//       <h4>Nashville North</h4>
//       <h5>500 Puppy Way</h5>
//       </div>
//       <div>
//       <h3>Student Kennels</h3>
//       <h4>Nashville South Location</h4>
//       <h5>500 Old Dog Ave</h5>
//       </div>
//       </React.Fragment>
//     );
//   }
// }