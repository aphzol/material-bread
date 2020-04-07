var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _shadow=_interopRequireDefault(require("../../Utils/Shadow/shadow.js"));var _Button=_interopRequireDefault(require("../Button/Button"));var _=require("../../");var _Banner=_interopRequireDefault(require("./Banner.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Banner/Banner.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Banner=function(_Component){(0,_inherits2.default)(Banner,_Component);function Banner(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,Banner);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Banner)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{isWideScreen:false,width:0,maxHeight:0,height:new _reactNative.Animated.Value(10),shouldHide:false});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_handleLayout",function(){var width=_reactNative.Dimensions.get('window').width;if(width==_this.state.width)return;_this.setState({isWideScreen:width>1024,width:width});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_onLayout",function(event){_this.setState({maxHeight:event.nativeEvent.layout.height},function(){if(_this.props.visible)_this.animateBanner(true);});});return _this;}(0,_createClass2.default)(Banner,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){var visible=this.props.visible;var shouldHide=this.state.shouldHide;if(!prevProps.visible&&visible){this.setState({shouldHide:false});this.animateBanner(true);}else if(prevProps.visible&&!visible||!prevState.shouldHide&&shouldHide){this.animateBanner(false);}}},{key:"componentDidMount",value:function componentDidMount(){if(this.props.visible){this.animateBanner(true);}this._handleLayout();_reactNative.Dimensions.addEventListener('change',this._handleLayout);}},{key:"componentWillUnmount",value:function componentWillUnmount(){_reactNative.Dimensions.removeEventListener('change',this._handleLayout);}},{key:"animateBanner",value:function animateBanner(show){var maxHeight=this.state.maxHeight;var newHeight=show?maxHeight:0;_reactNative.Animated.parallel([_reactNative.Animated.spring(this.state.height,{toValue:newHeight})]).start();}},{key:"_renderActionItems",value:function _renderActionItems(){var _this2=this;var actionItems=this.props.actionItems;if(!actionItems)return null;var platformStyles=this.getPlatformStyles();return _react.default.createElement(_reactNative.View,{style:[_Banner.default.buttons,platformStyles.actions],__source:{fileName:_jsxFileName,lineNumber:87}},actionItems.map(function(item){if(item.name&&item.name.length>0){return _react.default.createElement(_Button.default,{key:item.name,text:item.name,compact:true,type:"text",onPress:function onPress(){item.onPress&&item.onPress();_this2.setState({shouldHide:true});},style:[_Banner.default.button],__source:{fileName:_jsxFileName,lineNumber:91}});}else{return null;}}));}},{key:"_renderContent",value:function _renderContent(){var _this$props=this.props,media=_this$props.media,message=_this$props.message;var platformStyles=this.getPlatformStyles();return _react.default.createElement(_reactNative.View,{style:[_Banner.default.content,platformStyles.content],__source:{fileName:_jsxFileName,lineNumber:116}},media?_react.default.createElement(_reactNative.View,{style:platformStyles.image,__source:{fileName:_jsxFileName,lineNumber:117}},media):null,_react.default.createElement(_.BodyText,{type:2,style:{lineHeight:20,maxWidth:460,flexShrink:1},__source:{fileName:_jsxFileName,lineNumber:118}},message));}},{key:"_renderBody",value:function _renderBody(){var getPlatformStyles=this.getPlatformStyles();return _react.default.createElement(_reactNative.View,{style:[_Banner.default.body,getPlatformStyles.body],__source:{fileName:_jsxFileName,lineNumber:134}},this._renderContent(),this._renderActionItems());}},{key:"getPlatformStyles",value:function getPlatformStyles(){var _this$props2=this.props,mobileLayout=_this$props2.mobileLayout,media=_this$props2.media,singleLine=_this$props2.singleLine;var _this$state=this.state,isWideScreen=_this$state.isWideScreen,width=_this$state.width;var isWeb=_reactNative.Platform.OS=='web';var styles={body:{alignItems:singleLine?'center':'flex-start',justifyContent:singleLine?'space-between':'space-between',marginTop:singleLine?8:24,marginLeft:16,flexDirection:singleLine?'row':'column'},content:{marginBottom:8,marginRight:width<400?8:0},actions:{justifyContent:singleLine?'center':'flex-end',alignItems:singleLine?'center':'flex-end',alignSelf:singleLine?'center':'flex-end',marginRight:8},image:{marginRight:16}};if(isWeb&&isWideScreen&&!mobileLayout){styles={body:{alignItems:singleLine?'center':'flex-start',justifyContent:singleLine?'space-between':'space-between',marginTop:singleLine?8:16,marginLeft:media?16:24,flexDirection:'row'},content:{marginBottom:singleLine?8:16},actions:{justifyContent:singleLine?'center':'flex-end',alignItems:singleLine?'center':'flex-end',alignSelf:singleLine?'center':'flex-end'},image:{marginRight:24}};}return styles;}},{key:"render",value:function render(){var _this$props3=this.props,style=_this$props3.style,position=_this$props3.position,visible=_this$props3.visible,testID=_this$props3.testID;var shouldHide=this.state.shouldHide;var appliedShadow=visible&&!shouldHide?1:0;return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:false,style:[_Banner.default.container,_objectSpread({position:position?position:'relative',height:this.state.height},(0,_shadow.default)(appliedShadow)),style],testID:testID,__source:{fileName:_jsxFileName,lineNumber:211}},_react.default.createElement(_reactNative.View,{onLayout:this._onLayout,__source:{fileName:_jsxFileName,lineNumber:223}},this._renderBody()));}}]);return Banner;}(_react.Component);(0,_defineProperty2.default)(Banner,"propTypes",{mobileLayout:_propTypes.default.bool,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),actionItems:_propTypes.default.array,singleLine:_propTypes.default.bool,media:_propTypes.default.node,visible:_propTypes.default.bool,message:_propTypes.default.string,position:_propTypes.default.string,testID:_propTypes.default.string});var _default=(0,_withTheme.default)(Banner);exports.default=_default;