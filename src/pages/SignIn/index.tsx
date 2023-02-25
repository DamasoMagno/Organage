import { useNavigate } from "react-router-dom";
import { Student } from "phosphor-react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { Container, Description, Form } from "./styles";

import googleIcon from "assets/Google.png";
import { auth } from "services/firebase";
import { client } from "libs/apollo";
import { GET_CLASS } from "graphql/queries/get-class";


const googleProvider = new GoogleAuthProvider();

export function SignIn() {
  const navigate = useNavigate();

  async function login() {
    try {
      const data = await signInWithPopup(auth, googleProvider);

      const { data: ownClass } = await client.query({
        query: GET_CLASS,
        variables: {
          email: data.user.email
        }
      });

      const className = ownClass.estudante.turma.nome;
      const queueId = ownClass.estudante.turma.fila.id;

      localStorage.setItem("@school", JSON.stringify({
        className,
        queueId
      }));

      navigate("/");
    } catch (error) {
      console.log("Testando!");
    }
  }

  return (
    <Container>
      <Description>
        <h1>Organage.</h1>
        <p>
          Esta plataforma tem o objetivo de
          gerenciar  a organização interna da escola.
        </p>
        <Student color="#FFF" size={48} />
      </Description>

      <Form>
        <button onClick={login} type="button">
          <img src={googleIcon} alt="Logotipo Google" />
          Login com Google
        </button>
      </Form>
    </Container>
  )
}
