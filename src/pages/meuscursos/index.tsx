import { MyCoursesTemplate } from "@templates/MyCourses";
import {MOCKED_SAVED_COURSES} from '../../../.mocks/constants/MOKED_SAVED_COURSES'

export default function MeusCursos(){
    return <MyCoursesTemplate categorys={MOCKED_SAVED_COURSES} />;
}