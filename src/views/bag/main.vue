<template>
  <div class="bag-content">
    <div class="bag-title">
      <div>已使用仓库空间 <span class="bag-span">{{ player.bag.items.length }} / {{ player.bag.length }} </span></div>
      <div>仓库价值 <span class="bag-span">40W</span></div>
    </div>
    <div class="bag-main">
      <div class="bag-main-left">
        <div class="bag-item" :class="{'bag-item-active': active === index}" @click="showThings(index, item)" v-for="(item, index) in player.bag.items" :key="index">
          {{ item.thing.name }}
          <span class="bag-item-span">{{ item.length }}</span>
        </div>
      </div>
      <div class="bag-main-right">
        <div v-if="detail">
          <div class="base-info">
            <h3>{{ detail.thing.name }}</h3>
            <p v-if="detail.thing.description">{{ detail.thing.description }}</p>
            <p v-else class="no-description"> 暂无物品描述 </p>
          </div>
          <div v-if="detail.thing.type === 2" class="base-info">
            <h3>装备属性 </h3>
            <p class="green">攻击力：{{ detail.thing.attack }}</p>
            <p class="green">攻击间隔：{{ detail.thing.attack_interval }}</p>
            <p class="green">防御力：{{ detail.thing.defence }}</p>
            <p class="green">生命上线：{{ detail.thing.life }}</p>
            <p class="green">力量：{{ detail.thing.strength }}</p>
            <el-button type="primary" @click="wear">装备</el-button>
          </div>
          <div class="base-info">
            <h3>出售商品 </h3>
            <p>每份售价：<span class="gold">{{ detail.thing.price }}</span> 金币</p>
            <p>
              选择数量
              <el-slider v-model="sell_count" :min="1" :max="detail.length" show-input></el-slider>
            </p>
            <el-button type="primary" @click="sell">出售</el-button>
          </div>

          <div class="base-info">
            <h3>打开物品 </h3>
            <p>
              选择数量
              <el-slider v-model="open_count" :min="1" :max="detail.length" show-input></el-slider>
            </p>
          </div>
        </div>
        <div v-else class="no-detail">点击物品，查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Slider } from 'element-ui'
export default {
  components: {
    [Button.name]: Button,
    [Slider.name]: Slider
  },
  data () {
    return {
      active: -1,
      detail: null,
      sell_count: 1,
      open_count: 1
    }
  },
  methods: {
    showThings (index, item) {
      this.active = index
      this.detail = item
      this.sell_count = 1
      this.open_count = 1
    },
    sell () {
      this.notification.success('出售成功')
    },
    wear () {
      this.player.wearEquipment(this.detail.thing)
      if (this.detail.length < 2) {
        this.detail = null
      }
    }
  }
}
</script>

<style scoped>
  .bag-content{
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  .bag-title{
    padding: 10px;
    color: white;
    background-color: #2c3e50;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 1px 2px rgb(33 34 35/50%),0 1px 2px rgb(26 26 27/50%)!important;
    border-top: 4px solid #b57e3b;
    display: flex;
    margin-bottom: 10px;
  }
  .bag-title > div{
    flex: 1;
    line-height: 30px;
  }
  .bag-span{
    background-color: #febb33;
    padding: 2px 4px;
    border-radius: 4px;
  }
  .bag-main{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    color: white;
    justify-content: flex-start;
  }
  .bag-main-left{
    flex: 1;
    background-color: #232A35;
    padding: 10px;
    text-align: left;
  }
  .bag-main-right{
    width: 300px;
    margin-left: 10px;
    background-color: #232A35;
    padding: 10px;
    text-align: left;
  }
  .bag-item{
    display: inline-flex;
    position: relative;
    margin: 10px;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
    background-color: #434343;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 1px 2px rgb(33 34 35/50%),0 1px 2px rgb(26 26 27/50%)!important;
  }
  .bag-item-active{
    border: 2px #42b983 solid;
  }
  .bag-item-span{
    position: absolute;
    bottom: -10px;
    font-size: 5px;
    background-color: #6c757d;
    padding: 2px 4px;
    border-radius: 10px;
  }
  .no-description{
    color: #42b983;
  }
  .base-info{
    background-color: #343c4a;
    padding: 10px;
    color: #f5f5f5;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .no-detail{
    text-align: center;
  }
</style>
