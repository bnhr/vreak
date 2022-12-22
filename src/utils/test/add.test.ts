import { describe, expect, it } from 'vitest'
import add from '../add'

describe('add function', () => {
	it('should work properly', () => {
		expect(add(2, 2)).toBe(4)
	})
})
