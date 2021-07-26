<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>ประเภท</td>
                    <td>จำนวน</td>
                    <td>หมายเหตุ</td>
                    <td>ว/ด/ปี</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(a,index) in fecthData" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ a.type == 'income' ? 'รายรับ' : 'รายจ่าย' }}</td>
                    <td>{{ a.current }}</td>
                    <td>{{ a.info ? a.info : '-' }}</td>
                    <td>{{ a.date }}</td>
                </tr>
            </tbody>
        </table>
        <h3>รวมรายจ่าย: {{ this.$store.getters.total('outcome') }} รวมรายรับ: {{ this.$store.getters.total('income') }} ยอดสุทธิ : {{ this.$store.getters.total('all') }} </h3>
    </div>
</template>

<script>
export default {
    computed:{
        fecthData(){
            return this.$store.state.data
        }
    }
}
</script>

<style scoped>
    table{
        width:50vw;
        border-collapse: collapse;
    }
    table td{
        border:2px solid black;
        padding:1vh;
    }
</style>