"use client";
import { Form } from ".";
import { useState } from "react";

export const FormsExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const onCancel = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setChecked1(false);
    setChecked2(false);
  };

  const onSave = (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cheked1: string;
    cheked2: string;
  }) => {
    console.log(data);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Form
        onCancel={onCancel}
        onSave={onSave}
        className="gap-[30px] px-[55px] pb-[40px] pt-[90px]"
      >
        <Form.Title>Criar Usuário</Form.Title>
        <Form.Content>
          <Form.Field>
            <Form.Label>Digite o nome do funcionário</Form.Label>
            <Form.Input
              className="w-[400px]"
              placeholder="nome"
              value={name}
              setValue={setName}
              type="text"
            ></Form.Input>
          </Form.Field>

          <Form.Field>
            <Form.Label>Digite o email de acesso</Form.Label>
            <Form.Input
              className="w-[400px]"
              placeholder="email"
              value={email}
              setValue={setEmail}
              type="email"
            ></Form.Input>
          </Form.Field>

          <Form.Field>
            <Form.Label>Digite a senha</Form.Label>
            <Form.Input
              className="w-[400px]"
              placeholder="senha"
              value={password}
              setValue={setPassword}
              type="password"
            ></Form.Input>
          </Form.Field>

          <Form.Field>
            <Form.Label>Confirme a senha</Form.Label>
            <Form.Input
              className="w-[400px]"
              placeholder="senha"
              value={confirmPassword}
              setValue={setConfirmPassword}
              type="password"
            ></Form.Input>
          </Form.Field>

          <Form.Field className="gap-[18px] rounded-[5px] border-[2px] border-[#D9D9D9] px-[14px] pb-[20px] pt-[16px]">
            <Form.Label className="text-[20px] font-semibold">
              Este usuário vai poder:
            </Form.Label>
            <Form.BoxSelect checked={checked1} setChecked={setChecked1}>
              Texto1
            </Form.BoxSelect>

            <Form.BoxSelect checked={checked2} setChecked={setChecked2}>
              Texto2
            </Form.BoxSelect>
          </Form.Field>
        </Form.Content>
        <Form.Button
          type="submit"
          onClick={() => console.log("criar usuario")}
          className="border-none bg-[#34A853]"
        >
          Criar Usuário
        </Form.Button>
      </Form>
    </div>
  );
};
