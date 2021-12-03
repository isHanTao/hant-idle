/* eslint-disable */
// 玩家
class Player {
  basePanel = {
    attack: 1,
    strength: 1,
    defence: 1,
    hitpoints: 100,
    life: 100,
    attack_interval: 2000
  }
  panel = this.basePanel
  bag = new Bag();
  res = new Resource();
  wear = {
    weapon: null,
    pauldron: null,
    cuirass: null,
    wrister: null,
    shoes: null,
    ring: null,
    necklace: null,
    cloak: null,
  }
  autoEat = []
  fightStatus = {
    isFight: false,
    playProgress: 0,
    enemyProgress: 0,
  }



  initDoing(){
    this.initCutWood()
  }

  // 砍树相关
  woodAreas = new Map()
  timer = null
  initCutWood(){
    const areas = [
      { name: '小树林', tress: ['普通原木', '橡木'], level: 1}
    ]
    areas.forEach(value => {
      this.woodAreas.set(getHashCode(value.name), value)
    })
  }

  cutWoodStart(area, tree, stop = false){
    if (!this.timeout && this.haveTree(area,tree) || !stop){
      this.timeout = setInterval(()=>{
        console.log(this.bag.toString())
        this.bag.push(this.getTree(tree))
      },this.getTree(tree).interval)
    }else {
      clearInterval(this.timer)
      return false
    }
  }
  haveTree(area, tree){
    return this.woodAreas.get(getHashCode(area)).tress.indexOf(tree) !== -1
  }
  getTree(tree){
    return this.res.get(tree)
  }



  // 吃食物
  eatFood(food) {
    if (this.bag.getCount(food) === -1) {
      return
    }
    this.bag.remove(food)
    this.panel.attack += food.attack
    this.panel.attack_interval -= food.attack_interval
    this.panel.defence += food.defence
    this.panel.strength += food.strength
    this.panel.life += food.life
    const res = this.panel.hitpoints + food.hitpoints
    this.panel.hitpoints = res > this.panel.life ? this.panel.life : res
  }

  addAutoEat(thing){
    this.autoEat.push(thing)
  }

  fighting(enemy) {
    let playProgress = 0
    let enemyProgress = 0
    const timer = setInterval(() => {
      playProgress += 20
      enemyProgress += 20
      if (playProgress >= this.panel.attack_interval) {
        playProgress = 0
        const hurt = this.calcHurt(enemy)
        enemy.hitpoints -= hurt
        console.log('攻击'+enemy.name+'造成' + hurt + '剩余：' + enemy.hitpoints )
        if (enemy.hitpoints < 0){
          clearInterval(timer)
          this.getSpoils(enemy)
        }
      }
      if (enemyProgress >= enemy.attack_interval) {
        enemyProgress = 0
        const hurt = this.calcBeHurt(enemy)
        this.panel.hitpoints -= hurt
        console.log(enemy.name + '对你造成' + hurt + '伤害(' + this.panel.hitpoints + '/' + this.panel.life + ')')
        if (this.panel.hitpoints < 0){
          clearInterval(timer)
          this.died()
        }
      }
      this.fightStatus.playProgress = (playProgress / this.panel.attack_interval).toFixed(0)
      this.fightStatus.enemyProgress = (enemyProgress / enemy.attack_interval).toFixed(0)
    }, 20)
  }

  // 计算伤害
  calcHurt(enemy) {
    const a = (this.panel.attack + this.panel.strength * 0.8).toFixed(0)
    const hurt = a - enemy.defence
    return hurt > 0 ? hurt : 1
  }
  // 计算被打伤害
  calcBeHurt(enemy) {
    const a = (enemy.attack + enemy.strength * 0.8).toFixed(0)
    const hurt = a - this.panel.defence
    return hurt > 0 ? hurt : 1
  }

  // 获取战利品
  getSpoils(enemy){
    console.log('打败了' + enemy.name)
  }

  died(){
    console.log('你死了')
  }

  // 穿装备
  wearEquipment(equipment) {
    switch (equipment.type) {
      case 1:
        this.wear.weapon = equipment;
        this.bag.remove(equipment);
        break
      case 2:
        this.wear.pauldron = equipment;
        this.bag.remove(equipment);
        break
      case 3:
        this.wear.cuirass = equipment;
        this.bag.remove(equipment);
        break
      case 4:
        this.wear.wrister = equipment;
        this.bag.remove(equipment);
        break
      case 5:
        this.wear.shoes = equipment;
        this.bag.remove(equipment);
        break
      case 6:
        this.wear.ring = equipment;
        this.bag.remove(equipment);
        break
      case 7:
        this.wear.necklace = equipment;
        this.bag.remove(equipment);
        break
      case 8:
        this.wear.cloak = equipment;
        this.bag.remove(equipment);
        break
    }
    this.countPanel()
  }

