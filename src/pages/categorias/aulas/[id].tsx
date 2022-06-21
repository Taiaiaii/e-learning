import { useRouter } from 'next/router';

import LessonTemplate from '@templates/Lesson';
import { useCategories } from '@hooks/useCategories';

export default function Lesson() {
  const { query: { id } } = useRouter();

  const { classes } = useCategories()

  const lesson = classes?.find((item) => item.id === id);

  return lesson && <LessonTemplate lesson={lesson} />;
}
