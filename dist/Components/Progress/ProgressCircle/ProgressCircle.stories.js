var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../..");var _storybookState=require("@sambego/storybook-state");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _storiesOf=require("../../../storybook/helpers/storiesOf");var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Progress/ProgressCircle/ProgressCircle.stories.js";var store=new _storybookState.Store({value3:30,visible2:true,circleValue3:40});var _default=(0,_storiesOf.storiesOf)('Components|Progress/ProgressCircle',module).addParameters({jest:['ProgressCircle']}).add('Indeterminate',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:20}},_react.default.createElement(_Header.default,{title:'Progress Circle',__source:{fileName:_jsxFileName,lineNumber:21}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap',marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:23}},_react.default.createElement(_.ProgressCircle,{__source:{fileName:_jsxFileName,lineNumber:25}}),_react.default.createElement(_.ProgressCircle,{color:'#03A9F4',__source:{fileName:_jsxFileName,lineNumber:26}}),_react.default.createElement(_.ProgressCircle,{color:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:27}}),_react.default.createElement(_.ProgressCircle,{color:'#009688',__source:{fileName:_jsxFileName,lineNumber:28}})),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap',marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:30}},_react.default.createElement(_.ProgressCircle,{animationDuration:4800,__source:{fileName:_jsxFileName,lineNumber:32}}),_react.default.createElement(_.ProgressCircle,{color:'#03A9F4',animationDuration:4800,__source:{fileName:_jsxFileName,lineNumber:33}}),_react.default.createElement(_.ProgressCircle,{color:'#E91E63',animationDuration:4800,__source:{fileName:_jsxFileName,lineNumber:34}}),_react.default.createElement(_.ProgressCircle,{color:'#009688',animationDuration:4800,__source:{fileName:_jsxFileName,lineNumber:35}})),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap',marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:37}},_react.default.createElement(_.ProgressCircle,{animationDuration:1200,__source:{fileName:_jsxFileName,lineNumber:39}}),_react.default.createElement(_.ProgressCircle,{color:'#03A9F4',animationDuration:1200,__source:{fileName:_jsxFileName,lineNumber:40}}),_react.default.createElement(_.ProgressCircle,{color:'#E91E63',animationDuration:1200,__source:{fileName:_jsxFileName,lineNumber:41}}),_react.default.createElement(_.ProgressCircle,{color:'#009688',animationDuration:1200,__source:{fileName:_jsxFileName,lineNumber:42}})));}).add('Determinate',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:47}},_react.default.createElement(_Header.default,{title:'Progress Circle',__source:{fileName:_jsxFileName,lineNumber:48}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:49}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'column',marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:51}},_react.default.createElement(_.ProgressCircle,{value:state.circleValue3,size:48,thickness:4,color:"#2b80ff",unfilledColor:"#f2f2f2",animationMethod:"timing",animationConfig:{speed:1},shouldAnimateFirstValue:true,determinate:true,__source:{fileName:_jsxFileName,lineNumber:52}}),_react.default.createElement(_.Button,{type:"outlined",style:{marginTop:20},text:'Change Value',onPress:function onPress(){store.set({circleValue3:Math.floor(Math.random()*Math.floor(100))});},__source:{fileName:_jsxFileName,lineNumber:64}}));}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:77}},_react.default.createElement(_.ProgressCircle,{value:25,size:48,thickness:4,color:"#E91E63",animationMethod:"timing",animationConfig:{duration:1000},shouldAnimateFirstValue:true,determinate:true,__source:{fileName:_jsxFileName,lineNumber:78}}),_react.default.createElement(_.ProgressCircle,{value:50,size:48,thickness:4,color:"#E91E63",animationMethod:"timing",animationConfig:{duration:1000},shouldAnimateFirstValue:true,determinate:true,__source:{fileName:_jsxFileName,lineNumber:88}}),_react.default.createElement(_.ProgressCircle,{value:75,size:48,thickness:4,color:"#E91E63",animationMethod:"timing",animationConfig:{duration:1000},shouldAnimateFirstValue:true,determinate:true,__source:{fileName:_jsxFileName,lineNumber:98}}),_react.default.createElement(_.ProgressCircle,{value:100,size:48,thickness:4,color:"#E91E63",animationMethod:"timing",animationConfig:{duration:1000},shouldAnimateFirstValue:true,determinate:true,__source:{fileName:_jsxFileName,lineNumber:108}})),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:119}},_react.default.createElement(_.ProgressCircle,{value:25,size:48,thickness:8,color:"#009688",animationMethod:"timing",animationConfig:{duration:1000},shouldAnimateFirstValue:true,determinate:true,__source:{fileName:_jsxFileName,lineNumber:120}}),_react.default.createElement(_.ProgressCircle,{value:50,size:48,thickness:8,color:"#009688",animationMethod:"timing",animationConfig:{duration:1000},shouldAnimateFirstValue:true,determinate:true,__source:{fileName:_jsxFileName,lineNumber:130}}),_react.default.createElement(_.ProgressCircle,{value:75,size:48,thickness:8,color:"#009688",animationMethod:"timing",animationConfig:{duration:1000},shouldAnimateFirstValue:true,determinate:true,__source:{fileName:_jsxFileName,lineNumber:140}}),_react.default.createElement(_.ProgressCircle,{value:100,size:48,thickness:8,color:"#009688",animationMethod:"timing",animationConfig:{duration:1000},shouldAnimateFirstValue:true,determinate:true,__source:{fileName:_jsxFileName,lineNumber:150}})));});exports.default=_default;