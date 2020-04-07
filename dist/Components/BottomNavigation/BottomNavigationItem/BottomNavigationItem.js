var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Icon=_interopRequireDefault(require("../../Icon/Icon"));var _Ripple=_interopRequireDefault(require("../../Ripple/Ripple"));var _Badge=_interopRequireDefault(require("../../Badge/Badge"));var _BottomNavigation=require("../BottomNavigation");var _BottomNavigationItem=_interopRequireDefault(require("./BottomNavigationItem.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/BottomNavigation/BottomNavigationItem/BottomNavigationItem.js";var BottomNavigationItem=function(_Component){(0,_inherits2.default)(BottomNavigationItem,_Component);function BottomNavigationItem(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,BottomNavigationItem);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(BottomNavigationItem)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{scaleText:new _reactNative.Animated.Value(0)});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onChange",function(){var _this$props=_this.props,handleChange=_this$props.handleChange,onPress=_this$props.onPress,value=_this$props.value;if(handleChange)handleChange(value);if(onPress)onPress();});return _this;}(0,_createClass2.default)(BottomNavigationItem,[{key:"componentDidMount",value:function componentDidMount(){var _this$props2=this.props,showLabel=_this$props2.showLabel,showLabels=_this$props2.showLabels,active=_this$props2.active;if(showLabel||active||showLabels){this._animateActive(true);}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(!prevProps.active&&this.props.active){this._animateActive(true);}else if(prevProps.active&&!this.props.active){this._animateActive(false);}}},{key:"_animateActive",value:function _animateActive(show){var scaleText=this.state.scaleText;var scale=show?14:0;if(this.props.showLabels||this.props.showLabel){scale=show?14:12;}_reactNative.Animated.parallel([_reactNative.Animated.timing(scaleText,{toValue:scale,duration:150})]).start();}},{key:"_renderText",value:function _renderText(containerColor){var _this$props3=this.props,isLandscape=_this$props3.isLandscape,horizontal=_this$props3.horizontal,showLabel=_this$props3.showLabel,showLabels=_this$props3.showLabels,active=_this$props3.active,icon=_this$props3.icon;var isHorizontal=isLandscape&&horizontal;var isLabelShown=showLabel||showLabels||active;var color='white';if(containerColor=='white'||containerColor=='#fff')color='#2196f3';var label=this.props.label;return _react.default.createElement(_reactNative.Animated.Text,{useNativeDriver:false,style:{color:color,fontSize:this.state.scaleText,marginLeft:isHorizontal&&isLabelShown&&icon?12:0},__source:{fileName:_jsxFileName,lineNumber:86}},label);}},{key:"_handleIconColor",value:function _handleIconColor(containerColor){if(containerColor=='white'||containerColor=='#fff'){return'#2196f3';}else{return'white';}}},{key:"_renderWrapper",value:function _renderWrapper(context){var _this$props4=this.props,active=_this$props4.active,children=_this$props4.children,style=_this$props4.style,testID=_this$props4.testID,rippleProps=_this$props4.rippleProps,isLandscape=_this$props4.isLandscape,maxWidth=_this$props4.maxWidth,horizontal=_this$props4.horizontal;var actualMaxWidth=Math.min(maxWidth,168);return _react.default.createElement(_Ripple.default,(0,_extends2.default)({style:[_BottomNavigationItem.default.bottomNavigationItem,{opacity:active?1:0.6},isLandscape&&!horizontal&&[_BottomNavigationItem.default.bottomNavigationItemLandscape,{maxWidth:actualMaxWidth}],isLandscape&&horizontal&&{flexDirection:'row',paddingHorizontal:12},style],onPress:this.onChange,testID:testID},rippleProps,{__source:{fileName:_jsxFileName,lineNumber:128}}),children?children:this._renderContent(context));}},{key:"_renderContent",value:function _renderContent(context){var _this$props5=this.props,label=_this$props5.label,badgeProps=_this$props5.badgeProps,icon=_this$props5.icon;var iconImplemented=this._renderIcon(context);if(badgeProps){iconImplemented=_react.default.createElement(_Badge.default,(0,_extends2.default)({containerStyle:{alignItems:'center',justifyContent:'center',alignSelf:'center',display:'flex'},style:[{right:badgeProps.right?badgeProps.right:-5,top:badgeProps.top?badgeProps.top:-5}]},badgeProps,{__source:{fileName:_jsxFileName,lineNumber:158}}),this._renderIcon(context));}return _react.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:177}},icon?iconImplemented:null,label?this._renderText(context.backgroundColor):null);}},{key:"_renderIcon",value:function _renderIcon(context){var icon=this.props.icon;return _react.default.createElement(_Icon.default,{name:icon,size:24,color:this._handleIconColor(context.backgroundColor),__source:{fileName:_jsxFileName,lineNumber:187}});}},{key:"render",value:function render(){var _this2=this;return _react.default.createElement(_BottomNavigation.BottomNavContext.Consumer,{__source:{fileName:_jsxFileName,lineNumber:197}},function(context){return _this2._renderWrapper(context);});}}]);return BottomNavigationItem;}(_react.Component);(0,_defineProperty2.default)(BottomNavigationItem,"propTypes",{children:_propTypes.default.node,active:_propTypes.default.bool,icon:_propTypes.default.string,label:_propTypes.default.string,showLabel:_propTypes.default.bool,onPress:_propTypes.default.func,handleChange:_propTypes.default.func,value:_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]),showLabels:_propTypes.default.bool,style:_propTypes.default.oneOfType([_propTypes.default.array,_propTypes.default.object]),badgeProps:_propTypes.default.object,rippleProps:_propTypes.default.object,testID:_propTypes.default.string,isLandscape:_propTypes.default.bool,onItemLayout:_propTypes.default.func,maxWidth:_propTypes.default.number,horizontal:_propTypes.default.bool});var _default=(0,_withTheme.default)(BottomNavigationItem);exports.default=_default;