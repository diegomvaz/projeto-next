
'use client'
import { Card, Flex, Heading, Image, Text } from '@chakra-ui/react'
import * as React from 'react'


function Galeria({ data }) {
    return <>
        <Flex flexWrap={'wrap'} justifyContent={'center'} gap={10} paddingTop={5} paddingBottom={10}>
            {data['results'].map(filme => {
                return <>
                    <Card padding={5} width={'400px'}>
                        <Heading size='md'>{filme.original_title}</Heading>
                        <Text paddingTop={2}>Release Date: {filme.release_date}</Text>
                        <Text>⭐{filme.vote_average}</Text>
                        <Image paddingTop={4} src={`http://image.tmdb.org/t/p/w500/${filme.poster_path}`}></Image>
                        <Text paddingTop={5}>{filme.overview}</Text>
                    </Card>
                </>
            })}
        </Flex>
    </>
}

export default Galeria