import { FC } from "react";
import IPost from "../types/post";
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import readingTime from 'reading-time'

type Data = {
    post: IPost;
}

const PostCard: FC<Data> = ({ post }): JSX.Element => {
    return(
        <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={post?.image || ''}
            layout={'fill'}
            alt={'Blog Image'}
          />
        </Box>
        <Stack>
          <Text
            color={post?.category?.color}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {post?.category?.name}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {post?.title}
          </Heading>
          <Text color={'gray.500'}>
            {post?.desc}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={post?.author?.img}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{post?.author?.name}</Text>
            <Text color={'gray.500'}>{post?.createdAt} · {readingTime(post.content as string).text}</Text>
          </Stack>
        </Stack>
      </Box>
        </Center>
    )
}   

export default PostCard;