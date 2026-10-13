export default function Home() {
  return (
    <>
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
          margin: 0;
        }

        body {
          display: grid;
          place-items: center;
          background: #ffffff;
          color: #111111;
          font-family: Arial, sans-serif;
        }

        h1 {
          margin: 0;
          font-size: 2rem;
          font-weight: 600;
        }
      `}</style>

      <h1>curso.dev</h1>
    </>
  );
}
