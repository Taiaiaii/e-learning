import { useRouter } from 'next/router';

import { ClassesTemplate } from '@templates/Classes';
import { useCategories } from '@hooks/useCategories';

export default function Classes() {
  const {
    query: { id },
  } = useRouter();

  const {getCategory, getCategoryClasses} = useCategories()
  
  const category = getCategory(String(id))
  const classes = getCategoryClasses(String(id));

  
  return (
    classes && category && <ClassesTemplate category={category} classes={classes} />
  );
}
