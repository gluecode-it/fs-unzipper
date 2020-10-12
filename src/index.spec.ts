import { FsUnzipper } from '.';
import { existsSync } from 'fs';

describe(FsUnzipper.name, () => {
	it('should return promise', async () => {
		const processor = new FsUnzipper();
		await expect(
			processor.process('test/multipleFiles.zip', 'test')
		).resolves.toBeUndefined();
	});

	it('should write files in test directory', () => {
		expect(existsSync('test/1.txt')).toBeTruthy();
	});
});
