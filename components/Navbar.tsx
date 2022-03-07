import { FC } from "react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorMode,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from "next/router";

type NavlinkData = {
    href: string;
}

const NavLink: FC<NavlinkData> = ({ children, href }): JSX.Element => {
    const router = useRouter();

    return(
        <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        onClick={() => router.push(href)}
        >
        {children}
       </Link>
    )
}

const Navbar: FC = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter();
    const Links = [
        {
            label: 'Home', href: '/'
        },
        {
            label: 'About', href: '/about'
        },
        {
            label: 'Snippets', href: '/snippets'
        },
        {
            label: 'Dashboard', href: '/dashboard'
        }
    ];


    return(
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box cursor={'pointer'} onClick={() => router.push('/')}>RealPenguin Blog</Box>
                    <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
                        <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
                    ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>
            {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                    <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
                ))}
                </Stack>
            </Box>
            ) : null}
        </Box>
    )
}   

export default Navbar;