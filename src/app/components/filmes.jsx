'use client'
import { RadioGroup, Radio, Flex, Box } from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react';
import Galeria from './galeria'

function Filmes({ data }) {
    const [tipo, setTipo] = useState('populares')

    return <>
        <Box position={'sticky'} top={0} zIndex={1} backgroundColor={'white'}>
            <RadioGroup onChange={setTipo} value={tipo} paddingBottom={5}>
                <Flex flexWrap={'wrap'} justifyContent={'center'} paddingTop={'20px'} flexDirection={'row'} gap={'20px'}>
                    <Radio value='populares'>Populares</Radio>
                    <Radio value='maiorNota'>Maiores Notas</Radio>
                </Flex>
            </RadioGroup>
        </Box>
        <Galeria data={data[tipo]} />
    </>
}

export default Filmes