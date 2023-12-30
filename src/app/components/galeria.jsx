'use client'
import { Card, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { RadioGroup, Radio } from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react';

function Galeria({data}) {
    const [tipo, setTipo] = useState('populares')
    console.log(data[tipo])
    return <>
        <RadioGroup onChange={setTipo} value={tipo}>
            <Flex flexWrap={'wrap'} justifyContent={'center'} paddingTop={'20px'} flexDirection={'row'} gap={'20px'}>
                <Radio value='populares'>Populares</Radio>
                <Radio value='maiorNota'>Maiores Notas</Radio>
            </Flex>
        </RadioGroup>

        <Flex flexWrap={'wrap'} justifyContent={'center'}>
            {data[tipo]['results'].map(filme => {
                return <>
                    <Card padding={10} width={'400px'}>
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