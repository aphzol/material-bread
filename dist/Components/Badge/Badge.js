var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Ripple=_interopRequireDefault(require("../Ripple/Ripple"));var _Badge=_interopRequireDefault(require("./Badge.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Badge/Badge.js";var Badge=function(_Component){(0,_inherits2.default)(Badge,_Component);function Badge(props){var _this;(0,_classCallCheck2.default)(this,Badge);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Badge).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{childrenWidth:0,childrenHeight:0,scale:new _reactNative.Animated.Value(0)});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onChildrenLayout",function(e){var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;_this.setState({childrenWidth:width,childrenHeight:height});});return _this;}(0,_createClass2.default)(Badge,[{key:"componentDidMount",value:function componentDidMount(){var visible=this.props.visible;if(visible){this._animateBadge();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var visible=this.props.visible;if(visible!=prevProps.visible){this._animateBadge();}}},{key:"getFontSize",value:function getFontSize(content,maxed){var size=this.props.size;var scaleFactor=0.5;if(content&&String(content).length>3&&!maxed){scaleFactor=0.3;}return size*scaleFactor;}},{key:"getBadgeWidth",value:function getBadgeWidth(content){var size=this.props.size;var isLong=String(content).length>3;var scaleFactor=isLong?1.75:1.5;return scaleFactor*size;}},{key:"_animateBadge",value:function _animateBadge(){var visible=this.props.visible;var scale=this.state.scale;var scaleValue=visible?1:0;_reactNative.Animated.spring(scale,{toValue:scaleValue,speed:7}).start();}},{key:"_renderBadge",value:function _renderBadge(){var _this$props=this.props,size=_this$props.size,textColor=_this$props.textColor,color=_this$props.color,style=_this$props.style,theme=_this$props.theme,children=_this$props.children,content=_this$props.content,position=_this$props.position,right=_this$props.right,left=_this$props.left,top=_this$props.top,_this$props$maxValue=_this$props.maxValue,maxValue=_this$props$maxValue===void 0?0:_this$props$maxValue,rest=(0,_objectWithoutProperties2.default)(_this$props,["size","textColor","color","style","theme","children","content","position","right","left","top","maxValue"]);var positionStyle={right:children?0:'auto'};if(position==='left'){positionStyle={left:children?0:'auto'};}if(right)positionStyle.right=right;if(left)positionStyle.left=left;var maxedContent=parseInt(content,10);var maxed=!isNaN(maxedContent)&&maxValue&&maxedContent>maxValue;maxedContent=maxed?maxValue+"+":content;return _react.default.createElement(_reactNative.Animated.View,(0,_extends2.default)({useNativeDriver:false,style:[{height:size,width:maxed?this.getBadgeWidth(maxedContent):size,borderRadius:size,backgroundColor:color?color:theme.primary.main,alignItems:'center',justifyContent:'center',position:children?'absolute':'relative',top:top?top:0,transform:[{scale:this.state.scale}]},positionStyle,style],numberOfLines:1},rest,{__source:{fileName:_jsxFileName,lineNumber:136}}),_react.default.createElement(_reactNative.Text,{style:[_Badge.default.content,{fontSize:this.getFontSize(maxedContent,maxed),color:textColor?textColor:'white'}],__source:{fileName:_jsxFileName,lineNumber:156}},maxedContent));}},{key:"render",value:function render(){var _this$props2=this.props,children=_this$props2.children,containerStyle=_this$props2.containerStyle,onPress=_this$props2.onPress,testID=_this$props2.testID;var _this$state=this.state,childrenHeight=_this$state.childrenHeight,childrenWidth=_this$state.childrenWidth;return _react.default.createElement(_reactNative.View,{style:[{position:'relative',alignSelf:'flex-start',alignItems:'flex-start',height:children?childrenHeight:'auto',width:children?childrenWidth:'auto',maxHeight:children?childrenHeight:'auto',maxWidth:children?childrenWidth:'auto',minHeight:children?childrenHeight:'auto',minWidth:children?childrenWidth:'auto'},containerStyle],testID:testID,__source:{fileName:_jsxFileName,lineNumber:175}},_react.default.createElement(_reactNative.View,{onLayout:this.onChildrenLayout,__source:{fileName:_jsxFileName,lineNumber:191}},children),onPress?_react.default.createElement(_Ripple.default,{onPress:true,__source:{fileName:_jsxFileName,lineNumber:193}},this._renderBadge()):this._renderBadge());}}]);return Badge;}(_react.Component);(0,_defineProperty2.default)(Badge,"propTypes",{color:_propTypes.default.string,textColor:_propTypes.default.string,content:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.number]),maxValue:_propTypes.default.number,children:_propTypes.default.node,size:_propTypes.default.number,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),position:_propTypes.default.string,onPress:_propTypes.default.func,theme:_propTypes.default.object,containerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),right:_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]),left:_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]),top:_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]),visible:_propTypes.default.bool,testID:_propTypes.default.string});(0,_defineProperty2.default)(Badge,"defaultProps",{position:'right',size:16,right:0,left:'auto',visible:true});var _default=(0,_withTheme.default)(Badge);exports.default=_default;