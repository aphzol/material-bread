var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _=require("../../");var _AppbarBottom=_interopRequireDefault(require("./AppbarBottom.styles"));var _AppbarBottomSvg=_interopRequireDefault(require("./AppbarBottom.svg.js"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/AppbarBottom/AppbarBottom.js";var AppbarBottom=function(_Component){(0,_inherits2.default)(AppbarBottom,_Component);function AppbarBottom(props){var _this;(0,_classCallCheck2.default)(this,AppbarBottom);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(AppbarBottom).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{appbarWidth:0,appbarHeight:0});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"measureAppbar",function(e){var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;_this.setState({appbarWidth:width,appbarHeight:height});});return _this;}(0,_createClass2.default)(AppbarBottom,[{key:"_renderNavigation",value:function _renderNavigation(){var _this$props=this.props,navigation=_this$props.navigation,onNavigation=_this$props.onNavigation,fabPosition=_this$props.fabPosition;if(typeof navigation==='string'||navigation instanceof String){return _react.default.createElement(_.IconButton,{name:navigation||'menu',size:24,color:'white',onPress:onNavigation,style:{marginRight:fabPosition==='end'?24:0},__source:{fileName:_jsxFileName,lineNumber:42}});}else{return navigation;}}},{key:"_renderFab",value:function _renderFab(){var _this$props2=this.props,fab=_this$props2.fab,fabPosition=_this$props2.fabPosition,fabCutout=_this$props2.fabCutout;if(!fab)return null;var isEnd=fabPosition==='end';var cutOutPadding=fabCutout?18:16;var fabRightStyle={right:cutOutPadding};var fabCenterStyle={right:'auto'};var fabPosStyles=isEnd?fabRightStyle:fabCenterStyle;var isFabSpeedial=fab&&fab.props&&fab.props.actions;return _react.default.cloneElement(fab,{shadow:fabCutout?8:6,style:[_AppbarBottom.default.fabPos,fabPosStyles],containerStyle:{position:'absolute',width:'100%',paddingRight:isFabSpeedial&&isEnd?cutOutPadding:0,transform:[{translateY:-29}]}});}},{key:"_renderCutout",value:function _renderCutout(){var _this$props3=this.props,fabCutout=_this$props3.fabCutout,fabPosition=_this$props3.fabPosition,color=_this$props3.color,theme=_this$props3.theme;var backgroundColor=color?color:theme.primary.main;if(!fabCutout)return null;return _react.default.createElement(_AppbarBottomSvg.default,{fabPosition:fabPosition,paddingHorizontal:32,backgroundColor:backgroundColor,width:this.state.appbarWidth,__source:{fileName:_jsxFileName,lineNumber:90}});}},{key:"_renderActionItems",value:function _renderActionItems(){var actionItems=this.props.actionItems;if(!actionItems)return null;return _react.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:103}},actionItems.map(function(item,index){if(item.name){return _react.default.createElement(_.IconButton,{key:item.name,name:item.name,size:24,color:'white',style:{marginRight:index+1===actionItems.length?0:16},onPress:item.onPress,__source:{fileName:_jsxFileName,lineNumber:107}});}else{return item;}}));}},{key:"_renderAppBarContent",value:function _renderAppBarContent(){return _react.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:128}},this._renderNavigation(),_react.default.createElement(_reactNative.View,{style:_AppbarBottom.default.right,__source:{fileName:_jsxFileName,lineNumber:131}},this._renderActionItems()));}},{key:"render",value:function render(){var _this$props4=this.props,color=_this$props4.color,children=_this$props4.children,style=_this$props4.style,appbarStyles=_this$props4.appbarStyles,fabPosition=_this$props4.fabPosition,theme=_this$props4.theme,fabCutout=_this$props4.fabCutout,rest=(0,_objectWithoutProperties2.default)(_this$props4,["color","children","style","appbarStyles","fabPosition","theme","fabCutout"]);var appbarWidth=this.state.appbarWidth;var backgroundColor=color?color:theme.primary.main;return _react.default.createElement(_reactNative.View,{style:style,__source:{fileName:_jsxFileName,lineNumber:160}},_react.default.createElement(_reactNative.View,{style:[_AppbarBottom.default.contianer,{opacity:appbarWidth==0?0:1}],onLayout:this.measureAppbar,__source:{fileName:_jsxFileName,lineNumber:161}},this._renderCutout(),_react.default.createElement(_reactNative.View,(0,_extends2.default)({style:[_AppbarBottom.default.appbar,{justifyContent:fabPosition==='end'?'flex-start':'space-between',backgroundColor:!fabCutout?backgroundColor:'transparent'},appbarStyles]},rest,{__source:{fileName:_jsxFileName,lineNumber:165}}),children?children:this._renderAppBarContent())),this._renderFab());}}]);return AppbarBottom;}(_react.Component);(0,_defineProperty2.default)(AppbarBottom,"propTypes",{color:_propTypes.default.string,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),theme:_propTypes.default.object,fab:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.string]),fabPosition:_propTypes.default.string,fabCutout:_propTypes.default.bool,navigation:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.string]),onNavigation:_propTypes.default.func,actionItems:_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.array]),children:_propTypes.default.node,appbarStyles:_propTypes.default.object});var _default=(0,_withTheme.default)(AppbarBottom);exports.default=_default;