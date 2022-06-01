import ClassCard from '@components/ClassCard';
import ClassLayout from '@components/ClassLayout';
import { MOCKED_CLASSES } from '../../../.mocks/constants/MOCKED_CLASSES';

export function ClassesTemplate() {
  return (
    <ClassLayout route='/home'>
      <div>
        <h1>Matemática</h1>
        <p>16 aulas</p>
      </div>
      <div>
        {MOCKED_CLASSES.map((lesson) => {
            return (
              <ClassCard
                classNumber={lesson.classNumber}
                isConcluded={lesson.isConcluded}
                time={lesson.time}
                title={lesson.title}
                key={lesson.id}
              />
            );
        })}
      </div>
    </ClassLayout>
  );
}
