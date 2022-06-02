import LessonTemplate from "@templates/Lesson";
import {MOCKED_CLASSES} from '../../../.mocks/constants/MOCKED_CLASSES'

export default function Lesson(){
    return (
        <LessonTemplate lesson={MOCKED_CLASSES[1]}/>
    )
}