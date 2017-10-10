const validate = {
    install(Vue, options) {
        // 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已
        // Vue.prototype.$xxx  // 最终可以在任何地方通过 this.$xxx 调用
        // 虽然没有明确规定用$开头  但是大家都默认遵守这个规定
        //  时间格式化过滤器，输入内容是number或者Date对象，输出是YYYY-MM-DD HH-MM-SS
        Vue.filter('formatTime', function(value) {
            Date.prototype.Format = function(fmt) { //author: meizz
                var o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                    "h+": this.getHours(), //小时
                    "m+": this.getMinutes(), //分
                    "s+": this.getSeconds(), //秒
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                    "S": this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
            return new Date(value).Format("yyyy-MM-dd hh:mm:ss");
        })

        //  添加实例方法
        //  返回数字是输入数字的两倍，如果不是数字或者不能隐式转换为数字，则输出null
        //  组件实例方法
        Vue.prototype.doubleNumber = function(val) {
            if (typeof val === 'number') {
                return val * 2;
            } else if (!isNaN(Number(val))) {
                return Number(val) * 2;
            } else {
                return null
            }
        }

        //  添加实例方法
        Vue.prototype.$service = {
            //电话号码合法性检查
            telNumberCheck: function(tel) {
                var pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
                return pattern.test(tel)
            },
            checkUserName: function(value) {
                if (value == '') {
                    return false;
                }
            },
            checkEmail: function(email) {
                var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return pattern.test(email);
            }
        }

        Vue.prototype.errMsgMap = new Map();
        Vue.prototype.checkStart = false;

        Vue.directive('uname', {
            bind(el, binding, vnode) {
                console.log('bind');
            },
            update(el, binding, vnode) {
                Vue.prototype.checkStart = true;

                let label = vnode.child.label;
                let value = vnode.child.value;
                let validate = []
                for (let k in binding.modifiers) {
                    validate.push(k)
                }
                console.log(validate);
                if (validate.length > 0) {
                    var errMsg = '';
                    // debugger
                    for (let i = 0; i < validate.length; i++) {
                        switch (validate[i]) {
                            case 'checkphone':

                                if (!Vue.prototype.$service.telNumberCheck(value)) {
                                    if (errMsg.length > 0) {
                                        errMsg += '并且电话号码不合法'
                                    } else {
                                        errMsg = label + '电话号码不合法'
                                    }
                                } else {
                                    if (Vue.prototype.errMsgMap.has(label)) {
                                        Vue.prototype.errMsgMap.delete(label);
                                    }
                                }
                                break;
                            case 'checkEmail':

                                if (!Vue.prototype.$service.telNumberCheck(value)) {
                                    if (errMsg.length > 0) {
                                        errMsg += '并且邮箱不合法'
                                    } else {
                                        errMsg = label + '邮箱不合法'
                                    }
                                } else {

                                    if (Vue.prototype.errMsgMap.has(label)) {
                                        Vue.prototype.errMsgMap.delete(label);
                                    }
                                }
                                break;
                        }
                    }
                    // let obj = {};
                    // obj[label] = errMsg
                    // console.log(obj);
                    if (errMsg.length > 0) Vue.prototype.errMsgMap.set(label, errMsg);
                } else {
                    if (!value) {
                        var errMsg = label + '不能为空';
                        // let obj = {};
                        // obj[label] = errMsg
                        // console.log(obj);
                        Vue.prototype.errMsgMap.set(label, errMsg);
                    } else {
                        if (Vue.prototype.errMsgMap.has(label)) {
                            Vue.prototype.errMsgMap.delete(label);
                        }
                    }
                }

            }
        })
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(validate);
}

export default validate // 导出..