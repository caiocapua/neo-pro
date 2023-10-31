import axios from 'axios';
import { Compression } from '../shared/compression/Compression';

interface Word {
    string: string;
}

export class ProcessService {
    async execute() {
        try {
            const maxRequests = 5;
            const words: Word[] = [];
            const compression = new Compression()

            for (let count = 0; count < maxRequests; count++) {
                const response = await axios.get('https://api.neopro.com.br/v1/test/compact');
                const word: Word = response.data;
                words.push(word);
            }

            const process = compression.process(words)

            return process
            
        } catch (error) {
            throw new Error(`Erro na requisição: ${error.message}`);
        }
    }
}