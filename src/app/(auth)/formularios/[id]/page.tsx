'use client'
import FormGroup from "@/components/FormGroup";
import SelectFormGroup from "@/components/SelectFormGroup";
import { useLoader } from "@/context/LoaderContext";
import { api } from "@/lib/axios"
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import React from "react"
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Formulario({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params); 
  const [form, setForm] = React.useState<GetFormulario | null>(null)
  const {setIsLoading} = useLoader();
  const router = useRouter();

  const { control, handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (id) {
      setIsLoading(true)
      api.get(`/formularios/${id}`).then((response) => {
        setForm(response.data)
      }).catch((error) => {
        console.error("Erro ao buscar formulário:", error)
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }, [id])

  const switchQuestionType = (type:string) => {
    switch (type) {
      case 'texto':
        return (
        <FormGroup 
        labelText={form?.questao?.titulo || ''}
        register={register(form?.questao?.id.toString() || 'resposta')}
        />
        )
      case 'opcoes':
        return (
        <SelectFormGroup 
        labelText={form?.questao?.titulo || ''} 
        options={form?.questao?.opcoes || []}
        register={register(form?.questao?.id.toString() || 'resposta')}
        />)
      case 'upload':
        return 'Upload'
      default:
        return 'Texto'
    }
  }

  const handleSubmitForm = (data: any) => {
    setIsLoading(true)
    let pontuacaoTotal = 0;
    const resposta = {
      formulario_id: form?.id,
      pontuacaoTotal: 0,
      questoesResposta: [] as IAnswerForm[],
    };

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        const respostaCompleta = data[key]; 
        const [respostaText, pontuacao] = respostaCompleta.split('&');

        pontuacaoTotal += parseInt(pontuacao, 10)

        resposta.questoesResposta.push({
          questao_id: Number(key),
          resposta: respostaText,
          pontuacao: parseInt(pontuacao, 10),
        });
      }
    }
  
    resposta.pontuacaoTotal = pontuacaoTotal;
    
    api.post(`/formularios/responder/${form?.id}`, resposta).then((response) => {
      toast.success(response.data.mensagem)
      reset()
      router.push("/formularios")
    }).catch((error) => {
      console.error("Erro ao enviar resposta:", error)
    }).finally(() => {
      setIsLoading(false)
    })
  }
  

  return (
    <div className=" p-8 px-24 text-black">
      <div className="bg-primary text-white flex items-center justify-center rounded-t-[50px] p-8">
        <p className="text-2xl font-bold mb-2">{form?.nome}</p>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="border-2 border-white bg-gray-200 p-8 mb-12 rounded-b-[50px]">
        <p className="bg-white p-2 rounded-xl">
          {form?.descricao}
        </p>
        {
          form?.questao && switchQuestionType(form.questao.tipo)
        }
        <div className="flex w-full justify-center mt-4">
          <button className="btn btn-success" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}
