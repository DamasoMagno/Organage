import { useNavigate } from "react-router-dom";
import { Student } from "phosphor-react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

import { client } from "libs/apollo";
import { GET_CLASS } from "graphql/queries/get-class";

import { auth } from "services/firebase";

import { Container, Description, Form } from "./styles";

import googleIcon from "assets/Google.png";

const googleProvider = new GoogleAuthProvider();

export function SignIn() {
  const navigate = useNavigate();

  async function signInUser() {
    try {
      const data = await signInWithPopup(auth, googleProvider);

      const { data: ownClass } = await client.query({
        query: GET_CLASS,
        variables: {
          email: data.user.email
        }
      });

      const classInfo = {
        className: ownClass.turmas[0].nome,
        queueId: ownClass.turmas[0].fila.id
      }

      localStorage.setItem("@school", JSON.stringify(classInfo));

      navigate("/");
    } catch (error) {
      toast.error(
        "Aluno não cadastrado no sistema",
        {
          duration: 2000,
          position: 'top-center',
        }
      );
      console.log(error);
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
        <button onClick={signInUser} type="button">
          <img src={googleIcon} alt="Logotipo Google" />
          Login com Google
        </button>
      </Form>
    </Container>
  )
}