  // 脱装备
  disWearEquipment(equipment) {
    switch (equipment.type) {
      case 1:
        this.wear.weapon = null;
        this.bag.push(equipment);
        break
      case 2:
        this.wear.pauldron = null;
        this.bag.push(equipment);
        break
      case 3:
        this.wear.cuirass = null;
        this.bag.push(equipment);
        break
      case 4:
        this.wear.wrister = null;
        this.bag.push(equipment);
        break
      case 5:
        this.wear.shoes = null;
        this.bag.push(equipment);
        break
      case 6:
        this.wear.ring = null;
        this.bag.push(equipment);
        break
      case 7:
        this.wear.necklace = null;
        this.bag.push(equipment);
        break
      case 8:
        this.wear.cloak = null;
        this.bag.push(equipment);
        break
    }
    this.countPanel()
  }

  // 计算面板
  countPanel() {
    this.panel = {...this.basePanel}
    for (let key in this.wear) {
      if (this.wear[key] !== null) {
        this.panel.attack += this.wear[key].attack
        this.panel.attack_interval += this.wear[key].attack_interval
        this.panel.defence += this.wear[key].defence
        this.panel.strength += this.wear[key].strength
        this.panel.life += this.wear[key].life
      }
    }
  }

  // 获取面板字符串
  getPanelString() {
    return `面板：
攻击力：${this.panel.attack}
力量：${this.panel.strength}
攻击间隔：${this.panel.attack_interval}
防御：${this.panel.defence}
生命值：${this.panel.hitpoints}/${this.panel.life} \n`
  }

  // 获取装备字符串
  getEquipmentString() {
    let str = '装备：\n';
    str += '武器：' + (this.wear.weapon ?? '无') + '\n'
    str += '肩甲：' + (this.wear.pauldron ?? '无') + '\n'
    str += '胸甲：' + (this.wear.cuirass ?? '无') + '\n'
    str += '护腕：' + (this.wear.wrister ?? '无') + '\n'
    str += '鞋：' + (this.wear.shoes ?? '无') + '\n'
    str += '戒指：' + (this.wear.ring ?? '无') + '\n'
    str += '项链：' + (this.wear.necklace ?? '无') + '\n'
    str += '披风：' + (this.wear.cloak ?? '无') + '\n'
    return str
  }

  toString() {
    return `
${this.getPanelString()}
背包：${this.bag}
${this.getEquipmentString()}
${this.res}`
  }
}

// 背包
class Bag {
  length = 20;
  items = [];

  // 获取背包的数量
  getCount(thing) {
    const index = this.getItemIndex(thing.hash)
    if (index === -1) {
      return -1;
    } else {
      this.items[index].length
    }
  }

  // 将物品放入背包
  push(thing, num = 1) {
    const index = this.getItemIndex(thing.hash)
    if (index !== -1) {
      this.items[index].add(num)
    } else {
      this.items.push(new BagItem(thing, num))
    }
  }

  removeAll(thing) {
    const index = this.getItemIndex(thing.hash)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  }

  remove(thing, size = 1) {
    const index = this.getItemIndex(thing.hash)
    if (index !== -1) {
      const res = this.items[index].reduce(size)
      if (!res) {
        this.items.splice(index, 1)
      }
    }
  }

  getItemIndex(hash) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].thing.hash === hash) {
        return i
      }
    }
    return -1
  }

  toString() {
    let str = '(' + this.items.length + '/' + this.length + ')\n'
    this.items.forEach((item) => {
      str += '    ' + item.thing.name + '(' + item.length + ') \n'
    })
    return str;
  }
}

// 背包格子
class BagItem {
  length = 1;
  thing = {};

  constructor(thing, length = 1) {
    this.thing = thing
    this.length = length
  }

  add(num = 1) {
    this.length += num
  }

  reduce(num = 1) {
    if (this.length - num < 1) {
      this.length = 0
      return false;
    } else {
      this.length -= num
      return true
    }
  }

}

// 基类
class Thing {
  // 1，物品 2，装备 3 Enemy, 4 食物
  type = 1
  name = ''
  hash = ''
  avatar = 'img'
  price = 0

  constructor(name, avatar, price = 0, type = 1) {
    this.name = name
    this.avatar = avatar
    this.price = price
    this.type = type
    this.hash = getHashCode(this.name)
  }

  toString() {
    return this.name
  }
}

// 装备
class Equipment extends Thing {
  // 1， 武器 2 肩胛 3 胸甲 4 护腕 6 鞋子 7 戒指 8 项链 9 披风
  equ_type = 1;
  attack = 1;
  strength = 1;
  defence = 1;
  life = 10;
  attack_interval = 0;

