var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Backdrop=_interopRequireDefault(require("./Backdrop.styles"));var _HeaderButton=_interopRequireDefault(require("./HeaderButton/HeaderButton"));var _FrontLayer=_interopRequireDefault(require("./FrontLayer/FrontLayer"));var _BackLayer=_interopRequireDefault(require("./BackLayer/BackLayer"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Backdrop/Backdrop.js";var Backdrop=function(_PureComponent){(0,_inherits2.default)(Backdrop,_PureComponent);function Backdrop(props){var _this;(0,_classCallCheck2.default)(this,Backdrop);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Backdrop).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"animate",new _reactNative.Animated.Value(0));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"internalAnimate",new _reactNative.Animated.Value(0));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"internalOffsetAnimate",new _reactNative.Animated.Value(0));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"isInternalAnimate",false);var window=_reactNative.Dimensions.get('window');_this.state={window:window,backConcealed:true,backRevealed:false,iconName:'menu'};return _this;}(0,_createClass2.default)(Backdrop,[{key:"toggleLayout",value:function toggleLayout(){var _this2=this;var backConcealed=this.state.backConcealed;if(backConcealed){this.setState({backRevealed:true,iconName:'close'});}else{this.setState({backConcealed:true,iconName:'menu'});}this.isInternalAnimate=false;_reactNative.Animated.timing(this.animate,{toValue:backConcealed?1:0,duration:196,easing:_reactNative.Easing.ease}).start(function(){if(backConcealed){_this2.setState({backConcealed:false});}else{_this2.setState({backRevealed:false});}});}},{key:"render",value:function render(){var _this3=this;var _this$props=this.props,backLayerStyle=_this$props.backLayerStyle,headerButtonStyle=_this$props.headerButtonStyle,frontLayerStyle=_this$props.frontLayerStyle,children=_this$props.children,initialOffset=_this$props.initialOffset,offset=_this$props.offset,backLayerRevealed=_this$props.backLayerRevealed,backLayerConcealed=_this$props.backLayerConcealed,theme=_this$props.theme,subheader=_this$props.subheader,testID=_this$props.testID;var _this$state=this.state,backConcealed=_this$state.backConcealed,backRevealed=_this$state.backRevealed,window=_this$state.window,iconName=_this$state.iconName;return _react.default.createElement(_reactNative.SafeAreaView,{style:[_Backdrop.default.backLayerContainer,{backgroundColor:theme.primary.main},backLayerStyle],testID:testID,__source:{fileName:_jsxFileName,lineNumber:90}},_react.default.createElement(_BackLayer.default,{backLayerConcealed:backLayerConcealed,animate:this.animate,internalAnimate:this.internalAnimate,backConcealed:backConcealed,backLayerRevealed:backLayerRevealed,backRevealed:backRevealed,__source:{fileName:_jsxFileName,lineNumber:97}}),_react.default.createElement(_FrontLayer.default,{toggleLayout:function toggleLayout(){return _this3.toggleLayout();},animate:this.animate,frontLayerStyle:frontLayerStyle,initialOffset:initialOffset,window:window,offset:offset,backRevealed:backRevealed,backLayerRevealed:backLayerRevealed,internalOffsetAnimate:this.internalOffsetAnimate,isInternalAnimate:this.isInternalAnimate,subheader:subheader,__source:{fileName:_jsxFileName,lineNumber:105}},children),_react.default.createElement(_HeaderButton.default,{backConcealed:backConcealed,headerButtonStyle:headerButtonStyle,toggleLayout:function toggleLayout(){return _this3.toggleLayout();},iconName:iconName,__source:{fileName:_jsxFileName,lineNumber:119}}));}}]);return Backdrop;}(_react.PureComponent);(0,_defineProperty2.default)(Backdrop,"propTypes",{backLayerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),frontLayerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),headerButtonStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),backLayerConcealed:_propTypes.default.node,offset:_propTypes.default.number,initialOffset:_propTypes.default.number,children:_propTypes.default.node,backLayerRevealed:_propTypes.default.node,theme:_propTypes.default.object,subheader:_propTypes.default.string,testID:_propTypes.default.string});(0,_defineProperty2.default)(Backdrop,"defaultProps",{initialOffset:56,buttonRippleColor:'rgba(255,255,255,0.3)'});var _default=(0,_withTheme.default)(Backdrop);exports.default=_default;