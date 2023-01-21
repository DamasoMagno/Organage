import { useNavigate } from "react-router-dom";
import { Student } from "phosphor-react";

import { Button } from "components/Button";

import { Container, Description, Form } from "./styles";

import googleIcon from "../../assets/Google.png";

export function SignIn() {
  const navigte = useNavigate();

  return (
    <Container>
      <Description>
        <h1>Organge</h1>
        <p>
          Esta plataforma tem o objetivo de
          gerenciar  a organização interna da escola.
        </p>
        <Student color="#FFF" size={48} />
      </Description>

      <Form>
        <Button onClick={() => navigte("/calendar")}>
          <img src={googleIcon} alt="Logotipo Google"/>
          Login com Google
        </Button>
      </Form>
    </Container>
  )
}
