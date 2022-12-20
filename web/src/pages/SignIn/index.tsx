import { EnvelopeSimple, Lock } from "phosphor-react";

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
          <Input placeholder="E-mail" type="email">
            <EnvelopeSimple />
          </Input>

          <Input placeholder="Senha" isPassword>
            <Lock />
          </Input>

          <Button>Entrar</Button>
        </div>
      </Form>
    </Container>
  )
}
