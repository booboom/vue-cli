<template>
    <div class="content">
        <div class="header">
            <div>Home</div>
        </div>
        <el-card class="user-info-box" v-for="item in dataList" :key="item.id">
            <div class="user-info">
                <img class="user-avatar" :src="item.avatar" alt="">
                <span>{{item.name}}</span>
            </div>
        </el-card>
    </div>
</template>

<script>

export default {
    name: 'home',
    data () {
        return {
            dataList: []
        }
    },

    created () {
        this.get('api/people').then(res => {
            console.log(res)
            const { data } = res
            this.dataList = data
        })
    }
}
</script>
<style lang="less" scoped>
    .header {
        text-align: center;
        margin-bottom: 40px;
    }
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