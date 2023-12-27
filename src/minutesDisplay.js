
export default function DisplayMinutes(props) {
    return <>
    {props.PG !== 0 && <p>Point Guard: {props.PG} </p>}
    <br/>
    {props.SG !== 0 && <p>Shooting Guard: {props.SG} </p>}
    <br/>
    {props.SF !== 0 && <p>Small Forward: {props.SF} </p>}
    <br/>
    {props.PF !== 0 && <p>Power Forward: {props.PF} </p>}
    <br/>
    {props.C !== 0 && <p>Center: {props.C} </p>}

    </>;
}