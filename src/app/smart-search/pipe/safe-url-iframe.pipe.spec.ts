import { SafeUrlIFramePipe } from './safe-url-iframe.pipe';

describe('SafeUrlIFramePipe', () => {
  it('create an instance', () => {
    const pipe = new SafeUrlIFramePipe();
    expect(pipe).toBeTruthy();
  });
});
