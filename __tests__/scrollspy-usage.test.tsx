import { describe, it, expect } from 'vitest';
import React from 'react';

// The hook throws when used without provider. This ensures consumers wrap the tree.
describe('useScrollSpy usage', () => {
  it('is enforced by throwing outside provider', async () => {
    let threw = false;
    try {
      const { useScrollSpy } = await import('../components/ScrollSpyProvider');
      // Call the hook function directly to assert the thrown error string.
      // (We avoid rendering since this is a lightweight smoke test.)
      // @ts-expect-error Intentional misuse
      useScrollSpy();
    } catch (e: any) {
      threw = true;
      expect(String(e.message)).toMatch(/must be used within ScrollSpyProvider/i);
    }
    expect(threw).toBe(true);
  });
});