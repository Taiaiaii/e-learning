import { ClassesTemplate } from "@templates/Classes";
import {MOCKED_CATEGORY_LIST} from '../../../.mocks/constants/MOCKED_CATEGORY_LIST'
import {MOCKED_CLASSES} from '../../../.mocks/constants/MOCKED_CLASSES'

export default function Classes (){
    return (
        <ClassesTemplate category={MOCKED_CATEGORY_LIST[3]} classes={MOCKED_CLASSES}/>
    )
}