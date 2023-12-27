import PlayerList from "./playerList.js";
import { useState, useEffect } from "react";
import AddCard from "./addCard.js";
export default function NBARotation() {
   const [name, setName] = useState("");
   const [minutes, setMinutes] = useState(1);
   const [position, setPosition] = useState("Point Guard");
   const [players, setPlayers] = useState([]);
   const [warning, setWarning] = useState("");
   const [PG, setPG] = useState(0);
   const [SG, setSG] = useState(0);
   const [SF, setSF] = useState(0);
   const [PF, setPF] = useState(0);
   const [C, setC] = useState(0);
   const positionConverter = {
   'Point Guard': PG,
   'Shooting Guard': SG,
   'Small Forward': SF,
   'Power Forward': PF,
   'Center': C
};


   function handleFormSubmit(event) {
      event.preventDefault();
      if (!name) {
         setWarning("Please enter a name!");
         return;
      }
      if (parseInt(positionConverter[position] + minutes ) > 48) {
         setWarning(`Max minutes reached for ${position}!`);
         setMinutes(1);
         return;
       }
      setPlayers([...players, {
         id: players.length + 1,
         name: name, 
         position: position, minutes: minutes
      }]);
      position === "Point Guard" && setPG(prev => prev + Number(minutes));
      position === "Shooting Guard" && setSG(prev => prev + Number(minutes));
      position === "Small Forward" && setSF(prev => prev + Number(minutes));
      position === "Power Forward" && setPF(prev => prev + Number(minutes));
      position === "Center" && setC(prev => prev + Number(minutes));
      setName("");
      setMinutes(1);
   }
   function HandleMinutesChange(event) {
      setMinutes(event.target.value);
      
   }
   function HandleDeleteChange(id) {
      setPlayers(players.filter(players => players.id != id));
   }
   return <>
   <div className="firstDisplay">
   <AddCard name={name} position={position} onFormSubmit={handleFormSubmit} onNameChange={e => setName(e.target.value)} onPositionChange={e => setPosition(e.target.value)} warning={warning} minutes={minutes} onMinutesChange = {HandleMinutesChange} PG={PG} SG={SG} SF={SF} PF={PF} C={C}/>
   <PlayerList players={players} onDeleteChange={HandleDeleteChange} position={position}/>
   </div>
   </>;
  
}