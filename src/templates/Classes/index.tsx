import ClassCard from '@components/ClassCard';
import ClassLayout from '@components/ClassLayout';

import { MOCKED_CLASSES } from '../../../.mocks/constants/MOCKED_CLASSES';
import { CardContainer, Content, Title } from './styles';

export function ClassesTemplate() {
  return (
    <ClassLayout route='/home'>
      <Title>
        <h1>Matemática</h1>
        <p>16 aulas</p>
      </Title>
      <Content>
        {MOCKED_CLASSES.map((lesson) => {
          return (
            <CardContainer  key={lesson.id}>
              <ClassCard
                classNumber={lesson.classNumber}
                isConcluded={lesson.isConcluded}
                time={lesson.time}
                title={lesson.title}
              />
            </CardContainer>
          );
        })}
      </Content>
    </ClassLayout>
  );
}
