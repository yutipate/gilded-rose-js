const Item = require('../src/item')

class AgedBrie extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality () {
    this.sellIn < 0 ? this.quality += 2 : this.quality += 1
    if (this.quality > 50) { this.quality = 50 }
  }
}

module.exports = AgedBrie