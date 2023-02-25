import { ReactNode } from "react";

export interface IEvent {
  id: string;
  nome: string;
  descricao?: {
    html: string;
  };
  createdAt: any; 
}