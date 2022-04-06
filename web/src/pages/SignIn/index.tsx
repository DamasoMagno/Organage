import { Link } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";

import { 
  Container, 
  Description, 
  Form, 
  SelectAccount 
} from "./styles";

export function SignIn() {
  return (
    <Container>
      <Description>
        <h1>Olá Bem Vindo</h1>
        <p>
          Esta plataforma tem o objetivo de
          gerenciar  a organização interna da escola.
        </p>
      </Description>

      <Form>
        <h2>Acessar Conta</h2>
        
        <div className="inputs">
          <Input placeholder="Email" icon={FiMail} />
          <Input placeholder="Senha" icon={FiLock} isPassword/>
          <Link to="/">esqueci a senha</Link>
          <Button label="Entrar" type="button"/>
        </div>
      </Form>
    </Container>
  )
}
