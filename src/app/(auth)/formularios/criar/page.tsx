'use client';

import FormGroup from "@/components/FormGroup";
import SelectFormGroup from "@/components/SelectFormGroup";
import TextAreaFormGroup from "@/components/TextAreaFormGroup";
import { questionTypes } from "@/mocks/questionTypes";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFieldArray, useForm, useWatch } from "react-hook-form";


export default function CriarFormulario() {
  const { control, register, handleSubmit, reset } = useForm<IForm>({
    defaultValues: {
      nome: "",
      descricao: "",
      questoes: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questoes",
  });

  const tipos = useWatch({
    control,
    name: "questoes", 
  });

  const handleCreateForm = (data: IForm) => {
    console.log(data);
    reset();
  }

  return (
    <div className=" p-8 px-24 text-black">
      <div className="bg-primary text-white flex items-center justify-center rounded-t-[50px] p-8">
        <p className="text-2xl font-bold mb-2">Criar Formulário</p>
      </div>
      <div className="border-2 border-white bg-gray-200 p-8 mb-12 rounded-b-[50px]">
        <form onSubmit={handleSubmit(handleCreateForm)}>
          <FormGroup
            labelText="Nome"
            isRequired
            inputClass="input-bordered"
            register={register("nome")}
          />
          <TextAreaFormGroup
            labelText="Descrição"
            inputClass="h-24 input-bordered"
            register={register("descricao")}
          />
          <button
            className="btn-sm btn btn-accent mt-4 flex items-center gap-2"
            type="button"
            onClick={() =>
              append({
                titulo: "",
                tipo: "texto",
                descricao: "",
                opcoes: [],
              })
            }
          >
            + Adicionar Questão
          </button>
          {fields.map((field, index) => (
            <fieldset
              key={field.id}
              className="border-2 border-white p-4 mb-4 rounded-md mt-4"
            >
              <legend className="px-2 text-sm">Questão {index + 1}</legend>
              <FormGroup
                labelText="Título"
                isRequired
                inputClass="input-bordered input-sm"
                register={register(`questoes.${index}.titulo`)}
              />
              <FormGroup
                labelText="Descrição"
                inputClass="h-24 input-bordered input-sm"
                register={register(`questoes.${index}.descricao`)}
              />
              <SelectFormGroup
                labelText="Tipo"
                isRequired
                inputClass="input-bordered input-sm"
                register={register(`questoes.${index}.tipo`)}
                options={questionTypes}
                placeholder="Selecione"
              />
              {tipos[index]?.tipo === "opcoes" && (
                <div className="mt-4">
                  <h4 className="mb-2">Opções</h4>
                  <OptionsFieldArray
                    control={control}
                    questionIndex={index}
                    register={register}
                  />
                </div>
              )}
              <div className="flex flex-row-reverse">
                <button
                  className="btn btn-link text-error mt-4 flex items-center gap-2"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                  Remover
                </button>
              </div>
            </fieldset>
          ))}
          { tipos.length > 0 && (
            <div className="mt-4 flex items-center gap-4 justify-center">
              <button className="btn btn-success" type="submit">
                Salvar
              </button>
            </div>
          )
          }
        </form>
      </div>
    </div>
  );
}

function OptionsFieldArray({ control, questionIndex, register }: any) {
  const { fields: options, append, remove } = useFieldArray({
    control,
    name: `questoes.${questionIndex}.opcoes`,
  });

  return (
    <div>
      <button
        type="button"
        className="btn-sm btn btn-accent mb-4"
        onClick={() => append({ descricao: "", pontuacao: 0 })}
      >
        + Adicionar Opção
      </button>
      {options.map((option, optionIndex) => (
        <div key={option.id} className="flex items-center gap-4 mb-2">
          <FormGroup
            labelText="Descrição"
            inputClass="input-bordered input-sm"
            register={register(
              `questoes.${questionIndex}.opcoes.${optionIndex}.descricao`
            )}
          />
          <FormGroup
            labelText="Pontuação"
            inputClass="input-bordered input-sm"
            register={register(
              `questoes.${questionIndex}.opcoes.${optionIndex}.pontuacao`
            )}
            type="number"
          />
          <button
            type="button"
            className="btn btn-error btn-sm mt-5"
            onClick={() => remove(optionIndex)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  );
}
