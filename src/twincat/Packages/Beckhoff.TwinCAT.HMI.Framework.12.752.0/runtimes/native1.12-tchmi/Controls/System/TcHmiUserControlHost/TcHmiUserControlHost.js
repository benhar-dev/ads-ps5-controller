var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){let Controls;!function(Controls){let System;!function(System){var _a,_TcHmiUserControlHost_tchmiFQN;class TcHmiUserControlHost extends System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__targetUserControlControlObject=null,this.__params=new Map,this.__partialDefaultVirtualRights=new Map,this.__onUserControlChangedEventDestroyEvent=null,this.__onUserControlConfigChangedEventDestroyEvent=null,this.__onUserControlCreatedEventDestroyEvent=null,this.__onUserControlRemovedEventDestroyEvent=null;let targetUserControl=this.__attrs["data-tchmi-target-user-control"];if(!targetUserControl)throw new Error("Required attribute=data-tchmi-target-user-control is missing.");if(this.__targetUserControlUrl=targetUserControl.value,!this.__targetUserControlUrl)throw new Error("Required attribute=data-tchmi-target-user-control has invalid value.");if(this.__targetUserControlUrlClean=tchmi_path(this.__targetUserControlUrl),!this.__targetUserControlUrlClean)throw new Error("Required attribute=data-tchmi-target-user-control has invalid value.");this.__targetUserControlConfigUrl=this.__targetUserControlUrl.replace(".usercontrol",".usercontrol.json"),this.__targetUserControlConfigUrlClean=tchmi_path(this.__targetUserControlConfigUrl),!0===TCHMI_ENGINEERING&&(this.__onUserControlChangedEventDestroyEvent=TcHmi.EventProvider.register("System.onUserControlChanged",this.__onUserControlChanged()),this.__onUserControlConfigChangedEventDestroyEvent=TcHmi.EventProvider.register("System.onUserControlConfigChanged",this.__onUserControlConfigChanged()),this.__onUserControlCreatedEventDestroyEvent=TcHmi.EventProvider.register("System.onUserControlCreated",this.__onUserControlCreated()),this.__onUserControlRemovedEventDestroyEvent=TcHmi.EventProvider.register("System.onUserControlRemoved",this.__onUserControlRemoved()))}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_System_TcHmiUserControlHost-template"),0===this.__elementTemplateRoot.length&&(this.__elementTemplateRoot=this.__element.find(".tchmi-user-control-host-template")),0===this.__elementTemplateRoot.length)throw new Error("Invalid Template.html");this.__processTargetUserControl(),super.__previnit()}__init(){super.__init()}__attach(){super.__attach()}__detach(){super.__detach()}destroy(){if(!this.__keepAlive){if(this.__elementTemplateRoot&&this.__elementTemplateRoot.empty(),this.__targetUserControlControlObject)try{this.__targetUserControlControlObject.destroy(),this.__targetUserControlControlObject=null}catch(e){TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+"] An uncaught exception occurred while destroying existing TargetUserControl instance:\n",e)}!0===TCHMI_ENGINEERING&&(null!==this.__onUserControlChangedEventDestroyEvent&&(this.__onUserControlChangedEventDestroyEvent(),this.__onUserControlChangedEventDestroyEvent=null),null!==this.__onUserControlConfigChangedEventDestroyEvent&&(this.__onUserControlConfigChangedEventDestroyEvent(),this.__onUserControlConfigChangedEventDestroyEvent=null),null!==this.__onUserControlCreatedEventDestroyEvent&&(this.__onUserControlCreatedEventDestroyEvent(),this.__onUserControlCreatedEventDestroyEvent=null),null!==this.__onUserControlRemovedEventDestroyEvent&&(this.__onUserControlRemovedEventDestroyEvent(),this.__onUserControlRemovedEventDestroyEvent=null)),this.__params=new Map,this.__partialDefaultVirtualRights=new Map,super.destroy()}}__setKeepAlive(value){super.__setKeepAlive(value),this.__targetUserControlControlObject&&this.__targetUserControlControlObject.__setKeepAlive(value)}__processTargetUserControl(){if(this.__elementTemplateRoot&&this.__elementTemplateRoot.empty(),this.__targetUserControlControlObject)try{this.__targetUserControlControlObject.destroy(),this.__targetUserControlControlObject=null}catch(e){TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetUserControl] An uncaught exception occurred while destroying existing TargetUserControl instance:\n",e)}let paramsOld=this.__params;this.__params.forEach(param=>{param&&param.descr&&(param.descr.propertyGetterName&&this[param.descr.propertyGetterName]&&delete this[param.descr.propertyGetterName],param.descr.propertySetterName&&this[param.descr.propertySetterName]&&delete this[param.descr.propertySetterName])}),this.__params=new Map,this.__partialDefaultVirtualRights=new Map,this.__config=TcHmi.System.Data.Caches.partialCompositeConfigCache.get(this.__targetUserControlConfigUrlClean);let cacheEntry=TcHmi.System.Data.Caches.partialMarkupCache.get(this.__targetUserControlUrlClean);if(this.__markup=cacheEntry?cacheEntry.markup:void 0,!this.__targetUserControlUrl)return;if(!this.__targetUserControlUrlClean)return;if(!this.__targetUserControlConfigUrl)return;if(!this.__targetUserControlConfigUrlClean)return;if(!this.__markup)return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetUserControl] Required TargetUserControl file="+this.__targetUserControlUrlClean+" is missing."));if(!this.__config)return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetUserControl] Required TargetUserControl configuration file="+this.__targetUserControlConfigUrlClean+" is missing."));if(!1===this.__isRecursionSave(this.__targetUserControlConfigUrlClean))return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetUserControl] Loading file="+this.__targetUserControlUrl+" was blocked to avoid recursion!"));let config=this.__config,markup=this.__markup,tempDiv=document.createElement("div");tempDiv.innerHTML=markup;let rawUserControlPartial=tempDiv.firstElementChild;if(!rawUserControlPartial)return;if("TcHmi.Controls.System.TcHmiUserControl"!==rawUserControlPartial.getAttribute("data-tchmi-type"))return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetUserControl] Wrong type (not TcHmi.Controls.System.TcHmiUserControl)."));if(!rawUserControlPartial.id)return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetUserControl] Root element of file="+this.__targetUserControlUrl+" is missing required attribute=id."));let rawUserControlPartialChildControls=rawUserControlPartial.querySelectorAll("div[data-tchmi-type]"),ucIdArr=[];ucIdArr.push(rawUserControlPartial.id);for(let i=0,ii=rawUserControlPartialChildControls.length;i<ii;i++){let id=rawUserControlPartialChildControls[i].id;ucIdArr.includes(id)||ucIdArr.push(id)}ucIdArr.sort((a,b)=>a&&a.indexOf&&a.indexOf(b)>-1?1:b&&b.indexOf&&b.indexOf(a)>-1?-1:0);const symbolExpressionParser=new TcHmi.System.SymbolExpressionParser(markup);let exprsPP=symbolExpressionParser.resolveExpressionsBySymbolType(TcHmi.SymbolType.PartialParam);if(exprsPP)for(let i=0,ii=exprsPP.length;i<ii;i++){let expr=exprsPP[i];markup=markup.replace(new RegExp(tchmi_escape_regex(""+expr.toString()),"g"),`%pp%${this.__id}::${expr.getContent()}%/pp%`)}let exprsCTRL=symbolExpressionParser.resolveExpressionsBySymbolType(TcHmi.SymbolType.Control);if(null!=exprsCTRL)for(let i=0,ii=exprsCTRL.length;i<ii;i++){let expr=exprsCTRL[i];const exprName=expr.getName();exprName&&ucIdArr.includes(exprName)&&(markup=markup.replace(new RegExp(tchmi_escape_regex(""+expr.toString()),"g"),`%ctrl%${this.__id}.${expr.getContent()}%/ctrl%`))}let regexp="",replaces={};for(let i=0,ii=ucIdArr.length;i<ii;i++){let ucId=ucIdArr[i];ucId&&(replaces['"'+ucId]=`"${this.__id}.${ucId}`,replaces["'"+ucId]=`'${this.__id}.${ucId}`,regexp.length>0&&(regexp+="|"),regexp+=`"${tchmi_escape_regex(ucId)}|'${tchmi_escape_regex(ucId)}`)}if(markup=markup.replace(new RegExp(regexp,"g"),(substring,...args)=>replaces.hasOwnProperty(substring)?replaces[substring]:substring),tempDiv.innerHTML=markup,rawUserControlPartial=tempDiv.firstElementChild,rawUserControlPartial){if(rawUserControlPartial.setAttribute("data-tchmi-partial-url",tchmi_path(this.__targetUserControlUrl)),config&&void 0!==config.parameters){const parameters=config.parameters;for(let i=0,ii=parameters.length;i<ii;i++)this.__registerUserControlParamAttribute(parameters[i],paramsOld?paramsOld.get(parameters[i].name):void 0)}if(config&&void 0!==config.virtualRights)for(let i=0,ii=config.virtualRights.length;i<ii;i++)this.__registerVirtualRight(config.virtualRights[i]);this.__targetUserControlControlObject=TcHmi.System.Services.controlManager.compile(rawUserControlPartial,this),void 0!==this.__targetUserControlControlObject&&null!==this.__targetUserControlControlObject?(this.__keepAlive&&this.__targetUserControlControlObject.__setKeepAlive(!0),"Content"===this.getWidthMode()&&this.__processWidth(),"Content"===this.getHeightMode()&&this.__processHeight(),this.__elementTemplateRoot[0].appendChild(this.__targetUserControlControlObject.getElement()[0])):this.__targetUserControlControlObject=null}}__registerUserControlParamAttribute(descr,paramOld){let __this=this,attrName=descr.name,pp={descr:null,value:null};this.__params.set(attrName,pp);let schema=TcHmi.Type.getSchema(descr.type);schema||TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+", Parameter="+attrName+"] Attribute uses invalid data type: "+descr.type);let ppOld=paramOld||null,fnSetter=function(valueNew,dirtyPaths){tchmi_equal(pp.value,valueNew)||(pp.value=valueNew,TcHmi.EventProvider.raise(__this.__id+".onPropertyChanged",{propertyName:descr.propertyName,dirtyPaths:dirtyPaths}))},fnGetter=function(){return pp.value},attrValue=null;if(void 0!==this.__attrs&&null!==this.__attrs){let attr=this.__attrs[descr.name];attr&&(attrValue=TcHmi.ValueConverter.toSchemaType(attr.value,schema),null===attrValue&&(attrValue=attr.value))}if(pp.descr=descr,void 0!==descr.defaultValueInternal?pp.value=descr.defaultValueInternal:schema&&(pp.value=TcHmi.Type.Schema.resolveDefault(schema)),descr.propertySetterName){if(this[descr.propertySetterName])return TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+", Parameter="+attrName+"] Name of setter: '"+descr.propertySetterName+"' is already in use. Parameter won't be available for further use."),void this.__params.delete(attrName);this[descr.propertySetterName]=fnSetter}else;if(this[descr.propertyGetterName])return TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN):"")+", Id="+this.getId()+", Parameter="+attrName+"] Name of getter: '"+descr.propertyGetterName+"' is already in use. Parameter won't be available for further use."),descr.propertySetterName&&delete this[descr.propertySetterName],void this.__params.delete(attrName);if(this[descr.propertyGetterName]=fnGetter,ppOld)fnSetter(ppOld.value);else{let isSymbolExpression=TcHmi.Symbol.isSymbolExpression(attrValue),isSymbolExpressionEscaped=TcHmi.Symbol.isSymbolExpression(attrValue);null!=attrValue&&(isSymbolExpression?isSymbolExpressionEscaped&&fnSetter(TcHmi.Symbol.escapeSymbolExpression(attrValue)):fnSetter(attrValue))}}__registerVirtualRight(virtualRight){!0!==virtualRight.defaultValueInternal&&!1!==virtualRight.defaultValueInternal||this.__partialDefaultVirtualRights.set(virtualRight.name,virtualRight)}__isRecursionSave(path){let tempParent=this.__parent;for(;null!==tempParent;){if(tempParent.getType()===__classPrivateFieldGet(TcHmiUserControlHost,_a,"f",_TcHmiUserControlHost_tchmiFQN)&&void 0!==tempParent.getTargetUserControl&&tchmi_path(tempParent.getTargetUserControl())===path)return!1;tempParent=tempParent.getParent()}return!0}__refreshTargetPartial(){var _b;this.__isDestroyed||(null===(_b=this.__targetUserControlControlObject)||void 0===_b||_b.__setKeepAlive(!1),this.__processTargetUserControl())}__onUserControlChanged(){return(evt,data)=>{data.url&&data.url===this.__targetUserControlUrlClean&&data.content&&this.__markup&&data.content!==this.__markup&&this.__refreshTargetPartial()}}__onUserControlConfigChanged(){return(evt,data)=>{data.url&&data.url===this.__targetUserControlConfigUrlClean&&this.__refreshTargetPartial()}}__onUserControlCreated(){return(evt,data)=>{data.url&&data.url===this.__targetUserControlUrlClean&&this.__refreshTargetPartial()}}__onUserControlRemoved(){return(evt,data)=>{data.url&&data.url===this.__targetUserControlUrlClean&&this.__refreshTargetPartial()}}getTargetUserControl(){return this.__targetUserControlUrl}setWidthMode(valueNew){let convertedValue=TcHmi.ValueConverter.toSizeModeWithContent(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("WidthMode")),convertedValue!==this.__widthMode&&(this.__widthMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"WidthMode"}),this.__processWidthMode())}__processWidth(callerControl){if("Content"===this.getWidthMode()){let newWidthStr="";if(null!==this.__targetUserControlControlObject){const contentPixelSize=this.__targetUserControlControlObject.__getContentWidth();null!==contentPixelSize&&(newWidthStr=contentPixelSize+"px"),callerControl&&this.__targetUserControlControlObject===callerControl||"Content"!==this.__targetUserControlControlObject.getWidthMode()||this.__targetUserControlControlObject.__processWidth(this)}TcHmi.StyleProvider.setSimpleElementStyle(this.__element,"width",newWidthStr)}super.__processWidth(callerControl)}setHeightMode(valueNew){let convertedValue=TcHmi.ValueConverter.toSizeModeWithContent(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("HeightMode")),convertedValue!==this.__heightMode&&(this.__heightMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"HeightMode"}),this.__processHeightMode())}__processHeight(callerControl){if("Content"===this.getHeightMode()&&(this.__intHeight=null,null!==this.__targetUserControlControlObject)){const contentPixelSize=this.__targetUserControlControlObject.__getContentHeight();null!==contentPixelSize&&(this.__intHeight=contentPixelSize+"px"),callerControl&&this.__targetUserControlControlObject===callerControl||"Content"!==this.__targetUserControlControlObject.getHeightMode()||this.__targetUserControlControlObject.__processHeight(this)}super.__processHeight(callerControl)}__getContentWidth(){return"Collapsed"===this.__visibility?null:"Content"!==this.getWidthMode()?super.__getContentWidth():null!==this.__targetUserControlControlObject?this.__targetUserControlControlObject.__getContentWidth():null}__getContentHeight(){return"Collapsed"===this.__visibility?null:"Content"!==this.getHeightMode()?super.__getContentHeight():null!==this.__targetUserControlControlObject?this.__targetUserControlControlObject.__getContentHeight():null}getDescriptionAccessByName(name){if(!name)return null;let access=this.__partialDefaultVirtualRights.get(name);return access||null}}_TcHmiUserControlHost_tchmiFQN={value:"TcHmi.Controls.System."+(_a=TcHmiUserControlHost).name},System.TcHmiUserControlHost=TcHmiUserControlHost}(System=Controls.System||(Controls.System={}))}(Controls=TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiUserControlHost","TcHmi.Controls.System",TcHmi.Controls.System.TcHmiUserControlHost);