export class Jugador{
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public edad: number,
        public equipo?: string
    ){ }
}