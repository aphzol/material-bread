var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../..");var _storybookState=require("@sambego/storybook-state");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _storiesOf=require("../../../storybook/helpers/storiesOf");var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Progress/ProgressBar/ProgressBar.stories.js";var store=new _storybookState.Store({value3:30,visible2:true,circleValue3:40});var _default=(0,_storiesOf.storiesOf)('Components|Progress/ProgressBar',module).addParameters({jest:['ProgressBar']}).add('Indeterminate',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:19}},_react.default.createElement(_Header.default,{title:'Progress Bar',__source:{fileName:_jsxFileName,lineNumber:20}}),_react.default.createElement(_.ProgressBar,{visible:true,__source:{fileName:_jsxFileName,lineNumber:22}}),_react.default.createElement(_.ProgressBar,{visible:true,indicatorStartPosition:100,trackStyle:{marginTop:20},color:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:23}}),_react.default.createElement(_.ProgressBar,{visible:true,indicatorStartPosition:100,trackStyle:{marginTop:20},color:'#009688',animationDuration:2000,__source:{fileName:_jsxFileName,lineNumber:29}}),_react.default.createElement(_.ProgressBar,{visible:true,indicatorStartPosition:100,trackStyle:{marginTop:20},color:'#673AB7',animationDuration:4000,__source:{fileName:_jsxFileName,lineNumber:36}}),_react.default.createElement(_.ProgressBar,{visible:true,indicatorStartPosition:100,trackStyle:{marginTop:20},color:'#8BC34A',animationDuration:3000,height:5,__source:{fileName:_jsxFileName,lineNumber:43}}),_react.default.createElement(_.ProgressBar,{visible:true,indicatorStartPosition:100,trackStyle:{marginTop:20},color:'#03A9F4',animationDuration:4000,height:10,__source:{fileName:_jsxFileName,lineNumber:51}}));}).add('Determinate',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:62}},_react.default.createElement(_Header.default,{title:'Progress Bar',__source:{fileName:_jsxFileName,lineNumber:63}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:65}},function(state){return _react.default.createElement(_reactNative.View,{style:{marginBottom:40},__source:{fileName:_jsxFileName,lineNumber:67}},_react.default.createElement(_.ProgressBar,{determinate:true,value:state.value3,animationDuration:2000,trackStyle:{marginTop:40},visible:state.visible2,__source:{fileName:_jsxFileName,lineNumber:68}}),_react.default.createElement(_.Button,{type:"outlined",style:{marginTop:20},text:' Change Value',onPress:function onPress(){store.set({value3:Math.floor(Math.random()*Math.floor(100))});},__source:{fileName:_jsxFileName,lineNumber:75}}),_react.default.createElement(_.Button,{type:"outlined",style:{marginTop:20},animationDuration:500,text:'Hide / Show Animate',onPress:function onPress(){store.set({visible2:!state.visible2});},__source:{fileName:_jsxFileName,lineNumber:86}}));}),_react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:101}},_react.default.createElement(_.ProgressBar,{determinate:true,value:25,color:'#E91E63',animationDuration:2000,trackStyle:{marginBottom:40},visible:true,__source:{fileName:_jsxFileName,lineNumber:102}}),_react.default.createElement(_.ProgressBar,{determinate:true,value:50,color:'#009688',animationDuration:500,trackStyle:{marginBottom:40},visible:true,__source:{fileName:_jsxFileName,lineNumber:110}}),_react.default.createElement(_.ProgressBar,{determinate:true,value:75,color:'#673AB7',animationDuration:400,trackStyle:{marginBottom:40},visible:true,height:5,__source:{fileName:_jsxFileName,lineNumber:118}})));});exports.default=_default;