<template>
    <div class="main-box">

        <h3 v-if="type == 'income'">รายรับ</h3>
        <h3 v-else-if="type == 'outcome'">รายจ่าย</h3>

        <div class="child">
            <label for="current">จำนวน : </label>
            <input type="number" v-model="current">
        </div>
        <div class="child">
            <label for="info">หมายเหตุ : </label>
            <input type="text" v-model="info" placeholder="กรอกรายละเอียด (ทางเลือก)">
        </div>
        <div class="child">
            <label for="date">ว/ด/ปี : </label>
            <input type="date" v-model="date"><br>
        </div>

        <div class="child">
            <label></label>
            <button @click="submit" :class=" type == 'income' ? 'income' : 'outcome' ">บันทึกลงบัญชี ({{ type == 'income' ? 'รายรับ' : 'รายจ่าย' }})</button>
        </div>

    </div>
</template>

<script>
export default {
    props:['type'],
    data(){
        return{
            current:0,
            info:'',
            date:null
        }
    },
    methods:{
        clearForm(){
            this.current = 0
            this.info = ''
            this.date = null
        },
        submit(){
            this.$store.commit('insertData',{
                type:this.type,
                current:this.current,
                info:this.info,
                date:this.date
            })
            this.clearForm()
        }
    }
}
</script>

<style scoped>
    .main-box{
        width:20vw;
        padding:1vh;
    }

    .main-box input{
        margin-bottom:5px;
    }

    .child input{
        width:70%;
    }

    .child label{
        width:30%;
    }

    .child{
        width:100%;
        display: flex;
        justify-content: center;
    }

    button{
        border:none;
        background:none;
        padding: 5px;
        width:70%;
        transition: 0.2s;
    }

    .income{
        background:rgb(37, 255, 190);
        color:rgb(25, 129, 86);
    }

    .income:hover{
        background:rgb(24, 150, 112);
        color:rgb(37, 255, 190);
    }

    .outcome{
        background: rgb(255, 83, 135);
        color:rgb(133, 27, 35);
    }

    .outcome:hover{
        background: rgb(133, 27, 35);
        color:rgb(255, 83, 135);
    }

</style>