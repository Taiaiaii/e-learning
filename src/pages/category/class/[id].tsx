import { useRouter } from 'next/router';

import ClazzTemplate from '@templates/Clazz';
import { useCategories } from '@hooks/useCategories';

export default function Lesson() {
  const { query: { id } } = useRouter();

  const { classes } = useCategories()

  const clazz = classes?.find((clazz) => clazz.id === id);

  return clazz && <ClazzTemplate clazz={clazz} />;
}
