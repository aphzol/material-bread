var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _jsxFileName="/Users/cody/projects/material-bread/src/Utils/Hoverable/Hoverable.js";var Hoverable=function(_Component){(0,_inherits2.default)(Hoverable,_Component);function Hoverable(props){var _this;(0,_classCallCheck2.default)(this,Hoverable);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Hoverable).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{isHovered:false,width:_reactNative.Dimensions.get('window').width});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"handleWindowWidth",function(event){_this.setState({width:event.window.width});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_handleMouseEnter",function(){if(!_this.state.isHovered){var onHoverIn=_this.props.onHoverIn;if(onHoverIn){onHoverIn();}_this.setState(function(){return{isHovered:true};});}});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_handleMouseLeave",function(){if(_this.state.isHovered){var onHoverOut=_this.props.onHoverOut;if(onHoverOut){onHoverOut();}_this.setState(function(){return{isHovered:false};});}});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_toggle",function(){if(_this.state.isHovered){_this._handleMouseLeave();}else{_this._handleMouseEnter();}});return _this;}(0,_createClass2.default)(Hoverable,[{key:"componentDidMount",value:function componentDidMount(){_reactNative.Dimensions.addEventListener('change',this.handleWindowWidth);var width=_reactNative.Dimensions.get('window').width;this.setState({width:width});}},{key:"componentWillUnmount",value:function componentWillUnmount(){_reactNative.Dimensions.removeEventListener('change',this.handleWindowWidth);}},{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,testID=_this$props.testID;var child=typeof children==='function'?children(this.state.isHovered):children;if(_reactNative.Platform.OS=='web'){return _react.default.cloneElement(_react.default.Children.only(child),{onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave});}else{return _react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:this._toggle,testID:testID,__source:{fileName:_jsxFileName,lineNumber:82}},_react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:83}},_react.default.cloneElement(_react.default.Children.only(child),{onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave})));}}}]);return Hoverable;}(_react.Component);(0,_defineProperty2.default)(Hoverable,"displayName",'Hoverable');(0,_defineProperty2.default)(Hoverable,"propTypes",{children:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.func]),onHoverIn:_propTypes.default.func,onHoverOut:_propTypes.default.func,testID:_propTypes.default.string});var _default=Hoverable;exports.default=_default;