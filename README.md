# myvue-validate

A Vue component to validate
一个基于mintui的 验证插件

## demo演示

[demo](https://gaohawk.github.io/my-validate/mainPage.html)

## 安装

```JS
npm install myvue-validate -S
```

## 使用

```js
// ES6
import myvue-validate from 'myvue-validate.js'
// require
var validate = require('myvue-validate')

Vue.use(myvue-validate)

// 或者直接使用script导入
<script src="./node_modules/vue/dist/myvue-validate.js"></script>

```

### 配置

```html
  <mt-field 
      label="车主姓名" 
      v-uname="username" 
      placeholder="请输入姓名"  
      v-model="username" >
  </mt-field> 

  <mt-field 
      label="联系手机" 
      v-uname.checkphone="phone" 
      placeholder="请输入电话"  
      v-model="phone" >
  </mt-field> 

```

```javascript
methods:{
    checkValidate(val) {
        if(!this.checkStart) {
          alert('请填写相关信息') // 只有在用户填写相关信息时 触发指令的update才会触发验证，默认是false
        }else{
          console.log(this.errMsgMap); //  错误信息合集
          if(this.errMsgMap.size>0){
            let MapArr = [...this.errMsgMap];
            console.log(MapArr)
            // 每次将数组第一条错误信息推出， 如果没有错误信息，验证成功
            Toast({
              message: MapArr[0][1],
              position: 'bottom',
              duration: 5000
            });
          }else{
            MessageBox('提示', '验证成功');
          }
        }
    }
}
```

