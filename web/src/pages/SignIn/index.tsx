import { FiLock, FiMail } from "react-icons/fi";

import { Input } from "@components/Form/Input";
import { Button } from "@components/Form/Button";

import { Container, Description, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Description>
        <h1>Organge</h1>
        <p>
          Esta plataforma tem o objetivo de
          gerenciar  a organização interna da escola.
        </p>
      </Description>

      <Form>
        <h2>Acessar Conta</h2>

        <div className="inputs">
          <Input
            placeholder="Nome"
            icon={FiMail}
            required
            type="email"
          />
          <Input
            placeholder="E-mail"
            icon={FiLock}
            required
          />
          <Button label="Entrar" />
        </div>
      </Form>
    </Container>
  )
}
