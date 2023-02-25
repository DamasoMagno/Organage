export interface ISchedule {
  id: string;
  dia: string;
  materias: {
    nome: string;
    horaInicio: any;
  }[];
}