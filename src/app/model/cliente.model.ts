import { Endereco } from "./endereco.model";

export interface Cliente{
  id?:number,
  nome?: string,
  sobrenome?: string,
  cpf?: number,
  email?: string,
  endereco: Endereco
}
