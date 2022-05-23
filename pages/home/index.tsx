import { Item } from '@radix-ui/react-radio-group';
import ClassCard from '../../components/ClassCard';

const classList = [
  {
    id: 1,
    isConcluded: true,
    title: 'Introdução à teoria matemática',
    time: 5,
    classNumber: '01',
  },
  {
    id: 2,
    isConcluded: false,
    title: 'Introdução à teoria matemática 2',
    time: 10,
    classNumber: '02',
  },
  {
    id: 3,
    isConcluded: true,
    title: 'Cálculo aplicado',
    time: 7,
    classNumber: '03',
  },
  {
    id: 4,
    isConcluded: true,
    title: 'Matrizes',
    time: 15,
    classNumber: '04',
  },
];

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column'
      }}
    >
      {classList.map(item => {
        return (
          <div key={item.id} style={{margin: '20px'}}>
            <ClassCard
              classNumber={item.classNumber}
              isConcluded={item.isConcluded}
              time={item.time}
              title={item.title}
            />
          </div>
        );
      })}
     
    </div>
  );
}
