import { IClass } from 'src/models/IClass'

export const MOCKED_CLASSES: IClass[] = [
    { 
        id: 1,
        isConcluded: true,
        title: 'Introdução à teoria matemática',
        time: 5,
        classNumber: '01',
        details: {
            video: "https://www.youtube.com/embed/ddZHkCUcYRM",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus condimentum gravida. Aenean condimentum vehicula sapien, eleifend metus congue vel.Suspendisse vitae tellus eu lacus facilisis auctor nec tristique eros.'
        }
    },
    {
        id: 2,
        isConcluded: true,
        title: 'Introdução à teoria matemática 2',
        time: 10,
        classNumber: '02',
        details: {
            video: "https://www.youtube.com/embed/ddZHkCUcYRM",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus condimentum gravida. Aenean condimentum vehicula sapien, eleifend metus congue vel.Suspendisse vitae tellus eu lacus facilisis auctor nec tristique eros.'
        }
    },
    {
        id: 3,
        isConcluded: false,
        title: 'Cálculo aplicado',
        time: 7,
        classNumber: '03',
        details: {
            video: "https://www.youtube.com/embed/ddZHkCUcYRM",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus condimentum gravida. Aenean condimentum vehicula sapien, eleifend metus congue vel.Suspendisse vitae tellus eu lacus facilisis auctor nec tristique eros.'
        }
    },
    {
        id: 4,
        isConcluded: false,
        title: 'Matrizes',
        time: 15,
        classNumber: '04',
        details: {
            video: "https://www.youtube.com/embed/ddZHkCUcYRM",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus condimentum gravida. Aenean condimentum vehicula sapien, eleifend metus congue vel.Suspendisse vitae tellus eu lacus facilisis auctor nec tristique eros.'
        }
    },
];
