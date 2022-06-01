import { useRouter } from 'next/router';

import LessonTemplate from '@templates/Lesson';
import { MOCKED_CLASSES } from '../../../.mocks/constants/MOCKED_CLASSES';

export default function Lesson() {
  const {
    query: { id },
  } = useRouter();

  const lesson = MOCKED_CLASSES.find((item) => item.id === Number(id));

  return lesson && <LessonTemplate lesson={lesson} />;
}
