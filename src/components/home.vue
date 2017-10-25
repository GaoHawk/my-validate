<template>
   <div id="homeindex">
     <!--<child prof="title"></child>-->
    <mt-field label="车主姓名" v-uname="username" placeholder="请输入姓名" class="custom-inputStyle"  v-model="username" :attr="{ maxLength:20 }" @focus.native.capture="cancelCity"></mt-field>
    <mt-field label="联系手机" placeholder="请输入手机号"  type="tel" v-uname.checkphone.checkEmail="phone" class="custom-inputStyle"  v-model="phone" :attr="{ maxLength:11 }" @focus.native.capture="cancelCity">
    </mt-field>
    <mt-cell title="起始日期">{{ '2017-9' | formatTime}}</mt-cell>
    <div class="button" style="text-align:center">
        <mt-button size="normal" type="primary" style="width:60%;"
    @click="next()"
  >下一步</mt-button>
    </div>
    <!--<label class="checkbox" @click="newCar()">
      <i class="reCheck"></i>
      新车
    </label>
    <pickUp  v-show="provinceOn" ref="picker"></pickUp>
    <city-picker  v-show="cityOn" ref="city_picker"></city-picker>-->

   </div>
</template>
<script>
// import Header from './header'
// import picker from './picker'
// import cpicker from './cityPicker'
import { mapState } from 'vuex'
// import  quote  from '../../common/comm.js'
import { Indicator } from 'mint-ui';
import { Toast , MessageBox} from 'mint-ui';
export default {
     name:'home',
     computed:{
     },
     data(){
        return {
           newDate:new Date(),
           carNumber:'',
           readonly:false,
           username:'',
           phone:'',
        }
     },
     methods:{
      //  下一步车辆信息
       next:function(){
         this.$store.commit('SET_CITY_ON',false);
         let num =  this.doubleNumber(2);
         alert(num);
         if(!this.checkStart) {
           alert('请填写相关信息')
         }else{
           console.log(this.errMsgMap);
           if(this.errMsgMap.size>0){
             let MapArr = [...this.errMsgMap];
             console.log(MapArr)
             Toast({
                message: MapArr[0][1],
                position: 'bottom',
                duration: 5000
              });
           }else{
             MessageBox('提示', '验证成功');
           }
         }
        
         let bl = false;
        //  if(this.username.length >0 && this.city.length>0 && this.carNumber.length>0 && this.province.length>0 && quote.checkMobil(this.phone)){
        //     bl =true;
        //  }
        //  if(bl){
        //    this.$store.commit('SET_NAME',this.username);
        //    this.$store.commit('SET_PHONE',this.phone);
        //    this.$store.commit('SET_CAR_NUM',this.carNumber);
        //    this.$store.commit('ROUT_PATH','carInfo');
        //    console.log(this.$store);
        //  }else{
        //     Toast({
        //         message: '信息填写有误',
        //         position: 'bottom',
        //         duration: 2000
        //     });
        //  }

       }
     }
  }
</script>
<style>


</style>

