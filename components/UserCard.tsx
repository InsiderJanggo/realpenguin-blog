import { FC } from "react";
import IUser from "../types/user";
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

type Data = {
    user: IUser;
}
const UserCard: FC<Data> = ({ user }): JSX.Element => {
    return(
        <div>
            
        </div>
    )
}   

export default UserCard;