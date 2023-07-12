

type Question = Array<{ id: number, question: string, answer: string }> 
export type Data = Array<{ username: string, questions: Question}>
export const data: Data = []