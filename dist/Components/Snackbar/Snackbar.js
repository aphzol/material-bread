var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _Button=_interopRequireDefault(require("../Button/Button"));var _Paper=_interopRequireDefault(require("../Paper/Paper"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Snackbar=_interopRequireDefault(require("./Snackbar.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Snackbar/Snackbar.js";var Snackbar=function(_Component){(0,_inherits2.default)(Snackbar,_Component);function Snackbar(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,Snackbar);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Snackbar)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{scaleAnimation:new _reactNative.Animated.Value(0.8),opacity:new _reactNative.Animated.Value(0)});return _this;}(0,_createClass2.default)(Snackbar,[{key:"componentDidMount",value:function componentDidMount(){var visible=this.props.visible;if(visible)this.show();}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var visible=this.props.visible;if(visible&&!prevProps.visible){this.show();}else if(!visible&&prevProps.visible){this.hide();}}},{key:"show",value:function show(){var _this$state=this.state,opacity=_this$state.opacity,scaleAnimation=_this$state.scaleAnimation;var animationDuration=this.props.animationDuration;this.setState({show:false});_reactNative.Animated.parallel([_reactNative.Animated.timing(scaleAnimation,{toValue:1,duration:animationDuration}),_reactNative.Animated.timing(opacity,{toValue:1,duration:animationDuration})]).start();}},{key:"hide",value:function hide(){var _this$state2=this.state,opacity=_this$state2.opacity,scaleAnimation=_this$state2.scaleAnimation;var animationDuration=this.props.animationDuration;_reactNative.Animated.parallel([_reactNative.Animated.timing(scaleAnimation,{toValue:0.8,duration:animationDuration}),_reactNative.Animated.timing(opacity,{toValue:0,duration:animationDuration})]).start();}},{key:"_renderButton",value:function _renderButton(){var _this$props=this.props,buttonLabel=_this$props.buttonLabel,buttonTextColor=_this$props.buttonTextColor,onButtonPress=_this$props.onButtonPress;if(buttonLabel){return _react.default.createElement(_Button.default,{onPress:function onPress(){return onButtonPress();},style:{marginHorizontal:8,marginVertical:6},type:"text",text:buttonLabel,textColor:buttonTextColor||null,__source:{fileName:_jsxFileName,lineNumber:88}});}return null;}},{key:"render",value:function render(){var _this$props2=this.props,children=_this$props2.children,style=_this$props2.style,buttonLabel=_this$props2.buttonLabel,visible=_this$props2.visible,testID=_this$props2.testID;var _this$state3=this.state,opacity=_this$state3.opacity,scaleAnimation=_this$state3.scaleAnimation;return _react.default.createElement(_reactNative.View,{style:[_Snackbar.default.container,{zIndex:visible?10:-1}],testID:testID,__source:{fileName:_jsxFileName,lineNumber:105}},_react.default.createElement(_Paper.default,{style:[_Snackbar.default.card,{opacity:opacity,transform:[{scale:scaleAnimation}]},style],__source:{fileName:_jsxFileName,lineNumber:108}},_react.default.createElement(_reactNative.Text,{style:[_Snackbar.default.text,{marginRight:buttonLabel?0:16}],__source:{fileName:_jsxFileName,lineNumber:121}},children),this._renderButton()));}}]);return Snackbar;}(_react.Component);(0,_defineProperty2.default)(Snackbar,"propTypes",{visible:_propTypes.default.bool,animationDuration:_propTypes.default.number,children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),onButtonPress:_propTypes.default.func,buttonLabel:_propTypes.default.string,buttonTextColor:_propTypes.default.string,testID:_propTypes.default.string});(0,_defineProperty2.default)(Snackbar,"defaultProps",{animationDuration:200});var _default=(0,_withTheme.default)(Snackbar);exports.default=_default;