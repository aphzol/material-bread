var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _Marker=_interopRequireDefault(require("./Marker.styles"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Ripple=_interopRequireDefault(require("../../Ripple/Ripple.js"));var _Hoverable=_interopRequireDefault(require("../../../Utils/Hoverable/Hoverable.js"));var _color=_interopRequireDefault(require("color"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Slider/Marker/Marker.js";var Marker=function(_Component){(0,_inherits2.default)(Marker,_Component);function Marker(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,Marker);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Marker)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{backgroundColorHover:'transparent'});return _this;}(0,_createClass2.default)(Marker,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,disabled=_this$props.disabled,color=_this$props.color,theme=_this$props.theme,markerSize=_this$props.markerSize;var backgroundColorHover=this.state.backgroundColorHover;var backgroundColor=color?color:theme.primary.main;if(disabled)backgroundColor='#d3d3d3';return _react.default.createElement(_Hoverable.default,{onHoverIn:function onHoverIn(){return _this2.setState({backgroundColorHover:(0,_color.default)(backgroundColor).alpha(0.3)});},onHoverOut:function onHoverOut(){return _this2.setState({backgroundColorHover:'transparent'});},__source:{fileName:_jsxFileName,lineNumber:33}},_react.default.createElement(_Ripple.default,{rippleColor:backgroundColor,style:[_Marker.default.ripple,{height:markerSize*2.33,width:markerSize*2.33,borderRadius:markerSize*1.67},{backgroundColor:backgroundColorHover}],rippleContainerBorderRadius:100,__source:{fileName:_jsxFileName,lineNumber:42}},_react.default.createElement(_reactNative.View,{style:[{backgroundColor:backgroundColor,height:markerSize,width:markerSize,borderRadius:markerSize},disabled&&_Marker.default.disabled],__source:{fileName:_jsxFileName,lineNumber:54}})));}}]);return Marker;}(_react.Component);(0,_defineProperty2.default)(Marker,"propTypes",{pressed:_propTypes.default.bool,disabled:_propTypes.default.bool,color:_propTypes.default.string,theme:_propTypes.default.object,onPress:_propTypes.default.func,markerSize:_propTypes.default.number});var _default=(0,_withTheme.default)(Marker);exports.default=_default;