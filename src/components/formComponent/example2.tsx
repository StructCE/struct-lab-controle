"use client";
import { Form } from ".";
import { useState } from "react";

export const FormsExample2 = () => {
  const [supplier, setSupplier] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [manufactureDate, setManufactureDate] = useState<string>("");
  const [currentQuantity, setCurrentQuantity] = useState<string>("0");
  const [idealQuantity, setIdealQuantity] = useState<string>("0");

  const onCancel = () => {
    setSupplier("");
    setCategory("");
    setName("");
    setManufactureDate("");
    setCurrentQuantity("");
    setIdealQuantity("");
  };

  const onSave = (data: {
    supplier: string;
    category: string;
    name: string;
    manufactureDate: string;
    currentQuantity: string;
    idealQuantity: string;
  }) => {
    console.log(data);
  };

  return (
    <div className="flex h-full w-full items-center justify-center ">
      <Form
        className="items-center justify-center gap-[12px] px-[40px] py-[20px]"
        onCancel={onCancel}
        onSave={onSave}
      >
        <Form.Image
          onImageInput={(_image) => console.log("editou foto")}
          publicId="cld-sample-5"
        ></Form.Image>
        <Form.Title>Nome do Produto - Código do Produto</Form.Title>
        <Form.Content className="grid grid-flow-row grid-cols-2 items-center justify-around gap-[30px]">
          <div className="flex w-full flex-col gap-[15px]">
            <Form.Field>
              <Form.Label>Fornecedor</Form.Label>
              <Form.Input
                placeholder="Selecionar..."
                value={supplier}
                setValue={setSupplier}
              ></Form.Input>
            </Form.Field>

            <Form.Field>
              <Form.Label>Nome</Form.Label>
              <Form.Input
                value={name}
                setValue={setName}
                type="text"
              ></Form.Input>
            </Form.Field>

            <Form.Field>
              <Form.Label>Data de Fabricação</Form.Label>
              <Form.Input
                value={manufactureDate}
                setValue={(value) => setManufactureDate(value)}
                type="date"
              ></Form.Input>
            </Form.Field>

            <Form.Button
              type="reset"
              className="w-full border-none bg-[#EB4335]"
            >
              Cancelar
            </Form.Button>
          </div>

          <div className="flex w-full flex-col gap-[15px]">
            <Form.Field>
              <Form.Label>Categoria:</Form.Label>
              <Form.Input
                placeholder="Selecionar..."
                value={category}
                setValue={setCategory}
              ></Form.Input>
            </Form.Field>

            <Form.Field>
              <Form.Label>Quantidade ideal:</Form.Label>
              <Form.Input
                value={idealQuantity}
                setValue={setIdealQuantity}
                type="number"
              ></Form.Input>
            </Form.Field>

            <Form.Field>
              <Form.Label>Situação:</Form.Label>
              <Form.Input
                value={currentQuantity}
                setValue={setCurrentQuantity}
                type="number"
              ></Form.Input>
            </Form.Field>

            <Form.Button
              type="submit"
              className="w-full border-none bg-[#34A853]"
            >
              Salvar
            </Form.Button>
          </div>
        </Form.Content>
      </Form>
    </div>
  );
};
