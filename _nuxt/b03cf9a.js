(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{301:function(t,e,l){var content=l(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(84).default)("42e04a48",content,!0,{sourceMap:!1})},303:function(t,e,l){"use strict";l(301)},304:function(t,e,l){var r=l(83)(!1);r.push([t.i,".m-order-form[data-v-7e0f93c0]{max-width:520px;width:100%;padding:30px;margin:50px 0;border-radius:3px;background-color:#fff}",""]),t.exports=r},307:function(t,e,l){"use strict";l.r(e);l(5),l(4),l(2),l(1),l(6),l(3),l(7);var r=l(0),o=(l(36),l(11),l(310)),d=l.n(o);l(311),l(312);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={components:{VueSlider:d.a},props:{dataForm:{type:[Object,Array],default:null}},data:function(){return{fields:{email:"",fullName:"",address:"",delivery:"",colorSelected:"",totalCount:1},dataColorSelect:{selected:{},options:[{value:"Красный",text:"Красный"},{value:"Красный",text:"Красный"},{value:"Красный",text:"Красный"}]},submitValid:!0,sliderOptions:{min:0,max:10}}},methods:{isEmpty:function(t){return""===t.trim()},resetForm:function(){this.fields.email="",this.fields.fullName="",this.fields.address="",this.fields.delivery="",this.fields.colorSelected="",this.fields.totalCount=""},onSubmit:function(){console.log("first"),this.$emit("submiting-data",f(f({},this.fields),this.dataColorSelect.select)),this.resetForm()}},computed:{fullNameState:function(){return/^(?=.{1,40}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/.test(this.fields.fullName)},emailState:function(){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.fields.email)},addressState:function(){return!this.isEmpty(this.fields.address)},deliveriState:function(){return!this.isEmpty(this.fields.delivery)}}},m=(l(303),l(66)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"m-order-form"},[l("h2",[t._v("Форма заказа")]),t._v(" "),l("b-list-group",{staticClass:"mt-3 mb-5"},[l("b-list-group-item",[t._v("Код товара: "+t._s(t.dataForm.unitCode))]),t._v(" "),l("b-list-group-item",[t._v("Бренд: "+t._s(t.dataForm.brand))]),t._v(" "),l("b-list-group-item",[t._v("Наименование: "+t._s(t.dataForm.name))]),t._v(" "),l("b-list-group-item",[t._v("Цена за 1шт: "+t._s(t.dataForm.unitPrice))])],1),t._v(" "),l("b-form",{attrs:{id:"form-submit"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[l("div",{attrs:{role:"name"}},[l("label",{staticClass:"my-2",attrs:{for:"input-fields-fullName"}},[t._v("Ваше имя полностью:")]),t._v(" "),l("b-form-input",{staticClass:"mb-2",attrs:{id:"input-fields-fullName",state:t.fullNameState,placeholder:"например: Иванов Петр Семенович","aria-describedby":"input-fields-fullName-feedback"},model:{value:t.fields.fullName,callback:function(e){t.$set(t.fields,"fullName",e)},expression:"fields.fullName"}}),t._v(" "),l("b-form-invalid-feedback",{staticClass:"mb-3",attrs:{id:"input-fields-fullName-feedback"}},[t._v("\n        Ошибка: не менее двух слов (не менее 2-х символов каждое), разрешается\n        использовать русские и латинские буквы, пробел и дефис.\n      ")])],1),t._v(" "),l("div",{attrs:{role:"email"}},[l("label",{attrs:{for:"input-fields-email"}},[t._v("Email:")]),t._v(" "),l("b-form-input",{staticClass:"mb-2",attrs:{id:"input-fields-email",state:t.emailState,placeholder:"например: name@email.ru","aria-describedby":"input-fields-email-feedback"},model:{value:t.fields.email,callback:function(e){t.$set(t.fields,"email",e)},expression:"fields.email"}}),t._v(" "),l("b-form-invalid-feedback",{staticClass:"mb-3",attrs:{id:"input-fields-email-feedback"}},[t._v("\n        Ошибка: Введите корректный email\n      ")])],1),t._v(" "),l("div",{attrs:{role:"address"}},[l("label",{staticClass:"mb-1",attrs:{for:"input-fields-address"}},[t._v("Адрес:")]),t._v(" "),l("b-form-input",{staticClass:"mb-3",attrs:{state:t.addressState},model:{value:t.fields.address,callback:function(e){t.$set(t.fields,"address",e)},expression:"fields.address"}})],1),t._v(" "),l("div",{attrs:{role:"delivery"}},[l("label",{staticClass:"mb-1",attrs:{for:"input-fields-delivery"}},[t._v("Интервал доставки:")]),t._v(" "),l("b-form-input",{staticClass:"mb-3",attrs:{state:t.deliveriState},model:{value:t.fields.delivery,callback:function(e){t.$set(t.fields,"delivery",e)},expression:"fields.delivery"}})],1),t._v(" "),l("div",{attrs:{role:"color-selected"}},[l("label",{staticClass:"mb-1",attrs:{for:"input-fields-select","v-model":t.dataColorSelect.selected}},[t._v("Выбранный цвет:")]),t._v(" "),l("b-form-select",{staticClass:"mb-3",attrs:{options:t.dataColorSelect.options}})],1),t._v(" "),l("div",{attrs:{role:"select-total"}},[l("label",{attrs:{for:"slider-total"}},[t._v("Количество: "+t._s(t.fields.totalCount))]),t._v(" "),l("vue-slider",{staticClass:"mb-4",attrs:{clickable:!1,min:t.sliderOptions.min,max:t.sliderOptions.max},model:{value:t.fields.totalCount,callback:function(e){t.$set(t.fields,"totalCount",e)},expression:"fields.totalCount"}})],1),t._v(" "),l("b-button",{attrs:{type:"submit",variant:"primary",disabled:!(t.fullNameState&&t.emailState&&t.addressState&&t.deliveriState)}},[t._v("Оформить")])],1)],1)}),[],!1,null,"7e0f93c0",null);e.default=component.exports}}]);