import CategoryCard from '../../components/CategoryCard';
import DeleteComponent from '../../components/DeleteComponent';
import Garbage from '../../public/garbage.svg'

export default function Home() {
  const CategoryItems = [
    {
      img: '/math.svg',
      lessons: '16',
      title: 'Matematica',
    },
    {
      img: '/physics.svg',
      lessons: '25',
      title: 'Física',
    },
    {
      img: '/english.svg',
      lessons: '6',
      title: 'Inglês',
    },
    {
      img: '/chemistry.svg',
      lessons: '61',
      title: 'Química',
    },
    {
      img: '/talk.svg',
      lessons: '15',
      title: 'Oratória',
    },
    {
      img: '/build.svg',
      lessons: '3',
      title: 'Caligrafia',
    },
  ];
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: '100%',
      }}
    >
      {CategoryItems.map((item) => {
        return (
          <div key={item.title} style={{ padding: '8px' }}>
            <CategoryCard
              img={item.img}
              lessons={item.lessons}
              title={item.title}
            ><DeleteComponent/></CategoryCard>
          </div>
        );
      })}
    </div>
  );
}
