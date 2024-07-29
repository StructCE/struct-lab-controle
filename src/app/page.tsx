"use client";
import { CardComponent } from "@/components/cardComponent";
import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { LuTrash2 } from "react-icons/lu";

export default function Home() {
  const handleEditPress = () => {
    console.log("hello world");
  };

  const handleDeletePress = () => {
    console.log("hello world");
  };
  return (
    <main>
      <div className="flex h-screen w-screen items-center justify-center">
        <CardComponent className="flex h-fit w-[1140px] gap-4">
          <div>
            <CardComponent.Image className="h-[160px] w-[160px]">
              {/* cldImage aqui dentro */}
            </CardComponent.Image>
          </div>
          <div className="flex h-fit w-full flex-col gap-10">
            <CardComponent.Grid className="flex h-fit w-full items-start">
              <CardComponent.LabelValue
                className="flex flex-col"
                label="Nome do Produto"
                value="Nome do Produto"
              ></CardComponent.LabelValue>
              <CardComponent.LabelValue
                className="flex flex-col"
                label="Categoria"
                value="Categoria 1"
              ></CardComponent.LabelValue>
              <CardComponent.LabelValue
                className="flex flex-col"
                label="Data de Fabricação"
                value="02/03/2004"
              ></CardComponent.LabelValue>
              <CardComponent.Button
                handlePress={handleEditPress}
                icon={<FaPenToSquare size={20} />}
              >
                Editar
              </CardComponent.Button>
            </CardComponent.Grid>
            <CardComponent.Grid className="flex h-fit w-full items-end">
              <CardComponent.LabelValue
                className="flex flex-col"
                label="Fornecedor"
                value="Fornecedor 1"
              ></CardComponent.LabelValue>
              <CardComponent.LabelValue
                className="flex flex-col"
                label="Quantidade recomendada"
                value="Quantidade recomendada"
              ></CardComponent.LabelValue>
              <CardComponent.Field className="flex flex-col">
                <CardComponent.Text className="text-secondary">
                  Situação de Estoque
                </CardComponent.Text>
                <CardComponent.Text className="text-[#34A853]">
                  Quantidade/Quantidade recomendada
                </CardComponent.Text>
              </CardComponent.Field>
              <CardComponent.Button
                handlePress={handleDeletePress}
                icon={<LuTrash2 size={20} />}
              >
                Deletar
              </CardComponent.Button>
            </CardComponent.Grid>
          </div>
        </CardComponent>
      </div>
    </main>
  );
}
