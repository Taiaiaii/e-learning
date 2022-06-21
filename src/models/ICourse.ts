export interface ICourse {
    id: string,
    isConcluded: boolean,
    title: string,
    time: number,
    classNumber: string,
    details: {
        video: string,
        description: string
    }
}