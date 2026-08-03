import TaskCard from "./TaskCard";
import { FC } from "react";
import {WrapStack} from "../stylesComponents/styleCards"

const WrapperCards: FC = () => {

    return (
        <WrapStack spacing={2} direction="row">
        <TaskCard/>
       </WrapStack>
    )
}

export default WrapperCards