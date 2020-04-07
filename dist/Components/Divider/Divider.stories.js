var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Divider/Divider.stories.js";var _default=(0,_storiesOf.storiesOf)('Components|Divider',module).addParameters({jest:['Divider']}).add('Simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:11}},_react.default.createElement(_Header.default,{title:'Divider',__source:{fileName:_jsxFileName,lineNumber:12}}),_react.default.createElement(_.Divider,{__source:{fileName:_jsxFileName,lineNumber:14}}),_react.default.createElement(_.Divider,{__source:{fileName:_jsxFileName,lineNumber:15}}),_react.default.createElement(_.Divider,{marginVertical:24,__source:{fileName:_jsxFileName,lineNumber:16}}));}).add('subheader',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:20}},_react.default.createElement(_Header.default,{title:'Divider',__source:{fileName:_jsxFileName,lineNumber:21}}),_react.default.createElement(_.Divider,{subheader:'Subheader',__source:{fileName:_jsxFileName,lineNumber:23}}),_react.default.createElement(_.Divider,{subheader:'Title',insetHeader:8,__source:{fileName:_jsxFileName,lineNumber:24}}),_react.default.createElement(_.Divider,{subheader:'Section',insetHeader:16,marginVertical:24,__source:{fileName:_jsxFileName,lineNumber:25}}));}).add('insetLeft',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:30}},_react.default.createElement(_Header.default,{title:'Inset Left',__source:{fileName:_jsxFileName,lineNumber:31}}),_react.default.createElement(_.List,{subheader:'Favorites',style:{width:300},__source:{fileName:_jsxFileName,lineNumber:33}},_react.default.createElement(_.ListItem,{text:'Janet Perkins',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:37}}),__source:{fileName:_jsxFileName,lineNumber:34}}),_react.default.createElement(_.ListItem,{text:'Mary Perkins',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:50}}),__source:{fileName:_jsxFileName,lineNumber:47}}),_react.default.createElement(_.Divider,{insetLeft:20,__source:{fileName:_jsxFileName,lineNumber:59}}),_react.default.createElement(_.ListItem,{text:'Peter Carlsson',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:63}}),__source:{fileName:_jsxFileName,lineNumber:60}}),_react.default.createElement(_.ListItem,{text:'Trevor Hansen',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:75}}),__source:{fileName:_jsxFileName,lineNumber:72}}),_react.default.createElement(_.Divider,{insetLeft:20,__source:{fileName:_jsxFileName,lineNumber:84}}),_react.default.createElement(_.ListItem,{text:'Person McPerson',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:88}}),__source:{fileName:_jsxFileName,lineNumber:85}}),_react.default.createElement(_.ListItem,{text:'Wendy',media:_react.default.createElement(_.Avatar,{type:"icon",content:"person",contentColor:'#ececec',color:'#a3a3a3',size:40,__source:{fileName:_jsxFileName,lineNumber:100}}),__source:{fileName:_jsxFileName,lineNumber:97}})));});exports.default=_default;