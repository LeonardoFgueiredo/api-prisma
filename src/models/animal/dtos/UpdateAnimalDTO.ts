export interface UpdateAnimalDTO{
    id:number,
    name: string,
    adopted: boolean,
    city: string,
    state: string,
    breed: string, //raça
    userId: number,
    typeId: number,
}
