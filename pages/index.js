import { useState } from "react";

function Home() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      fontFamily: "Arial"
    }}>
      
      {!mostrar ? (
        <button
          onClick={() => setMostrar(true)}
          style={{
            padding: "15px 25px",
            fontSize: "1.2rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#ff4d6d",
            color: "white",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}
        >
          💌 Clique aqui
        </button>
      ) : (
        <h1 style={{
          fontSize: "3rem",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
          animation: "fadeIn 1s ease forwards"
        }}>
          💖 Te amo Gatinha  💖
        </h1>
      )}

      <style>
        {`
          button:hover {
            transform: scale(1.1);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;