import { EnvelopeSimple, User } from "phosphor-react";

import { Input } from "components/Input";
import { Button } from "components/Button";

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
          <Input placeholder="Nome">
            <User />
          </Input>

          <Input placeholder="E-mail" type="E-mail">
            <EnvelopeSimple />
          </Input>

          <Button>Entrar</Button>
        </div>
      </Form>
    </Container>
  )
}
