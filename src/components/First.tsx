function First() {
  const name = "Witha";
  const upper = (str: string) => {
    return str.toUpperCase();
  };
  const names = ["Alberto", "Witha", "Sarah"];
  const cadastro = [
    {
      nome: "Witha",
      idade: 15,
    },
    {
      nome: "Jinx",
      idade: 23,
    },
    {
      nome: "Alberto",
      idade: 25,
    },
  ];
  return (
    <div>
      <h2>Hello World {upper(name)}</h2>
      {names.map(
        (
          element // (e)
        ) => (
          <p key={element}> {element}</p> // (e)
        )
      )}
      {cadastro.length > 0 ? (
        cadastro.map((e) => (
          <div key={e.nome}>
            <h2>{e.nome}</h2>
            <p>{e.idade}</p>
          </div>
        ))
      ) : (
        <span>Array empty</span>
      )}
    </div>
  );
}

export default First;
