import { ReadableStreamUnzipProcessor } from '@gluecode-it/readable-stream-unzip-processor';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';

export class FsUnzipper {
	process(srcFilePath: string, targetDirectoryPath: string) {
		const processor = new ReadableStreamUnzipProcessor();
		return processor.process(createReadStream(srcFilePath), (filePath) => {
			return createWriteStream(join(targetDirectoryPath, filePath));
		});
	}
}
