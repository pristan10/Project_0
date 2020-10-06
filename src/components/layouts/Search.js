import React, { Component } from 'react'

  class Search extends Component {
    render() {
        return (
            <div>
                <div class="h-100 row align-items-center mt-5 mb-5">
<form style={{alignContent:'center !important'}} class="my-auto form-inline my-2 my-lg-0 mt-5  mb-5 pb-5 m-auto" >
      <input class="form-control mr-sm-2" type="search" placeholder="Postalcode" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>
            </div>
        )
    }
}

export default Search
