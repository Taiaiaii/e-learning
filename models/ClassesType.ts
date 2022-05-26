export type ClassesType = {
    id: number,
    isConcluded: boolean,
    title: string,
    time: number,
    classNumber: string,
    details: {
        video: string,
        description: string
    }
}