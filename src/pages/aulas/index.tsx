import { ClassesTemplate } from "@templates/Classes";
import {MOCKED_LIST} from '../../../.mocks/constants/MOCKED_CATEGORY_LIST'
import {MOCKED_CLASSES} from '../../../.mocks/constants/MOCKED_CLASSES'

export default function Classes (){
    return (
        <ClassesTemplate category={MOCKED_LIST[0]} classes={MOCKED_CLASSES}/>
    )
}