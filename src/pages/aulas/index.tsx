import { ClassesTemplate } from "@templates/Classes";
import {MOCKED_CATEGORY_LIST} from '../../../.mocks/constants/MOCKED_CATEGORY_LIST'
import {MOCKED_CLASSES} from '../../../.mocks/constants/MOCKED_CLASSES'

export default function Aulas (){
    return (
        <ClassesTemplate category={MOCKED_CATEGORY_LIST[0]} classes={MOCKED_CLASSES}/>
    )
}