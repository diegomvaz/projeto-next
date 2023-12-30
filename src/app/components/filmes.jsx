'use client'
import { RadioGroup, Radio, Flex } from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react';
import Galeria from './galeria'

function Filmes({ data }) {
    const [tipo, setTipo] = useState('populares')

    return <>
        <RadioGroup onChange={setTipo} value={tipo}>
            <Flex flexWrap={'wrap'} justifyContent={'center'} paddingTop={'20px'} flexDirection={'row'} gap={'20px'}>
                <Radio value='populares'>Populares</Radio>
                <Radio value='maiorNota'>Maiores Notas</Radio>
            </Flex>
        </RadioGroup>
        <Galeria data={data[tipo]}/>
    </>
}

export default Filmes