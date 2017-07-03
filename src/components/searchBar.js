import React, { Component } from 'react';

// const baseURL = "http://localhost:3000/api/v1/items"

export default function SearchBar(props) {


    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"

          placeholder={"search your closet"}
          onChange={props.handleChange}
        />
        <i className="circular search link icon"></i>
      </div>

    )
}
