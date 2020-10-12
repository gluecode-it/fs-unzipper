'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.FsUnzipper = void 0;
const readable_stream_unzip_processor_1 = require('@gluecode-it/readable-stream-unzip-processor');
const fs_1 = require('fs');
class FsUnzipper {
	process(srcFilePath, targetDirectoryPath) {
		const processor = new readable_stream_unzip_processor_1.ReadableStreamUnzipProcessor();
		return processor.process(fs_1.createReadStream(srcFilePath), (filePath) => {
			return fs_1.createWriteStream(targetDirectoryPath + filePath);
		});
	}
}
exports.FsUnzipper = FsUnzipper;
