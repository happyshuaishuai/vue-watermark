import Vue from 'vue';

/** 水印
 * Created by Administrator on 2020/8/17.
 */
Vue.directive('watermark', (el)=>{
    function addWaterMarker (str, parentNode, font, textColor){ // 水印文字，父元素，字体，文字颜色
        var can = document.createElement('canvas');
        parentNode.appendChild(can);
        can.width = 300;
        can.height = 200;
        can.style.display = 'none';
        var cans = can.getContext('2d');
        cans.rotate(-30 * Math.PI / 180);
        cans.font = font || "16px Microsoft JhengHei";
        cans.fillStyle = textColor || "rgba(180, 180, 180, .3)";
        cans.textAlign = 'left';
        cans.textBaseline = 'Middle';
        let strArr = str.split('-')
        cans.fillText(strArr[0], 0, 100);
        cans.fillText(strArr[1], 0, 130);
        parentNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
    }
  
    let d = new Date();
    let _getYear = d.getFullYear();
    let _getMonth = (d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1);// 获取当前月份(0-11,0代表1月)
    let _getDate = d.getDate() > 9 ? d.getDate() : '0' + d.getDate(); // 获取当前日(1-31)
    let text1 = "xueshuai"   // 文本1
    let text2 = `${_getYear}/${_getMonth}/${_getDate}`   // 文本2
    let str = `${text1}-${text2}`
    addWaterMarker(str, el)
  })