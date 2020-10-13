import { FsUnzipper } from '.';
import { existsSync, unlinkSync } from 'fs';

describe(FsUnzipper.name, () => {
	beforeEach(() => {
		unlinkSync('test/1.txt');
		unlinkSync('test/2.txt');
	  });
	
	it('should return promise', async () => {
	 const processor = new FsUnzipper();
	 await expect(
	 processor.process('test/multipleFiles.zip', 'test')
	 ).resolves.toBeUndefined();
	});

	it('should write files in test directory', async () => {
		const processor = new FsUnzipper();
		await processor.process('test/multipleFiles.zip', 'test')
		expect(existsSync('test/1.txt')).toBeTruthy();
	});
});