  constructor(type, name, avatar, price, attack, strength, defence, life, attack_interval = 0) {
    super(name, avatar, price, 2);
    this.attack = attack;
    this.equ_type = type;
    this.attack_interval = attack_interval;
    this.strength = strength;
    this.defence = defence;
    this.life = life;
  }

  toString() {
    return `${this.name}(攻击：${this.attack},力量：${this.strength},防御：${this.defence},生命：${this.life},攻击间隔：${this.attack_interval})`
  }
}

// 食物
class Food extends Thing {
  attack = 0;
  strength = 0;
  defence = 0;
  hitpoints = 100;
  attack_interval = 0;
  life = 0;

  constructor(name, avatar, price, hitpoints, life = 0, attack = 0, strength = 0, defence = 0, attack_interval = 0) {
    super(name, avatar, price, 4);
    this.attack = attack;
    this.strength = strength;
    this.defence = defence;
    this.hitpoints = hitpoints;
    this.life = life;
    this.attack_interval = attack_interval;
  }
}

// 敌人
class Enemy extends Thing {
  attack = 1;
  strength = 1;
  defence = 1;
  hitpoints = 100;
  attack_interval = 2000;

  constructor(name, avatar, attack, strength, defence, hitpoints, attack_interval) {
    super(name, avatar, 0, 3);
    this.attack = attack
    this.strength = strength
    this.defence = defence
    this.hitpoints = hitpoints
    this.attack_interval = attack_interval
  }

  toString() {
    return `${this.name}：
攻击力：${this.attack}
力量：${this.strength}
攻击间隔：${this.attack_interval}
防御：${this.defence}
生命值：${this.hitpoints}\n`
  }
}

// 树
class Wood extends Thing {
  interval
  constructor(name, avatar, price, type, interval) {
    super(name, avatar, price, type);
    this.interval = interval;
  }
}

// 资源
class Resource {
  equipments = [
    [1, '新手剑', '', 1, 10, 10, 0, 0, 100],
    [2, '新手肩甲', '', 1, 0, 2, 3, 100, 200],
    [3, '新手胸甲', '', 1, 0, 0, 5, 200, 200],
    [4, '新手护腕', '', 1, 0, 5, 5, 100, -200],
    [5, '新手鞋', '', 1, 0, 5, 2, 100, 100],
    [6, '新手戒指', '', 1, 5, 0, 0, 0, -300],
    [7, '新手项链', '', 1, 5, 0, 0, 0, -200],
    [8, '新手披风', '', 1, 5, 0, 0, 0, -200],
  ]
  woods = [['普通原木', '', 5, 1,1000], ['橡木', '', 10, 1,2000], ['杉木', '', 15, 1,3000]]

  foods = [
    ['小红药', '', 10, 50],
    ['中红药', '', 20, 100],
    ['大红药', '', 40, 500],
  ]

  enemies = [
    ['小蜘蛛', '', 10, 10, 10, 100, 3000],
    ['小史莱姆', '', 20, 20, 20, 100, 3000],
    ['小哥布林', '', 30, 30, 30, 100, 2000],
  ]

  // 容器对象
  beans = new Map()

  constructor() {
    this.init()
  }

  init() {
    this.initWoods()
    this.initEquipments()
    this.initFoods()
    this.initEnemies()
  }

  initWoods() {
    this.woods.forEach((thing) => {
      this.add(new Wood(...thing))
    })
  }

  initEquipments() {
    this.equipments.forEach((thing) => {
      this.add(new Equipment(...thing))
    })
  }

  initFoods() {
    this.foods.forEach((thing) => {
      this.add(new Food(...thing))
    })
  }

  initEnemies() {
    this.enemies.forEach((thing) => {
      this.add(new Enemy(...thing))
    })
  }

  add(thing) {
    this.beans.set(thing.hash, thing)
  }

  get(name) {
    return this.beans.get(getHashCode(name))
  }

  toString() {
    let str = '容器：\n'
    this.beans.forEach(thing => {
      str += thing + '\n'
    })
    return str
  }

}



class Fisher{
  fishingAreas = new Map()

  init(){
    const areas = [
      {name: '小树林', fresh: ['小虾米', '小龙虾']}
    ]
  }
}


function getHashCode(str) {
  let hash = 1315423911, i, ch;
  for (i = str.length - 1; i >= 0; i--) {
    ch = str.charCodeAt(i);
    hash ^= ((hash << 5) + ch + (hash >> 2));
  }
  return (hash & 0x7FFFFFFF);
}

// 初始化
(function init() {
  const player = new Player()
  player.freshStart('小树林','普通原木')
})()

