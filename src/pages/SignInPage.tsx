import { Gradient } from "../components/Gradient"
import { Loading } from "../components/Loading"

export const SignInPage: React.FC = () => {
    return (
        <>
            <Gradient>
                <Loading />
                Hello
            </Gradient>
        </>
    )
}