interface CompressedString {
    string: string;
}

interface CompressionResult {
    compressedString: string;
    compressionRate: number;
}

interface ProcessReturn {
    compress: CompressionResult[],
    decompress: string[]
}
export class Compression {
    process(strings: CompressedString[]): ProcessReturn {
        const results: CompressionResult[] = [];
        const decompress: string[] = [] 

        strings.forEach(item => {
            const compressedString = this.compressString(item.string);
            const compressionRate = this.calculateCompressionRate(item.string, compressedString);
            const originalString = this.decompressString(compressedString);

            const resultCompress: CompressionResult = {
                compressedString: compressedString,
                compressionRate: compressionRate
            }; 

            results.push(resultCompress);
            decompress.push(originalString)
        });

        return {
            compress: results,
            decompress: decompress 
        };
    }

    private compressString(input: string): string {
        let result = "";
        let count = 1;
        for (let i = 0; i < input.length; i++) {
            if (i + 1 < input.length && input[i] === input[i + 1]) {
                count++;
            } else {
                result += (count > 1) ? count + input[i] : input[i];
                count = 1;
            }
        }

        return result;
    }

    private calculateCompressionRate(original: string, compressed: string): number {
        return (compressed.length / original.length) * 100;
    }

    private decompressString(compressed: string): string {
        let result = '';
        let count = 0;

        for (let i = 0; i < compressed.length; i++) {
            if (!isNaN(Number(compressed[i]))) {
                count = count * 10 + Number(compressed[i]);
            } else {
                for (let j = 0; j < count; j++) {
                    result += compressed[i];
                }
                count = 0;
            }
        }

        return result;
    }
}