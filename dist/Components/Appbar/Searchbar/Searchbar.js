var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _IconButton=_interopRequireDefault(require("../../IconButton/IconButton"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Appbar/Searchbar/Searchbar.js";var Searchbar=function(_Component){(0,_inherits2.default)(Searchbar,_Component);function Searchbar(){(0,_classCallCheck2.default)(this,Searchbar);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Searchbar).apply(this,arguments));}(0,_createClass2.default)(Searchbar,[{key:"_renderNavigation",value:function _renderNavigation(){var _this$props=this.props,_this$props$navigatio=_this$props.navigationIcon,navigationIcon=_this$props$navigatio===void 0?'':_this$props$navigatio,onNavigation=_this$props.onNavigation,navigationIconComponent=_this$props.navigationIconComponent,theme=_this$props.theme;if(typeof navigationIcon==='string'||navigationIcon instanceof String){return _react.default.createElement(_IconButton.default,{name:navigationIcon||'arrow-back',size:theme.searchBarNavigationIcon.size,color:theme.searchBarNavigationIcon.color,onPress:onNavigation,iconComponent:navigationIconComponent,__source:{fileName:_jsxFileName,lineNumber:35}});}else{return navigationIcon;}}},{key:"_renderClose",value:function _renderClose(){var _this$props2=this.props,closeIcon=_this$props2.closeIcon,onCloseIcon=_this$props2.onCloseIcon,closeIconComponent=_this$props2.closeIconComponent,theme=_this$props2.theme;if(typeof closeIcon==='string'||closeIcon instanceof String){return _react.default.createElement(_IconButton.default,{name:closeIcon||'close',size:theme.searchBarcloseIcon.size,color:theme.searchBarcloseIcon.color,onPress:onCloseIcon,iconComponent:closeIconComponent,__source:{fileName:_jsxFileName,lineNumber:53}});}else if(closeIcon){return closeIcon;}}},{key:"render",value:function render(){var _this$props3=this.props,style=_this$props3.style,onChangeText=_this$props3.onChangeText,value=_this$props3.value,placeholder=_this$props3.placeholder,theme=_this$props3.theme;return _react.default.createElement(_reactNative.View,{style:[theme.searchBar,style],__source:{fileName:_jsxFileName,lineNumber:69}},this._renderNavigation(),_react.default.createElement(_reactNative.TextInput,{style:theme.searchInput,placeholder:placeholder?placeholder:'Search',onChangeText:onChangeText,value:value,__source:{fileName:_jsxFileName,lineNumber:71}}),this._renderClose());}}]);return Searchbar;}(_react.Component);(0,_defineProperty2.default)(Searchbar,"propTypes",{value:_propTypes.default.string,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),onChangeText:_propTypes.default.func,onCloseIcon:_propTypes.default.func,onNavigation:_propTypes.default.func,placeholder:_propTypes.default.string,navigationIcon:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.string]),navigationIconComponent:_propTypes.default.func,closeIcon:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.string]),closeIconComponent:_propTypes.default.func,theme:_propTypes.default.object});var _default=(0,_withTheme.default)(Searchbar);exports.default=_default;