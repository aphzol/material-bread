var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _Portal=_interopRequireDefault(require("./Portal"));var ariaAppHider=_interopRequireWildcard(require("./ariaAppHider"));var _utils=require("./utils");var _ModalMenu=_interopRequireDefault(require("./ModalMenu.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Menu/ModalMenu/index.web.js";var ariaHiddenInstances=0;var Modal=function(_Component){(0,_inherits2.default)(Modal,_Component);(0,_createClass2.default)(Modal,null,[{key:"setAppElement",value:function setAppElement(element){ariaAppHider.setElement(element);}}]);function Modal(props){var _this;(0,_classCallCheck2.default)(this,Modal);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Modal).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"animateFadeIn",function(callback){if(_this.state.animationFade){_this.state.animationFade.stop();}var animationFade=_reactNative.Animated.timing(_this.state.opacityFade,{toValue:1,duration:300});_this.setState({animationFade:animationFade},function(){requestAnimationFrame(function(){_this.setState({styleFade:{display:'flex'}},function(){return _this.state.animationFade.start(callback);});});});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"animateFadeOut",function(callback){if(_this.state.animationFade){_this.state.animationFade.stop();}var animationFade=_reactNative.Animated.timing(_this.state.opacityFade,{toValue:0,duration:300});_this.setState({animationFade:animationFade},function(){requestAnimationFrame(function(){_this.state.animationFade.start(function(){_this.setState({styleFade:{display:'none'}},callback);});});});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"animateSlideIn",function(callback){if(_this.state.animationSlide){_this.state.animationSlide.stop();}var animationSlide=_reactNative.Animated.timing(_this.state.slideTranslation,{toValue:1,easing:_reactNative.Easing.out(_reactNative.Easing.poly(4)),duration:300});_this.setState({animationSlide:animationSlide},function(){requestAnimationFrame(function(){_this.setState({styleFade:{display:'flex'}},function(){return _this.state.animationSlide.start(callback);});});});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"animateSlideOut",function(callback){if(_this.state.animationSlide){_this.state.animationSlide.stop();}var animationSlide=_reactNative.Animated.timing(_this.state.slideTranslation,{toValue:0,easing:_reactNative.Easing.in(_reactNative.Easing.poly(4)),duration:300});_this.setState({animationSlide:animationSlide},function(){requestAnimationFrame(function(){_this.state.animationSlide.start(function(){_this.setState({styleFade:{display:'none'}},callback);});});});});_this.state={animationSlide:null,animationFade:null,styleFade:{display:props.visible?'flex':'none'},opacityFade:new _reactNative.Animated.Value(0),slideTranslation:new _reactNative.Animated.Value(0)};return _this;}(0,_createClass2.default)(Modal,[{key:"componentDidMount",value:function componentDidMount(){if(this.props.visible)this.handleShow();}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.visible&&!this.props.visible)this.handleShow();if(!prevProps.visible&&this.props.visible)this.handleClose();}},{key:"handleShow",value:function handleShow(){var _this$props=this.props,animationType=_this$props.animationType,onShow=_this$props.onShow,ariaHideApp=_this$props.ariaHideApp,appElement=_this$props.appElement;if(ariaHideApp){ariaHiddenInstances+=1;ariaAppHider.hide(appElement);}if(animationType==='slide'){this.animateSlideIn(onShow);}else if(animationType==='fade'){this.animateFadeIn(onShow);}else{onShow();}}},{key:"handleClose",value:function handleClose(){var _this$props2=this.props,animationType=_this$props2.animationType,onDismiss=_this$props2.onDismiss,ariaHideApp=_this$props2.ariaHideApp,appElement=_this$props2.appElement;if(animationType==='slide'){this.animateSlideOut(onDismiss);}else if(animationType==='fade'){this.animateFadeOut(onDismiss);}else{onDismiss();}if(ariaHideApp&&ariaHiddenInstances>0){ariaHiddenInstances-=1;if(ariaHiddenInstances===0){ariaAppHider.show(appElement);}}}},{key:"getAnimationStyle",value:function getAnimationStyle(){var _this$props3=this.props,visible=_this$props3.visible,animationType=_this$props3.animationType;var styleFade=this.state.styleFade;if(animationType==='slide'){return[{transform:[{translateY:this.state.slideTranslation.interpolate({inputRange:[0,1],outputRange:[_reactNative.Dimensions.get('window').height,0],extrapolate:'clamp'})}]},styleFade];}if(animationType==='fade'){return[{opacity:this.state.opacityFade},styleFade];}return[_ModalMenu.default[visible?'visible':'hidden']];}},{key:"render",value:function render(){var _this$props4=this.props,containerStyle=_this$props4.containerStyle,onBackdropPress=_this$props4.onBackdropPress,children=_this$props4.children,visible=_this$props4.visible,onLayout=_this$props4.onLayout,noBackDrop=_this$props4.noBackDrop;return _react.default.createElement(_Portal.default,{visible:visible,__source:{fileName:_jsxFileName,lineNumber:261}},_react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,onLayout:onLayout,"aria-modal":"true",style:[_ModalMenu.default.container,{height:'100%',width:'100%',zIndex:visible?10:-10},containerStyle],__source:{fileName:_jsxFileName,lineNumber:262}},noBackDrop?null:_react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onBackdropPress,__source:{fileName:_jsxFileName,lineNumber:276}},_react.default.createElement(_reactNative.View,{style:{height:visible?'100%':0,width:visible?'100%':0,position:'fixed',top:0,zIndex:visible?10:-10},__source:{fileName:_jsxFileName,lineNumber:277}})),children));}}]);return Modal;}(_react.Component);exports.default=Modal;(0,_defineProperty2.default)(Modal,"propTypes",{animationType:_propTypes.default.oneOf(['none','slide','fade']),transparent:_propTypes.default.bool,visible:_propTypes.default.bool,onRequestClose:_reactNative.Platform.isTV||_reactNative.Platform.OS==='android'?_propTypes.default.func.isRequired:_propTypes.default.func,onShow:_propTypes.default.func,onDismiss:_propTypes.default.func,children:_propTypes.default.node.isRequired,ariaHideApp:_propTypes.default.bool,appElement:_propTypes.default.instanceOf(_utils.SafeHTMLElement),containerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),onBackdropPress:_propTypes.default.func,onLayout:_propTypes.default.func,noBackDrop:_propTypes.default.bool});(0,_defineProperty2.default)(Modal,"defaultProps",{animationType:'none',transparent:false,visible:true,onShow:function onShow(){},onRequestClose:function onRequestClose(){},onDismiss:function onDismiss(){},ariaHideApp:true,appElement:null});