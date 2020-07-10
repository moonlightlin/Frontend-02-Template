class Animal {
  /**
   * @param type 种类
   * @param threatLevel 威胁程度
   * @param hp 生命值
   * @param attackTypes 攻击方式
   */
  constructor(type, threatLevel = 0, hp = 100, attackTypes) {
    this.type = type
    this.threatLevel = threatLevel
    this.hp = hp
    this.attackTypes = attackTypes
  }

  /**
   * 攻击目标
   * @param type 攻击方式
   * @param target 目标
   * @param level 程度
   */
  attack(type, target, level) {
    if (this.attackTypes.indexOf(type) === -1) {
      console.log('我不会这样攻击...')
      return false
    }

    this.threatLevel++
    target.hurt(level)
    return true
  }

  /**
   * 受到伤害
   */
  hurt(level) {
    console.log('我受伤了...')
    this.hp -= level
  }
}

class Dog extends Animal{
  constructor(name) {
    super('Dog', 1, 50, ['bite'])
    this.name = name
  }
}

class Person extends Animal{
  constructor(name) {
    super('Person', 1, 100, [])
    this.name = name
  }
}
