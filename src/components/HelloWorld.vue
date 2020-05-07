<template>
    <div class="hello">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</template>

<script>

export default {
    name: "HelloWorld",
    props: {
    },
    created() {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    a {
        color: #42b983;
    }
    .hello {
        width: 200px;
        border: 1px solid #42b983;

        // &::after {
        //     content: "";
        //     display: block;
        //     clear: both;
        // }

        .left {
            // float: left;
            background: blue;
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
        }

        .right {
            // float: left;
            background: red;
            width: 100px;
            height: 50px;
            margin-top: 10px;
        }
    }
</style>
