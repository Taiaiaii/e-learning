import { SavedCategoriesTemplate } from '@templates/Saved';
import { MOCKED_SAVED_COURSES } from '../../../.mocks/constants/MOCKED_SAVED_COURSES';

export default function SavedCategories() {
  return <SavedCategoriesTemplate categories={MOCKED_SAVED_COURSES} />;
}
