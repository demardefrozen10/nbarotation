import Card from "./card.js";

export default function PlayerList(props) {
  const { players, onDeleteChange } = props;

  const pgPlayers = players.filter((player) => player.position === 'Point Guard');
  const sgPlayers = players.filter((player) => player.position === 'Shooting Guard');
  const sfPlayers = players.filter((player) => player.position === 'Small Forward');
  const pfPlayers = players.filter((player) => player.position === 'Power Forward');
  const cPlayers = players.filter((player) => player.position === 'Center');

  return (
    <>
      <ul>
        {pgPlayers.map((player) => (
          <li key={player.id}>
            <Card playerDetails={player} onDeleteChange={onDeleteChange} />
          </li>
        ))}
      </ul>

      <ul>
        {sgPlayers.map((player) => (
          <li key={player.id}>
            <Card playerDetails={player} onDeleteChange={onDeleteChange} />
          </li>
        ))}
      </ul>

      <ul>
        {sfPlayers.map((player) => (
          <li key={player.id}>
            <Card playerDetails={player} onDeleteChange={onDeleteChange} />
          </li>
        ))}
      </ul>

      <ul>
        {pfPlayers.map((player) => (
          <li key={player.id}>
            <Card playerDetails={player} onDeleteChange={onDeleteChange} />
          </li>
        ))}
      </ul>

      <ul>
        {cPlayers.map((player) => (
          <li key={player.id}>
            <Card playerDetails={player} onDeleteChange={onDeleteChange} />
          </li>
        ))}
      </ul>
    </>
  );
}
