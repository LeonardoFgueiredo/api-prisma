export interface CreateAnimalDTO{
    name: string,
    adopted: boolean,
    city: string,
    state: string,
    breed: string, //raça
    userId: number,
    typeId: number,
}
