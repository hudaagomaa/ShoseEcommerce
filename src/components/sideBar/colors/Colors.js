import React from 'react';
import './colors.css';
export default function Colors() {
  return (
    <div>
       <h2 className="sidebar-title">Colors</h2>

<div style={{marginBottom: '55px'}}>
<label className="sidebar-label-container">
    <input type="radio" value="all" name="category" />
    <span className="checkmark"></span>All
  </label>
  <label className="sidebar-label-container">
    <input type="radio" value="heels" name="category" />
    <span className="checkmark"></span>Black
  </label>
  <label className="sidebar-label-container">
    <input type="radio" value="sandals" name="category" />
    <span className="checkmark"></span>blue
  </label>
  <label className="sidebar-label-container">
    <input type="radio" value="flats" name="category" />
    <span className="checkmark"></span>red
  </label>
  <label className="sidebar-label-container">
    <input type="radio" value="sneakers" name="category" />
    <span className="checkmark"></span>green
  </label>
  <label className="sidebar-label-container">
    <input type="radio" value="sneakers" name="category" />
    <span className="checkmark"></span>white
  </label>
</div>
    </div>
  );
}
