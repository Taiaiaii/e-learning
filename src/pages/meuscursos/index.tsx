import { MyCoursesTemplate } from "@templates/MyCourses";
import {MOCKED_SAVED_COURSES} from '../../../.mocks/constants/MOCKED_SAVED_COURSES'

export default function MyCourses(){
    return (
        <MyCoursesTemplate categorys={MOCKED_SAVED_COURSES}/>
    )
}