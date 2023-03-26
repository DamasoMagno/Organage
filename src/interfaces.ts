export interface IClassInfo {
  className: string;
  queueId: string;
}

export interface IEvent {
  id: string;
  nome: string;
  descricao?: {
    html: string;
  };
  createdAt: Date; 
}

export interface IQueue {
  id: string;
  nome: string;
}

export interface ISchedule {
  id: string;
  dia: string;
  materias: Array<{
    nome: string;
    horaInicio: Date;
  }>
}

