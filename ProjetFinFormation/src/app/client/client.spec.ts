import { Client } from './client/client';

describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client()).toBeTruthy();
  });
});
