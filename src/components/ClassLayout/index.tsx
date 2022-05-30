import { ReactElement } from "react"
import { ClassContainer, Header, MainContainer } from "./styles"
import Logo from 'public/e.learning-logo.svg'
import ArrowBack from 'public/arrow-back.svg'
import Like from 'public/like.svg'
import { useRouter} from 'next/router'

interface IClassLayoutProps {
    children: ReactElement
    route: string
}

export default function ClassLayout ({children, route}: IClassLayoutProps) {

    const { push } = useRouter()
    function handleClickArrow(route:string ) {
        push(`/${route}`)
    }
    return (
        <ClassContainer>
            <Header>
                <button aria-label="arrow-back" onClick={() => handleClickArrow(route)}>
                    <ArrowBack/>
                </button>
                <Logo/>
                <button aria-label="like">
                    <Like/>
                </button>
            </Header>
            <MainContainer>
                {children}
            </MainContainer>
        </ClassContainer>
    )
}