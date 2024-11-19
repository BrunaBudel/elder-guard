import FormGroup from "@/components/FormGroup";
import TextAreaFormGroup from "@/components/TextAreaFormGroup";

export default function CriarFormulario() {
  return (
    <div className="h-screen p-8 px-24 text-white">
      <fieldset className="border-2 border-white p-4  rounded-md">
        <legend className="text-lg">Formulário</legend>
        <form>
          <FormGroup
          labelText="Nome"
          isRequired
          />
          <TextAreaFormGroup
          labelText="Descrição"
          inputClass="h-24"
          />
          <button className="btn-sm btn btn-accent mt-4 flex items-center gap-2" type="button">
            + Adicionar Questão
          </button>
        </form>
      </fieldset>
    </div>
  )
}