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
  .secondInputStyle{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    border: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    outline: 0;
    line-height: 1.6;
    font-size: inherit;
    border:0px;
    width:45px;
    position:absolute;
    right:7.8rem;
    bottom:-14px;
    font-size:1rem;
    outline:beige;
  }
  .custom-inputStyle{
    border-radius:0.5rem;
    margin-bottom:1rem;
    border:0.08rem solid #e5e5e5;
  }
  #picker{
    margin-top: 7rem;
  }
  #cpicker{
    margin-top: 5.5rem;
  }
  .checkbox{
    position: fixed;
    right:1rem;
    top: 3.5rem;
    font-size:1rem;
    color:#666;
    line-height: 4rem;
    padding-left: 0;
  }
  .reCheck::after{
    content: "";
    display: block;
    width:1.6rem;
    height:1.6rem;
    border-radius:0.5rem;
    border:0.1rem solid #17c3e5;
    background:none;
  }
  .reCheck.checked::before{
    content:'';
    display: block;
    position:absolute;
    width: 1.5rem;
    height:1.5rem;
    background: url(../assets/checked.png) no-repeat;
    background-size: cover;
  }
  .carNumber{
    width: 80%;
  }
  @media screen and (max-width:375px){
      .custom-inputStyle{
        margin-bottom: 0.7rem;
      }
      #picker{
        margin-top: 5.9rem;
      }
      #cpicker{
        margin-top: 4.4rem;
      }
   }
  @media screen and (max-width:360px){
      .custom-inputStyle{
        margin-bottom: 0.4rem;
        min-height: 44px;
      }
      #picker{
        margin-top: 5.2rem;
      }
      #cpicker{
        margin-top: 4rem;
      }
  }
  @media screen and (max-width:320px){
      .custom-inputStyle{
        margin-bottom: 0.4rem;
        min-height: 36px;
      }
      .checkbox{
        top:3.1rem;
        right:0.7rem;
      }
      .reCheck::after{
        width:1.35rem;
        height:1.35rem;
      }
      .reCheck.checked::before{
        width:1.15rem;
        height: 1.15rem;
      }
      .carNumber{
        width: 79%;
      }
      .secondInputStyle{
        right:7.3rem;
        bottom: -14px;
      }
      #picker{
        margin-top: 4.25rem;
      }
      #cpicker{
        margin-top: 2.45rem;
      }
  }
  #homeindex{
    margin-top: 4rem;
  }
  .mint-cell-wrapper .mint-cell-value input{
    text-align: right;
  }


  .check .reCheck{
    margin-right:0.5rem;
  }
  .reCheck{
    display: inline-block;
    position:relative;
    vertical-align:middle;
  }

</style>

