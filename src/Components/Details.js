import React from 'react'
import { useState } from 'react'


function Details(props) {
  
  return (
    <>
      {props.loading && <svg className='loadingsvg' viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="none" fill-rule="evenodd" stroke-width="2">
        <circle cx="22" cy="22" r="1">
            <animate attributeName="r"
                begin="0s" dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                begin="0s" dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="1">
            <animate attributeName="r"
                begin="-0.9s" dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                begin="-0.9s" dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite" />
        </circle>
    </g>
</svg>}

    {!props.loading && props.error && <div className="error">
      <svg class="icon icon-tabler icon-tabler-face-id-error error_svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2"/><path d="M4 16v2a2 2 0 0 0 2 2h2"/><path d="M16 4h2a2 2 0 0 1 2 2v2"/><path d="M16 20h2a2 2 0 0 0 2 -2v-2"/><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M9.5 15.05a3.5 3.5 0 0 1 5 0"/></svg>
    <span className='er-msg'>Error: {props.error}</span></div>}
    {!props.loading && !props.error && props.data && <div>
      <div className="details">
        {props.data.places.length == 1 && <h2>Hurray! We found the place</h2>}
        {props.data.places.length != 1 && <h2>Hurray! We found some places</h2>}
        {props.data.places.map( (item, index) => (
        <div className="card">
          <h4 style={{textAlign: 'center'}}> {item['place name']}</h4>
          <h5 style={{textAlign: 'center'}}> {item.state}</h5>
          <hr />
          <div className='latlong'>
            <h5> <b className='attr'>Latitude: </b>{item.latitude}</h5>
            <h5> <b className='attr'>Longitude: </b>{item.longitude}</h5>
          </div>
        </div>))}
      </div>
    </div>}
    </>
  )
}

export default Details