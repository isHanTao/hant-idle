/* eslint-disable */
function init () {
  const player = new Player()

  const yitianjian = new Thing('倚天剑', '', '100', 2)
  const yitianjian2 = new Thing('屠龙剑', '', '50', 2)
  const yitianjian3 = new Thing('倚天剑', '', '100', 2)
  player.bag.push(yitianjian)
  player.bag.push(yitianjian2)
  player.bag.push(yitianjian3)
  console.log(player.toString())
}

class Player {
    attack = 1;
    strength = 1;
    defence = 1;
    hitpoints = 100;
    bag = new Bag();

    toString () {
      return `攻击力：${this.attack}
力量：${this.attack}
防御：${this.defence}
生命值：${this.hitpoints}
背包：${this.bag}`
    }
}

class Bag {
    length = 20;
    items = [];

    // 将物品放入背包
    push (thing) {
      const index = this.getItemIndex(thing.hash)
      if (index !== -1) {
        this.items[index].add()
      } else {
        this.items.push(new BagItem(thing))
      }
    }

    removeAll (thing) {
      const index = this.getItemIndex(thing.hash)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    }

    remove (thing, size = 1) {
      const index = this.getItemIndex(thing.hash)
      if (index !== -1) {
        const res = this.items[index].reduce(size)
        if (!res) {
          this.items.splice(index, 1)
        }
      }
    }

    getItemIndex (hash) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].thing.hash === hash) {
          return i
        }
      }
      return -1
    }

    toString () {
      let str = '\n'
      this.items.forEach((item) => {
        str += '    ' + item.thing.name + '(' + item.length + ') \n'
      })
      return str
    }
}

class BagItem {
    length = 1;
    thing = {};

    constructor (thing) {
      this.thing = thing
    }

    add (num = 1) {
      this.length += num
    }

    reduce (num = 1) {
      if (this.length - num < 1) {
        this.length = 0
        return false
      } else {
        this.length -= num
        return true
      }
    }
}

class Thing {
    // 1，物品 2，装备
    type = 1
    name = ''
    hash = ''
    avatar = 'img'
    price = 0

    constructor (name, avatar, price = 0, type = 1) {
      this.name = name
      this.avatar = avatar
      this.price = price
      this.type = type
      this.hash = getHashCode(this.name)
    }
}

class Resource {

}

function getHashCode (str) {
  let hash = 1315423911; let i; let ch
  for (i = str.length - 1; i >= 0; i--) {
    ch = str.charCodeAt(i)
    hash ^= ((hash << 5) + ch + (hash >> 2))
  }
  return (hash & 0x7FFFFFFF)
}
