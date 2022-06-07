import { useRouter } from 'next/router';

import LessonTemplate from '@templates/Lesson';
import { useCategories } from '@hooks/useCategories';

export default function Lesson() {
  const {
    query: { id }, 
  } = useRouter();

  const {currentClasses} = useCategories()

  const lesson = currentClasses?.find((item) => item.id === Number(id));

  return lesson && <LessonTemplate lesson={lesson} />;
}
