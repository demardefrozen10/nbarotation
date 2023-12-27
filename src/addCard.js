import {useState} from "react";
export default function AddCard(props) {
    return <>
    <div className="playerAdder">
    <h1>Add Players To Your Rotation</h1>
    <form onSubmit={props.onFormSubmit}>
        <label htmlFor="Name">Name: </label>
        <input type="text" id="Name" name="FirstName" value={props.name} onChange={props.onNameChange}/>
        <br/>
        <label htmlFor="position">Position: </label>
        <select id="position" value={props.position} onChange={props.onPositionChange}>
            <option value="Point Guard">Point Guard</option>
            <option value="Shooting Guard">Shooting Guard</option>
            <option value="Small Forward">Small Forward</option>
            <option value="Power Forward">Power Forward</option>
            <option value="Center">Center</option>
        </select>
        <br/>
        <label htmlFor="playerMinutes">Allocate minutes: </label>
        <input type="range" min="1" max="48" value={props.minutes} onChange={props.onMinutesChange}/>
        <p>{props.minutes}</p>
        <br/>
        <input type="submit" value="Add"/>
        <p>{props.warning}</p>
        <br/>
        {props.PG !== 0 && <p>Point Guard: {props.PG} </p>}
        {props.SG !== 0 && <p>Shooting Guard: {props.SG} </p>}
        {props.SF !== 0 && <p>Small Forward: {props.SF} </p>}
        {props.PF !== 0 && <p>Power Forward: {props.PF} </p>}
        {props.C !== 0 && <p>Center: {props.C} </p>}
   </form>
   </div>
    </>;
}