<template>
    <div class="content">
        <div>Home</div>
        <el-card class="user-info-box" v-for="item in dataList" :key="item.id">
            <div class="user-info">
                <img class="user-avatar" :src="item.avatar" alt="">
                <span>{{item.name}}</span>
            </div>
        </el-card>
    </div>
</template>

<script>
import api from '../network/api'

export default {
    name: 'home',
    data () {
        return {
            dataList: []
        }
    },

    created () {
        api.getPeople().then(res => {
            console.log(res)
            this.dataList = res
            console.log(this.dataList)
        })
    }
}
</script>
<style lang="less" scoped>
    .user-info-box {
        margin-bottom: 10px;
    }
    .user-info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .user-avatar {
        border-radius: 50%;
        margin-right: 10px;
    }
</style>