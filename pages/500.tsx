import Image from "next/image";
import Link from "next/link";

const CustomErrorPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Image src="/warning.svg" alt="Error Image" width={200} height={200} />

      <h1
        style={{
          color: "red",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "1.5rem",
          lineHeight: "2rem",
        }}
      >
        Erro 500 - Ocorreu um erro interno do servidor
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "2rem", fontWeight: "bold" }}>
        Desculpe, ocorreu um <span style={{ color: "red" }}>erro </span>
        inesperado ao iniciar a aplicação. Por favor, tente novamente mais
        tarde. Se o problema persistir, entre em contato conosco para obter
        assistência. Pedimos desculpas pelo transtorno
        <br />
        email de suporte:
        <Link href="mailto:dev123gabriel@gmail.com">
          dev123gabriel@gmail.com
        </Link>
      </p>
    </div>
  );
};

export default CustomErrorPage;
