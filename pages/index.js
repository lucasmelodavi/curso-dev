export default function Page() {
  return <button onClick={() => clicar()}>Clique</button>;
}

function clicar() {
  console.log("clicou");
}