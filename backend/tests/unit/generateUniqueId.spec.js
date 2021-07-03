const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Gennerate Unique ID', () => {
  it('shoukd generate an unique ID', () => {
    const id = generateUniqueId()
    expect(id).toHaveLength(8)
  })
})