declare module TcHmi.Controls.Beckhoff {
    module TcHmiScopeControl {
        class TcHmiScopeControl extends TcHmi.Controls.System.TcHmiControl {
            #private;
            constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
            /** Reference to the root dom element of the current control template as jquery object. */
            protected __elementTemplateRoot: JQuery;
            /** Reference to the div element used as chart container as jquery object. */
            protected __elementChartings: JQuery;
            /** Reference to the canvas element used as resize border view as jquery object. */
            protected __elementBorder: JQuery;
            /** Reference to the div element used as overview container as jquery object. */
            protected __elementOverview: JQuery;
            /** Reference to the div element used as chart name as jquery object. */
            protected __elementChartName: JQuery;
            /** Reference to the div element used as menu-bar as jquery object. */
            protected __elementMenuBar: JQuery;
            /** Reference to the div element used as parent for buttons (top most layer) as jquery ouserinterabject. */
            protected __elementMenuBarDropdown: JQuery;
            /** Reference to the div element used as button-menu-bar as jquery object. */
            protected __elementToolBar: JQuery;
            /** Reference to the div element used as time-menu-bar as jquery object. */
            protected __elementTimeBar: JQuery;
            /** Reference to the div element used as legend as jquery object. */
            protected __elementLegend: JQuery;
            /** Reference to the div element used loading element as jquery object. */
            protected __elementLoading: JQuery;
            /** Reference to the div element used tooltip as jquery object. */
            protected __elementTooltip: JQuery;
            /** Reference to the div element used tooltip text as jquery object. */
            protected __elementTooltipText: JQuery;
            /** Reference to the div element used tooltip arrow as jquery object. */
            protected __elementTooltipArrow: JQuery;
            /** Localization */
            protected __localizedElements: Map<string, {
                element: HTMLElement;
                value: string | null;
            }>;
            protected __localizationReader: Locale.LocalizationReader | undefined;
            protected __destroyLocalizationWatch: DestroyFunction | null;
            /** Internal variable for init request has been executed  */
            protected __isInitialized: boolean;
            /** Internal variable for legend */
            protected __showLegend: boolean;
            /** Internal variable for the browser scaling */
            protected __scaling: {
                x: number;
                y: number;
            };
            /** Attributes */
            /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-config' */
            protected __scopeConfig: TcHmiScopeControl.ScopeConfig | undefined;
            /** Internal reference to the attribute 'data-tchmi-server-interval */
            protected __serverInterval: number | undefined;
            /** Internal reference to the attribute 'data-tchmi-server-domain */
            protected __serverDomain: string | undefined;
            /** Internal reference to the attribute 'data-tchmi-enable-record-controls */
            protected __enableRecordControls: boolean | undefined;
            /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-chart-color-source' */
            protected __chartChartColorSource: TcHmiScopeControl.ChartColorSource | undefined;
            /** Linechart element' */
            protected __lineCharts: Beckhoff.TcHmiScopeControl.Charting.ScopeChart[];
            /** Overviewchart element' */
            protected __overviewChart: Beckhoff.TcHmiScopeControl.Charting.ScopeChart | null;
            /** Reference to the div elements used as chart container as jquery object. */
            protected __chartingElements: JQuery[];
            /** Stores the toolButtons as Dictionary<System.baseTcHmiControl | JQuery> */
            protected __toolBarControls: Dictionary<System.baseTcHmiControl | JQuery>;
            /** Stores the toolButtons as (System.baseTcHmiControl | JQuery)[] */
            protected __toolBarControlsArray: (System.baseTcHmiControl | JQuery)[];
            /** Stores the toolButtons as JQuery[] */
            protected __timeBarControls: Dictionary<JQuery>;
            /**
            * Stores a reference to the function called when the resize event is raised
            */
            protected __initEventDestroyEvent: DestroyFunction | null;
            protected __resizeEventDestroyEvent: DestroyFunction | null;
            protected __themeDataLoadedEventDestroyEvent: DestroyFunction | null;
            protected __userDataChangedEventDestroyEvent: DestroyFunction | null;
            protected __scopeEventsDestroyEvent: DestroyFunction | null;
            protected __configEventsDestroyEvent: DestroyFunction | null;
            /** Event handlers */
            protected __mousedownHandler: (event: MouseEvent) => void;
            protected __mousedownGlobalHandler: (event: MouseEvent) => void;
            protected __mouseupHandler: (event: MouseEvent) => void;
            protected __mousemoveHandler: (event: MouseEvent) => void;
            protected __mousemoveChangeCursorHandler: (event: MouseEvent) => void;
            protected __mousemoveOverviewHandler: (event: MouseEvent) => void;
            protected __touchstartHandler: (event: TouchEvent) => void;
            protected __touchmoveHandler: (event: TouchEvent) => void;
            protected __touchendHandler: (event: TouchEvent) => void;
            protected __mousewheelHandler: (event: WheelEvent) => void;
            /** Subscription ID for ListDomain::Domain::state as number (null if no subscription is created) */
            protected __subscriptionIdOnExtensionStateChanged: number | null;
            /** Request ID for init as number (null if no request is created) */
            protected __initRequestId: number | null;
            /** Request ID for openConnection as number (null if no request is created) */
            protected __openConnectionRequestId: number | null;
            /** Subscription ID for getData as number (null if no subscription is created) */
            protected __subscriptionIdMenubar: number | null;
            /** Request ID for setChartSize as number (null if no request is created) */
            protected __setChartSizeRequestId: number | null;
            /** Subscription ID for getData as number (null if no subscription is created) */
            protected __subscriptionId: number | null;
            /** Subscription ID as number (null if no subscription is created) */
            protected __subscriptionIdActualWindow: number | null;
            /** Request ID for startRecord as number (null if no request is created) */
            protected __startRecordRequestId: number | null;
            /** Request ID for startDisplay onPressed as number (null if no request is created) */
            protected __startRequestId: number | null;
            /** Request ID for stopRecord as number (null if no request is created) */
            protected __stopRecordRequestId: number | null;
            /** Request ID for stopDisplay in onPressed as number (null if no request is created) */
            protected __stopRequestId: number | null;
            /** Request ID for zoom in userInteractionEnd as number (null if no request is created) */
            protected __zoomRequestId: number | null;
            /** Request ID for pan in userInteractionEnd as number (null if no request is created) */
            protected __panRequestId: number | null;
            /** Request ID for wheel in userInteractionEnd as number (null if no request is created) */
            protected __wheelRequestId: number | null;
            /** Request ID for unzoom in userInteractionEnd as number (null if no request is created) */
            protected __unzoomRequestId: number | null;
            /** Request ID for unzoom in userInteractionEnd as number (null if no request is created) */
            protected __zoomOutRequestId: number | null;
            /** Request ID for setDisplayWidth in userInteractionEnd as number (null if no request is created) */
            protected __displayWidthRequestId: number | null;
            /** Request ID for Goto in userInteractionEnd as number (null if no request is created) */
            protected __gotoRequestId: number | null;
            /** Request ID for Scroll in userInteractionEnd as number (null if no request is created) */
            protected __scrollRequestId: number | null;
            /** Request ID for ScrollBig in userInteractionEnd as number (null if no request is created) */
            protected __scrollBigRequestId: number | null;
            /** Request ID for Undo in userInteractionEnd as number (null if no request is created) */
            protected __undoRequestId: number | null;
            /** Request ID for Redo in userInteractionEnd as number (null if no request is created) */
            protected __redoRequestId: number | null;
            /** Request ID for setOverviewMode in userInteractionEnd as number (null if no request is created) */
            protected __setOverviewModeRequestId: number | null;
            /** Request ID for setOvervieRect in userInteractionEnd as number (null if no request is created) */
            protected __setOverviewRectRequestId: number | null;
            /** Request ID for getTooltip in userInteractionEnd as number (null if no request is created) */
            protected __getTooltipRequestId: number | null;
            /** Request ID for resizeCharts in userInteractionEnd as number (null if no request is created) */
            protected __resizeChartsRequestId: number | null;
            /** Request ID for changeChannelState in userInteractionEnd as number (null if no request is created) */
            protected __changeChannelStateRequestId: number | null;
            /** Tooltip timeout as number (null if no tooltip is shown) */
            protected __tooltipTimeout: number | null;
            /** Internal menubar options from extension (fill in getMenubarCallback) */
            protected __menubar: TcHmiScopeControl.Menubar | undefined;
            /** Internal menubar options from extension (fill in getMenubarCallback) */
            protected __legend: TcHmiScopeControl.LegendElement[] | undefined;
            /** Internal layout options from extension (fill in getMenubarCallback) */
            protected __scopeLayout: TcHmiScopeControl.ScopeLayout | undefined;
            /** Internal line graph data from scope-extension (fill in getDataCallback) */
            protected __scopeGraphData: TcHmiScopeControl.GetDataDatatype | undefined;
            /** Internal window data from scope-extension (fill in getDataCallback) */
            protected __scopeGraphWindow: TcHmiScopeControl.Window | null;
            /** Internal enabledButtons as enum flag */
            protected __enabledButtons: TcHmiScopeControl.ButtonsEnabled;
            /** Internal enabledTimes as enum flag */
            protected __enabledTimes: TcHmiScopeControl.TimesEnabled;
            /** Internal sessionId as string */
            protected __sessionId: string | null;
            /** Internal socketId as number */
            protected __socketId: number | null;
            /** Mouse mode for zooming or panning as TcHmiScopeControl.MouseMode */
            protected __mouseMode: TcHmiScopeControl.MouseMode | null;
            /** Internal variable to save the manipulation infos */
            protected __manipulationInfo: {
                isManipulating: boolean;
                start: {
                    x: number;
                    y: number;
                };
                end: {
                    x: number;
                    y: number;
                };
                offset: {
                    left: number;
                    top: number;
                };
                transform: {
                    x: number;
                    y: number;
                };
                click: boolean;
                mousePosition: {
                    x: number;
                    y: number;
                };
                elementIndex: number;
                isOverviewSizeChanged: boolean;
                beginOverviewRectChanging: boolean;
                chartSizeChanged: boolean;
                resizeLineIndex: number;
                touchIdentifier: number;
            };
            /** Internal variable to save the manipulation infos */
            protected __multitouchInfo: {
                multitouchMode: boolean;
                first: {
                    identifier: number | null;
                    startPoint: {
                        x: number;
                        y: number;
                    };
                };
                second: {
                    identifier: number | null;
                    startPoint: {
                        x: number;
                        y: number;
                    };
                };
                offset: {
                    left: number;
                    top: number;
                };
                distance: number;
                elementIndex: number;
                middlePoint: {
                    x: number;
                    y: number;
                };
            };
            protected __wheelInfo: {
                isWheeling: boolean;
                wheelSteps: number;
                mousePosition: {
                    x: number;
                    y: number;
                };
                timeout: number;
            };
            /** Internal variable for resize lines */
            protected __resizeLines: {
                orientation: TcHmiScopeControl.Orientation;
                startPoint: TcHmiScopeControl.Point;
                endPoint: TcHmiScopeControl.Point;
                chartIndex: number;
            }[];
            /** Events */
            private __destroyEvents;
            protected __themeChartBackgroundColor: string | null;
            protected __themeChartForegroundColor: string | null;
            protected __themeOverviewBackgroundColor: string | null;
            protected __themeOverviewForegroundColor: string | null;
            protected __themeCanvasBackgroundColor: string | null;
            protected __themeAxisColor: string | null;
            protected __themeGridColor: string | null;
            /** Stores the displayWidth textbox text */
            protected __displayWidthText: string | undefined;
            /** Stores the goto textbox text */
            protected __gotoText: string | undefined;
            /** Stores the showOverview toggle */
            protected __showOverview: boolean | undefined;
            /** Stores the overview rectangle */
            protected __overviewRectangle: {
                position: {
                    x: number;
                    y: number;
                };
                dimensions: {
                    width: number;
                    height: number;
                };
            };
            /** LoadingSpinner */
            protected __loadingSpinner: Element | null;
            /**
             * If raised, the control object exists in control cache and constructor of each inheritation level was called.
             * Call attribute processor functions here to initialize default values!
             */
            __previnit(): void;
            /**
            * If raised, all attributes have been set to it's default or dom values.
            */
            __init(): void;
            /**
            * Delete all subscriptions, call Init function from scope extension and openConnection
            */
            protected __clearInit(): void;
            /**
            * Is raised if the init callback is raised.
            */
            protected __initCallback(): (this: void, result: Server.IResultObject<{
                socketId: number;
            }>) => void;
            /**
           * Is raised if the init callback is raised.
           */
            protected __eventRegisterDoneCallback(): (this: void, data: TcHmi.IResultObject) => void;
            /**
            * Is raised if the onInitChanged event is raised.
            */
            protected __initChanged(): (evt: EventProvider.Event) => void;
            /**
            * Is called by tachcontrol() after the control instance gets part of the current DOM.
            * Is only allowed to be called from the framework itself!
            */
            __attach(): void;
            /**
            * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
            * Is only allowed to be called from the framework itself!
            */
            __detach(): void;
            /**
            * Destroy the current control instance.
            * Will be called automatically if system destroys control!
            */
            destroy(): void;
            /**
             * Add an element to be localized.
             * @param element The element.
             * @param key The localization key.
             * @param parameters Optional parameters to pass to tchmi_format_string.
             */
            __addOrUpdateLocalizedElement(element: HTMLElement, key: string, value?: string | null): void;
            /**
             * Remove a localized element.
             * @param key The key to remove.
             */
            __removeLocalizedElement(key: string): void;
            /**
             * Load theme resources for drawing the scope chart.
            */
            protected __loadThemedResources(): void;
            /**
            * Is raised if the control should be redrawn.
            */
            protected __onThemeDataChanged(): (evt: EventProvider.Event, ctrl?: System.TcHmiControl | undefined) => void;
            /**
            * Is raised if the control should be redrawn.
            */
            protected __onUserDataChanged(): (event: EventProvider.Event, data: any) => void;
            /**
            * Is raised if the extension state changed.
            */
            protected __onExtensionStateChanged(): (result: Server.IResultObject<TcHmi.Server.Domains.IDomainInfo['state']>) => void;
            /**
            * Is raised if scope events or thrown.
            */
            protected __scopeEventCallback(): (this: void, data: Server.Events.SubscriptionResult<any, Dictionary<any>>) => void;
            /**
            * Is raised if config events are thrown.
            */
            protected __configEventCallback(): (this: void, data: Server.Events.SubscriptionResult<any, Dictionary<any>>) => void;
            /**
            * Is raised if the control should be redrawn.
            */
            protected __rebuild(): (evt: EventProvider.Event, ctrl?: System.TcHmiControl | undefined) => void;
            /**
            * Convert scopeString to iso 8601 string
            * @param scopeString scopeString
            */
            protected __scopeStringToIso(scopeString: string): string;
            /**
            * Convert iso 8601 string to scope string
            * @param t Iso 8601 string
            */
            protected __isoToScopeString(t: string): string;
            /**
            * Convert iso 8601 string to milliseconds
            * @param t Iso 8601 string
            */
            protected __isoToMilliSec(t: string): number;
            /**
           * Is called if timespan or startTime changed.
           */
            protected __openWebsocket(): void;
            /**
            * Call OpenConnection.
            */
            protected __openConnection(): void;
            /**
            * Clear all lineCharts and the menubar with events etc.
            */
            protected __clearFullControl(): void;
            /**
            * Is raised if the requestDisplay callback is raised.
            */
            protected __connectionCallback(): (this: void, result: Server.IResultObject) => void;
            /**
           * Is raised if the requestDisplay callback is raised.
           */
            protected __setChartSizeCallback(): (this: void, result: Server.IResultObject) => void;
            /**
            * Delete subscriptions __subscriptionId and __subscriptionIdActualWindow.
            */
            protected __unsubscribeMenubar(): void;
            /**
            * Is called from __onWebSocketOpen and after all interactions and called getData, getLayout and getWindow from Scope-Extension.
            */
            protected __unsubscribeMenubarCallback(): (this: void, result: Server.IResultObject) => void;
            /**
            * Is called from __onWebSocketOpen and called GetMenubar from Scope-Extension.
            */
            protected __subscribeMenubar(): void;
            /**
            * Is raised if the requestDisplay callback is raised.
            */
            protected __getMenubarCallback(): (this: void, result: Server.IResultObject) => void;
            /**
            * Delete subscriptions __subscriptionId and __subscriptionIdActualWindow.
            */
            protected __unsubscribe(changedServerInterval?: boolean): void;
            /**
            * Is called from __onWebSocketOpen and after all interactions and called getData, getLayout and getWindow from Scope-Extension.
            */
            protected __unsubscribeGetDataCallback(): (this: void, result: Server.IResultObject) => void;
            /**
            * Called GetLayout, GetData and GetWindow from Scope-Extension.
            */
            protected __subscribeGetData(): void;
            /**
           * Is raised if __subscriptionIdActualWindow is unsubscribe.
           */
            protected __unsubscribeActualWindowCallback(): (this: void, result: Server.IResultObject) => void;
            /**
           * Called GetActualWindow from Scope-Extension.
           */
            protected __subscribeActualWindow(): void;
            /**
            * Is raised if the requestDisplay callback is raised.
            */
            protected __getDataCallback(): (this: void, result: Server.IResultObject) => void;
            /**
            * Is called initial and and if size changed.
            */
            protected __drawLineChart(drawOnlyOverview?: boolean): void;
            /**
            * Is called if onPressed event of start or stop button has raised.
            */
            private __onPressed;
            /**
            * Is called if onPressed event of start or stop button has raised.
            */
            private __onUserInteractionFinished;
            /**
            * Created legend
            */
            __createLegend(legend: TcHmiScopeControl.LegendElement[] | undefined | null): void;
            /**
            * Created menuButtons from enableButtons/enableTimes
            */
            __createMenuButtons(enableButtons: TcHmiScopeControl.ButtonsEnabled, enableTimes: TcHmiScopeControl.TimesEnabled): void;
            /**
            * Calculated which menuButtons added to topMostLayer
            */
            __calcMenuButtons(): void;
            /**
            * Set all menubuttons enabled or disabled
            */
            __enableOrDisableMenuControls(scopeState: string, live: boolean, undo: boolean, redo: boolean, chartType: TcHmiScopeControl.ChartType): void;
            /**
            * Updated menuButtons and -Times
            */
            __updatedMenuValues(windowData: TcHmiScopeControl.Window | null): void;
            /**
            * Show options-div (with buttons which can not be shown)
            */
            showOptions(): void;
            /**
             * Transforms client coordinates of mouse and touch events into the coordinate system of the target element.
             * Respects translation and sscaling.
             * @param clientX The x coordinate.
             * @param clientY The y coodinate.
             * @param targetElement The target element.
             */
            protected __transformEventCoords(clientX: number, clientY: number, targetElement?: Element): {
                x: number;
                y: number;
            };
            /**
            * Is raised if mouseDown on legend.
            * @param e The event of mouseDown.
            */
            protected __onCheckboxMouseDown: (event: MouseEvent) => void;
            /**
            * Is raised if touchstart on legend.
            * @param e The event of touchstart.
            */
            protected __onCheckboxTouchStart: (event: TouchEvent) => void;
            /**
            * Is raised if mouseDown on canvasDrawing.
            * @param e The event of mouseDown.
            */
            protected __onMouseDown(): (e: MouseEvent) => void;
            /**
            * Is raised if mouseDown on canvasDrawing.
            * @param e The event of mouseDown.
            */
            protected __onMouseDownGlobal(): (e: MouseEvent) => void;
            /**
            * Is raised if mouseMove on document.
            * @param e The event of mouseMove.
            */
            protected __onMouseMove(): (e: MouseEvent) => void;
            /**
            * Is raised if mouseMove on control.
            * @param e The event of mouseMove.
            */
            protected __onMouseMoveChangeCursor(): (e: MouseEvent) => void;
            /**
            * Is raised if mouseMove on document.
            * @param e The event of mouseMove.
            */
            protected __onMouseMoveOverview(): (e: MouseEvent) => void;
            /**
            * Is raised if mouseUp on document.
            * @param e The event of mouseDown.
            */
            protected __onMouseUp(): (e: MouseEvent) => void;
            /**
            * Is raised if mouseDown on canvasDrawing.
            * @param e The event of mouseWheel.
            */
            protected __onMouseWheel(): (e: WheelEvent) => void;
            /**
            * Is raised if touchStart on canvasDrawing.
            * @param e The event of touchStart.
            */
            protected __onTouchStart(): (e: TouchEvent) => void;
            /**
            * Is raised if touchMove on document.
            * @param e The event of touchMove.
            */
            protected __onTouchMove(): (e: TouchEvent) => void;
            /**
            * Is raised if touchEnd on document.
            * @param e The event of touchEnd.
            */
            protected __onTouchEnd(): (e: TouchEvent) => void;
            /**
            * Is called from onTouchStart and onMouseDown.
            * @param x The x coordinate of the mouse or touch.
            * @param y The y coordinate of the mouse or touch.
            */
            protected __userInteractionStart(x: number, y: number, position: number): void;
            /**
            * Is called from onTouchMove and onMouseMove.
            * @param x The x coordinate of the mouse or touch.
            * @param y The y coordinate of the mouse or touch.
            */
            protected __userInteractionMove(x: number, y: number): void;
            /**
            * Is called from onTouchEnd and onMouseUp.
            * Resets this.__drawing on canvas.
            * Zoom mode:    Clears the canvas.
            * Pan mode:     resets this.__drawing.
            */
            protected __userInteractionEnd(): void;
            /**
            * Is called from onTouchEnd and onMouseUp.
            * @param displayText The text for the tooltip
            * @param chartIndex The chart index
            * @param mousePosition The mouse position
            * @param timeout The timeout for showing the tooltip
            */
            protected __showTooltip(tooltipObj: TcHmiScopeControl.Tooltip): void;
            /**
            * Called the setChartSize method from the scope extension.
            */
            setChartSize(setLoadingSpinner: boolean): void;
            /**
            * Called the startRecord method from the scope extension.
            */
            startRecord(): void;
            /**
            * Called the stopRecord method from the scope extension.
            */
            stopRecord(): void;
            /**
            * Called the startDisplay method from the scope extension.
            */
            startDisplay(): void;
            /**
            * Called the stopDisplay method from the scope extension.
            */
            stopDisplay(): void;
            /**
            * Called the setDisplayWidth method from the scope extension.
            */
            setDisplayWidth(displayWidth: string): void;
            /**
            * Called the scroll method from the scope extension.
            */
            scroll(direction: TcHmiScopeControl.Direction): void;
            /**
            * Called the scrollBig method from the scope extension.
            */
            scrollBig(direction: TcHmiScopeControl.Direction): void;
            /**
            * Called the goTo method from the scope extension.
            */
            goTo(goTo: string): void;
            /**
            * Called the undo method from the scope extension.
            */
            undo(): void;
            /**
            * Called the undo method from the scope extension.
            */
            redo(): void;
            /**
            * Called the zoomToDefault method from the scope extension.
            */
            zoomToDefault(): void;
            /**
            * Called the zoomOutMax method from the scope extension.
            */
            zoomOutMax(): void;
            /**
            * Called the setOverviewMode method from the scope extension.
            */
            setOverviewMode(): void;
            /**
            * Set the mouseMode for interactions.
            */
            setMouseMode(valueNew: TcHmiScopeControl.MouseMode): void;
            /**
            * Called the changeChannelState method from the scope extension.
            */
            changeChannelState(id: string, state: boolean): void;
            /**
            * Return the mouseMode value.
            * @returns The current value of mouseMode.
            */
            getMouseMode(): TcHmiScopeControl.MouseMode | null;
            /**
            * Sets the ScopeConfig.
            * @param valueNew The new value for ScopeConfig
            */
            setScopeConfig(valueNew: TcHmiScopeControl.ScopeConfig | null): void;
            /**
             * The watch callback for the yAxis object resolver.
             */
            protected __onResolverForScopeConfigWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiScopeControl.ScopeConfig>) => void;
            /**
            * Return the value of ScopeConfig
            * @returns The current value of scopeConfig.
            */
            getScopeConfig(): TcHmiScopeControl.ScopeConfig | undefined;
            /**
            * Processes the current value of attribute ScopeConfig.
            */
            protected __processScopeConfig(): void;
            /**
            * Sets the server interval and calls the associated process function (processServerInterval).
            * @param valueNew The new value for server interval.
            */
            setServerInterval(valueNew: number | null): void;
            /**
            * Returns the current value of server interval.
            * @returns The current value of serverInterval.
            */
            getServerInterval(): number | undefined;
            /**
            * Processes the current server interval attribute value.
            */
            protected __processServerInterval(): void;
            /**
            * Sets the server domain for the extension
            * @param valueNew The new value for serverDomain
            */
            setServerDomain(valueNew: string): void;
            /**
            * Returns the value of serverDomain
            * @returns The current value of serverDomain.
            */
            getServerDomain(): string | undefined;
            /**
            * Processes the current value of attribute serverDomain.
            */
            protected __processServerDomain(): void;
            /**
            * Sets the enableRecordControls value and calls the associated process function (processEnableRecordControls).
            * @param valueNew The new value for enableRecordControls.
            */
            setEnableRecordControls(valueNew: boolean | null): void;
            /**
            * Returns the current value of enableRecordControls.
            * @returns The current value of enableRecordControls.
            */
            getEnableRecordControls(): boolean | undefined;
            /**
            * Processes the current enableRecordControls attribute value.
            */
            protected __processEnableRecordControls(): void;
            /**
            * Sets the ChartColorSource.
            * @param valueNew The new value for ChartColorSource
            */
            setChartColorSource(valueNew: TcHmiScopeControl.ChartColorSource | null): void;
            /**
            * Returns the value of ChartColorSource
            * @returns The current value of chartColorSource.
            */
            getChartColorSource(): TcHmiScopeControl.ChartColorSource | undefined;
            /**
            * Processes the current value of attribute ChartColorSource.
            */
            protected __processChartColorSource(): void;
            /**
         * Processes the current access config.
         */
            __processAccessConfig(): void;
        }
        module TcHmiScopeControl {
            interface ScopeEventPayload {
                sessionId: string;
                socketId: number;
                message: string;
                severity: Server.Events.Severity;
            }
            interface ConfigEventPayload {
                configName: string;
                oldConfigName: string | null;
                configType: ConfigType;
                severity: Server.Events.Severity;
            }
            enum ConfigType {
                Add = 0,
                Change = 1,
                Rename = 2,
                Delete = 3
            }
            interface ScopeConfig {
                name: string;
                chart: string;
            }
            enum ChartColorSource {
                ScopeConfig = 0,
                Theme = 1
            }
            interface LegendElement {
                id: string;
                text: string;
                enabled: boolean;
                color: string;
            }
            interface Point {
                x: number;
                y: number;
            }
            interface Window {
                xAxisStart: string;
                xAxisEnd: string;
                xAxisPosition: string;
                displayWidth: string;
                startDisplayTime: string;
                scopeState: string;
                liveState: boolean;
                undo: boolean;
                redo: boolean;
                overviewRect?: {
                    dimensions: Dimensions;
                    position: Position;
                };
            }
            interface ActualWindow {
                xAxisStart: string;
                xAxisEnd: string;
                displayWidth: string;
                scopeState: string;
                liveState: boolean;
                undo: boolean;
                redo: boolean;
            }
            interface GetDataDatatype {
                overview?: Chart;
                charts: Chart[];
            }
            interface Chart {
                graphs: Dictionary<TcHmiScopeControl.Graph>;
            }
            interface Graph {
                axesData: TcHmiScopeControl.Point[];
                lineSeries: LineSeries[];
                tooltipDelta: number;
                zeroPoint: TcHmiScopeControl.Position;
            }
            interface LineSeries {
                index: number;
                lineStates: string[];
            }
            enum ChartType {
                YT = 0,
                XY = 1,
                ArrayBarChart = 2,
                SingleBarChart = 3
            }
            enum Orientation {
                Vertical = 1,
                Horizontal = 2
            }
            enum ButtonsEnabled {
                None = 0,
                RunButton = 1,
                PauseButton = 2,
                Splitter1 = 4,
                DisplaywidthTextBox = 8,
                Splitter2 = 16,
                ScrollBackBigButton = 32,
                ScrollBackSmallButton = 64,
                ScrollForwardSmallButton = 128,
                ScrollForwardBigButton = 256,
                Splitter3 = 512,
                GotoTextBox = 1024,
                Splitter4 = 2048,
                UndoButton = 4096,
                RedoButton = 8192,
                Splitter5 = 16384,
                PanToggleButton = 65536,
                PanYToggleButton = 33554432,
                PanXYToggleButton = 131072,
                ZoomToggleButton = 262144,
                ZoomYToggleButton = 67108864,
                ZoomXYToggleButton = 524288,
                UnzoomButton = 1048576,
                ZoomOutMaxButton = 2097152,
                OverviewButton = 4194304
            }
            enum TimesEnabled {
                None = 0,
                StartTimeLabel = 1,
                Splitter1 = 2,
                EndTimeLabel = 4,
                Splitter2 = 8,
                PositionLabel = 16,
                Splitter3 = 32,
                AbsTimeLabel = 64,
                Splitter4 = 128,
                DateLabel = 256
            }
            enum LineState {
                None = 0,
                Normal = 1,
                Bold = 2,
                MediumBold = 4,
                Invisible = 8,
                Up = 16,
                Down = 32,
                Dashed = 256,
                DashedLine = 4352,
                MarkerArrowRight = 17408,
                MarkerArrowLeft = 18432,
                ApplyToLine = 4096,
                ApplyToFillArea = 8192,
                ApplyToMark = 16384,
                ApplyToLineNMarkNFill = 28672,
                InvisibleLine = 4104,
                InvisibleMark = 16392,
                InvisibleLineNMark = 20488,
                LineUp = 4112,
                LineDown = 4128,
                MarkUp = 16400,
                MarkDown = 16416,
                LineNMarkUp = 20496,
                LineNMarkDown = 20512,
                NormalLine = 4097,
                NormalLineUp = 4113,
                NormalLineDown = 4129,
                NormalFill = 8193,
                NormalMark = 16385,
                NormalMarkUp = 16401,
                NormalMarkDown = 16417,
                NormalLineNMark = 20481,
                NormalLineNMarkUp = 20497,
                NormalLineNMarkDown = 20513,
                BoldLine = 4098,
                BoldLineUp = 4114,
                BoldLineDown = 4130,
                BoldMark = 16386,
                BoldMarkUp = 16402,
                BoldMarkDown = 16418,
                BoldLineNMark = 20482,
                BoldLineNMarkUp = 20498,
                BoldLineNMarkDown = 20514,
                MediumBoldLine = 4100,
                MediumBoldLineUp = 4116,
                MediumBoldLineDown = 4132,
                MediumBoldMark = 16388,
                MediumBoldMarkUp = 16404,
                MediumBoldMarkDown = 16420,
                MediumBoldLineNMark = 20484,
                MediumBoldLineNMarkUp = 20500,
                MediumBoldLineNMarkDown = 20516,
                Colored = 1099511562240,
                ColoredRed = 1095216660480,
                ColoredGreen = 4278190080,
                ColoredBlue = 16711680,
                Transparent = 280375465082880
            }
            interface Menubar {
                visibleToolstrip: boolean;
                visibleTimestrip: boolean;
                enabledButtons: number;
                enabledTimeLabels: number;
            }
            interface Tooltip {
                displayText: string;
                timeoutMS: string;
                chartIndex: number;
                position: Position;
            }
            interface ScopeLayout {
                chartType: string;
                dimensions: Dimensions;
                position: Position;
                backgroundColor: string;
                foregroundColor: string;
                gradientBackground?: boolean;
                gradientBackgroundColor?: number;
                showTooltip: boolean;
                headline?: {
                    dimensions: Dimensions;
                    position: Position;
                    label: string;
                    color: string;
                    fontSize: number;
                };
                overview?: ScopeLayoutOverview;
                charts: ScopeLayoutChart[];
            }
            interface ScopeLayoutAxis {
                visible: boolean;
                visibleTicks: boolean;
                dimensions: Dimensions;
                position: Position;
                color: string;
                lineWidth: number;
                headline?: {
                    dimensions: Dimensions;
                    position: Position;
                    label: string;
                    color: string;
                    fontSize: number;
                };
                labels?: {
                    dimensions: Dimensions;
                    position: Position;
                    label: string;
                    color: string;
                    fontSize: number;
                }[];
                grid?: {
                    visible: boolean;
                    ticks: number;
                    color: string;
                    lineWidth: number;
                };
                subGrid?: {
                    visible: boolean;
                    ticks: number;
                    color: string;
                    lineWidth: number;
                };
            }
            interface ScopeLayoutChart {
                visible: boolean;
                dimensions: Dimensions;
                preferredSize: Dimensions;
                position: Position;
                canvas: {
                    dimensions: Dimensions;
                    position: Position;
                    backgroundColor: string;
                };
                gridSize: {
                    dimensions: Dimensions;
                    position: Position;
                };
                headline?: {
                    dimensions: Dimensions;
                    position: Position;
                    label: string;
                    color: string;
                    fontSize: number;
                };
                verticalAxis: ScopeLayoutAxis[];
                horizontalAxis: ScopeLayoutAxis[];
                graphs: ScopeGraphLayout[];
            }
            interface ScopeLayoutOverview {
                visible: boolean;
                dimensions: Dimensions;
                preferredSize: Dimensions;
                position: Position;
                canvas: {
                    dimensions: Dimensions;
                    position: Position;
                    backgroundColor: string;
                };
                gridSize: {
                    dimensions: Dimensions;
                    position: Position;
                };
                verticalAxis: ScopeLayoutAxis[];
                horizontalAxis: ScopeLayoutAxis[];
                graphs: ScopeGraphLayout[];
            }
            interface ScopeGraphLayout {
                graphName: string;
                graphType: GraphType;
                marks: boolean;
                lineColor: string;
                lineWidth: number;
                markColor: string;
                markWidth: number;
                fillMode: FillMode;
                fillColor: string;
                fillTransparency: number;
                showEndCap: boolean;
                showStartCap: boolean;
                capSize: number;
                capColor: string;
                antialias: boolean;
            }
            interface Dimensions {
                width: number;
                height: number;
            }
            interface Position {
                x: number;
                y: number;
            }
            enum MouseMode {
                ZoomX = 0,
                ZoomY = 1,
                ZoomXY = 2,
                PanX = 3,
                PanY = 4,
                PanXY = 5
            }
            enum Direction {
                Forward = "Forward",
                Reverse = "Reverse"
            }
            enum GraphType {
                Line = "Line",
                Stair = "Stair",
                Bar = "Bar",
                ExtendedLine = "ExtendedLine"
            }
            enum FillMode {
                None = "None",
                FromHorizontalZero = "FromHorizontalZero",
                FromBottom = "FromBottom",
                FromTop = "FromTop",
                FromCenter = "FromCenter",
                FromSource = "FromSource"
            }
        }
    }
}
declare module TcHmi {
    module Controls {
        module Beckhoff {
            module TcHmiScopeControl {
                module Charting {
                    class ScopeChart {
                        /** The elementRoot as jquery object. */
                        protected __elementRoot: JQuery;
                        /** The canvas to drawing axis, grid and subgrid as HTMLCanvasElement. */
                        protected __canvasFrame: HTMLCanvasElement | undefined;
                        /** The canvas to drawing the lines as HTMLCanvasElement. */
                        protected __canvasDrawing: HTMLCanvasElement | undefined;
                        /** The canvas to drawing the lines as HTMLCanvasElement. */
                        protected __canvasZooming: HTMLCanvasElement | undefined;
                        /** The canvas to drawing the marker as HTMLCanvasElement. */
                        protected __canvasMarker: HTMLCanvasElement | undefined;
                        /** The canvas frame context as CanvasRenderingContext2D. */
                        protected __contextFrame: CanvasRenderingContext2D | null | undefined;
                        /** The canvas context drawing as CanvasRenderingContext2D. */
                        protected __contextDrawing: CanvasRenderingContext2D | null | undefined;
                        /** The canvas context drawing as CanvasRenderingContext2D. */
                        protected __contextZooming: CanvasRenderingContext2D | null | undefined;
                        /** The canvas context marker as CanvasRenderingContext2D. */
                        protected __contextMarker: CanvasRenderingContext2D | null | undefined;
                        /** The yAxis as YAxis[]. */
                        protected __yAxis: Charting.YAxis[];
                        /** The xAxis as XAxis object. */
                        protected __xAxis: XAxis[];
                        /** The grid as Grid object. */
                        protected __grid: Grid[];
                        /** The subgrid as Subgrid object. */
                        protected __subgrid: Subgrid[];
                        /** The lineGraphs as LineGraph object. */
                        protected __lineGraph: Map<string, LineGraph>;
                        /** The hasChanged as boolean. */
                        private __hasChanged;
                        /** The lineChanged as boolean. */
                        protected __lineChanged: boolean;
                        /**
                        * Creates a new ScopeChart.
                        * @param elementRoot The root element where the canvas elements added to.
                        */
                        constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number);
                        /**
                        * Adds a xAxis (only one xAxis are exists).
                        * @returns The hasChanged attribute.
                        */
                        addXAxis(xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): XAxis | null;
                        /**
                       * Adds a xAxis at index.
                       * @param index The index where the new xAxis should added in array.
                       */
                        addXAxisAtPosition(index: number, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
                        /**
                        * Delete the xAxis at index.
                        * @param index The index.
                        */
                        deleteXAxis(index: number): void;
                        /**
                        * Delete all xAxis.
                        */
                        deleteAllXAxis(): void;
                        /**
                        * Adds a yAxis.
                        */
                        addYAxis(yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
                        /**
                        * Adds a yAxis at index.
                        * @param index The index where the new yAxis should added in array.
                        */
                        addYAxisAtPosition(index: number, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
                        /**
                        * Delete the yAxis at index.
                        * @param index The index.
                        */
                        deleteYAxis(index: number): void;
                        /**
                        * Delete all yAxis.
                        */
                        deleteAllYAxis(): void;
                        /**
                        * Adds a grid.
                        */
                        addGrid(xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
                            dimensions: TcHmiScopeControl.Dimensions;
                            position: TcHmiScopeControl.Position;
                        }, themeResourcesGridColor: string | null): void;
                        /**
                       * Adds a grid at index.
                       * @param index The index where the new grid should added in array.
                       */
                        addGridAtPosition(index: number, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
                            dimensions: TcHmiScopeControl.Dimensions;
                            position: TcHmiScopeControl.Position;
                        }, themeResourcesGridColor: string | null): void;
                        /**
                        * Delete the grid at index.
                        * @param index The index.
                        */
                        deleteGrid(index: number): void;
                        /**
                        * Delete all xAxis.
                        */
                        deleteAllGrids(): void;
                        /**
                        * Adds a subgrid.
                        */
                        addSubgrid(xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
                            dimensions: TcHmiScopeControl.Dimensions;
                            position: TcHmiScopeControl.Position;
                        }, themeResourcesSubgridColor: string | null): void;
                        /**
                       * Adds a subgrid at index.
                       * @param index The index where the new subgrid should added in array.
                       */
                        addSubgridAtPosition(index: number, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
                            dimensions: TcHmiScopeControl.Dimensions;
                            position: TcHmiScopeControl.Position;
                        }, themeResourcesSubgridColor: string | null): void;
                        /**
                        * Delete the subgrid at index.
                        * @param index The index.
                        */
                        deleteSubgrid(index: number): void;
                        /**
                        * Delete all xAxis.
                        */
                        deleteAllSubgrids(): void;
                        /**
                        * Adds a linegraph.
                        */
                        addLineGraph(graphLayout: TcHmiScopeControl.ScopeGraphLayout | null, gridSize: {
                            dimensions: TcHmiScopeControl.Dimensions;
                            position: TcHmiScopeControl.Position;
                        }): void;
                        /**
                        * Delete all linegtaphs.
                        */
                        deleteAllLineGraphs(): void;
                        /**
                        * Removes all canvas elements.
                        */
                        remove(): void;
                        /**
                        * Clears all canvas elements.
                        */
                        clear(width: number, height: number): void;
                        /**
                        * Returns all yAxis.
                        * @returns The yAxis.
                        */
                        getYAxis(): YAxis[];
                        /**
                        * Returns the specific yAxis.
                        * @param index The index.
                        * @returns The yAxis at index.
                        */
                        getYAxisAtPosition(index: number): YAxis;
                        /**
                        * Returns all xAxis.
                        * @returns The xAxis.
                        */
                        getXAxis(): XAxis[];
                        /**
                        * Returns the specific xAxis.
                        * @param index The index.
                        * @returns The xAxis at index.
                        */
                        getXAxisAtPosition(index: number): XAxis;
                        /**
                        * Returns the grid.
                        * @returns The grid.
                        */
                        getGrid(): Grid[];
                        /**
                        * Returns the specific grid.
                        * @param index The index.
                        * @returns The grid at index.
                        */
                        getGridAtPosition(index: number): Grid;
                        /**
                        * Returns the subgrid.
                        * @returns The subgrid.
                        */
                        getSubgrid(): Subgrid[];
                        /**
                        * Returns the specific subgrid.
                        * @param index The index.
                        * @returns The subgrid at index.
                        */
                        getSubgridAtPosition(index: number): Subgrid;
                        /**
                        * Returns the linegraph.
                        * @returns The linegraph.
                        */
                        getLineGraph(): Map<string, LineGraph>;
                        /**
                        * Returns the specific lineGraph.
                        * @param index The index.
                        * @returns The linegraph at index.
                        */
                        getLineGraphWithName(name: string): LineGraph | undefined;
                        /**
                        * Returns the canvas object where the graphs are drawing.
                        * @returns The canvas where drawing the graphs.
                        */
                        getCanvasDrawing(): HTMLCanvasElement | undefined;
                        /**
                        * Returns the canvas object where the axis, grid and subgrid are drawing.
                        * @returns The canvas where drawing axis, grid and subgrid.
                        */
                        getCanvasFrame(): HTMLCanvasElement | undefined;
                        /**
                        * Returns the canvas object where you can make interactions.
                        * @returns The canvas for interactions.
                        */
                        getCanvasZooming(): HTMLCanvasElement | undefined;
                        /**
                        * Returns the canvas object where the marker are drawing.
                        * @returns The canvas where drawing marker.
                        */
                        getCanvasMarker(): HTMLCanvasElement | undefined;
                        /**
                        * Returns the hasChanged attribute which saved if axis, grid and subgrid must be redrawing.
                        * @returns The hasChanged attribute.
                        */
                        getHasChanged(): boolean;
                        /**
                        * Creates the canvas where axis, grid and subgrid are drawing.
                        */
                        __initCanvas(canvasWidth: number, canvasHeight: number): void;
                        /**
                        * Sets the hasChanged.
                        * @param hasChanged The hasChanged attribute.
                        */
                        setHasChanged(hasChanged: boolean): void;
                        /**
                        * Sets the lineChanged which saved if graphs must be redrawing.
                        * @param lineChanged The lineChanged attribute.
                        */
                        setLineChanged(lineChanged: boolean): void;
                        /**
                        * Draws the lineChart if anything is changed.
                        */
                        draw(layout: TcHmiScopeControl.ScopeLayoutChart, themeResourcesCanvasColor: string | null): void;
                    }
                    module ScopeChart {
                        enum LineStyle {
                            Dotted = 0,
                            Dashed = 1,
                            Solid = 2
                        }
                    }
                }
            }
        }
    }
}
declare module TcHmi {
    module Controls {
        module Beckhoff {
            module TcHmiScopeControl {
                module Charting {
                    class Grid {
                        /** The canvas as HTMLCanvasElement. */
                        protected __canvas: HTMLCanvasElement;
                        /** The canvas context as CanvasRenderingContext2D. */
                        protected __context: CanvasRenderingContext2D | null;
                        /** The layout for the xAxis. */
                        protected __xAxisLayout: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.ScopeLayoutAxis | null;
                        /** The layout for the yAxis. */
                        protected __yAxisLayout: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.ScopeLayoutAxis | null;
                        /** The gridSize. */
                        protected __gridSize: {
                            dimensions: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Dimensions;
                            position: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Position;
                        } | null;
                        /** The themeResourcesSubgridColor as string. */
                        protected __themeResourcesGridColor: string | null;
                        /**
                        * Creates a new Grid.
                        * @param canvas The canvas element where drawing the grid.
                        */
                        constructor(canvas: HTMLCanvasElement, xAxisLayout: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
                            dimensions: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Dimensions;
                            position: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Position;
                        }, themeResourcesGridColor: string | null);
                        /**
                        * Draws the grid to the canvas.
                        * @param startPoint The startpoint to drawing (bottom/left).
                        * @param width The width of the grid.
                        * @param height The height of the grid.
                        * @param numberOfWidthLines The number of width lines.
                        * @param numberOfHeightLines The number of height lines.
                        * @param drawingBorder The border (bigger than grid) of all sites.
                        */
                        draw(): void;
                    }
                }
            }
        }
    }
}
declare module TcHmi {
    module Controls {
        module Beckhoff {
            module TcHmiScopeControl {
                module Charting {
                    class Subgrid {
                        /** The canvas as HTMLCanvasElement. */
                        protected __canvas: HTMLCanvasElement;
                        /** The canvas context as CanvasRenderingContext2D. */
                        protected __context: CanvasRenderingContext2D | null;
                        /** The layout for the xAxis. */
                        protected __xAxisLayout: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.ScopeLayoutAxis | null;
                        /** The layout for the yAxis. */
                        protected __yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null;
                        /** The gridSize. */
                        protected __gridSize: {
                            dimensions: TcHmiScopeControl.Dimensions;
                            position: TcHmiScopeControl.Position;
                        } | null;
                        /** The themeResourcesSubgridColor as string. */
                        protected __themeResourcesSubgridColor: string | null;
                        /**
                        * Creates a new Grid.
                        * @param canvas The canvas element where drawing the grid.
                        */
                        constructor(canvas: HTMLCanvasElement, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, yAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null, gridSize: {
                            dimensions: TcHmiScopeControl.Dimensions;
                            position: TcHmiScopeControl.Position;
                        }, themeResourcesSubgridColor: string | null);
                        /**
                        * Draws the subgrid to the canvas.
                        * @param startPoint The startpoint to drawing (bottom/left).
                        * @param width The width of the subgrid.
                        * @param height The height of the subgrid.
                        * @param numberOfLinesBetweenMainGridWidth The number of lines between maingrid in width.
                        * @param widthBetweenMainGrid The width between two main grid lines.
                        * @param numberOfLinesBetweenMainGridHeight The number of lines between maingrid in height.
                        * @param heightBetweenMainGrid The height between two main grid lines.
                        * @param numberOfMainGridWidthLines The number of main grid width lines.
                        * @param numberOfMainGridHeightLines The number of main grid height lines.
                        * @param gridLineWidth The line width of the grid.
                        * @param drawingBorder The border (bigger than grid) of all sites.
                        */
                        draw(): void;
                    }
                }
            }
        }
    }
}
declare module TcHmi {
    module Controls {
        module Beckhoff {
            module TcHmiScopeControl {
                module Charting {
                    class XAxis {
                        /** The labelFontFamily as string. */
                        protected __labelFontFamily: TcHmi.FontFamily | null;
                        /** The labelFontSize as number. */
                        protected __labelFontSize: number | null;
                        /** The labelFontSizeUnit as string. */
                        protected __labelFontSizeUnit: TcHmi.FontSizeUnit | null;
                        /** The labelFontWeight as string. */
                        protected __labelFontWeight: TcHmi.FontWeight | null;
                        /** The axisNameFontFamily as string. */
                        protected __axisNameFontFamily: TcHmi.FontFamily | null;
                        /** The axisNameFontSize as number. */
                        protected __axisNameFontSize: number | null;
                        /** The axisNameFontSizeUnit as string. */
                        protected __axisNameFontSizeUnit: TcHmi.FontSizeUnit | null;
                        /** The axisNameFontWeight as string. */
                        protected __axisNameFontWeight: TcHmi.FontWeight | null;
                        /** The layout for the axis. */
                        protected __xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis | null;
                        /** The id as number. */
                        protected __id: number;
                        /** The canvas element as HTMLCanvasElement. */
                        protected __canvas: HTMLCanvasElement;
                        /** The canvas context as CanvasRenderingContext2D. */
                        protected __context: CanvasRenderingContext2D | null;
                        /** The themeResourcesHeadlineColor as string. */
                        protected __themeResourcesHeadlineColor: string | null;
                        /** The themeResourcesAxisColor as string. */
                        protected __themeResourcesAxisColor: string | null;
                        /**
                        * Creates a new YAxis.
                        * @param id The number of yAxis.
                        * @param canvas The canvas element where drawing the grid.
                        * @param xAxisLayout The xAxis layout.
                        */
                        constructor(id: number, canvas: HTMLCanvasElement, xAxisLayout: TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null);
                        /**
                        * Draws the xAxis to the canvas.
                        * @param startPoint The startpoint to drawing (bottom/left).
                        * @param endPoint The endpoint to drawing (top/right).
                        */
                        drawAxis(): void;
                        /**
                        * Returns the id.
                        * @returns The id of the axis.
                        */
                        getId(): number;
                        /**
                        * Sets the labelFontFamily.
                        * @param labelFontFamily The new labelFontFamily.
                        */
                        setLabelFontFamily(labelFontFamily: TcHmi.FontFamily | null | undefined): void;
                        /**
                        * Returns the labelFontFamily.
                        * @returns The labelFontFamily.
                        */
                        getLabelFontFamily(): string | null;
                        /**
                        * Sets the labelFontSize.
                        * @param labelFontSize The new labelFontSize.
                        */
                        setLabelFontSize(labelFontSize: number | null): void;
                        /**
                        * Returns the labelFontSize.
                        * @returns The labelFontSize.
                        */
                        getLabelFontSize(): number | null;
                        /**
                        * Sets the labelFontSizeUnit.
                        * @param labelFontSizeUnit The new labelFontSizeUnit.
                        */
                        setLabelFontSizeUnit(labelFontSizeUnit: TcHmi.FontSizeUnit | null): void;
                        /**
                        * Returns the labelFontSizeUnit.
                        * @returns The labelFontSizeUnit.
                        */
                        getLabelFontSizeUnit(): FontSizeUnit | null;
                        /**
                        * Sets the labelFontWeight.
                        * @param labelFontWeight The new labelFontWeight.
                        */
                        setLabelFontWeight(labelFontWeight: TcHmi.FontWeight | null): void;
                        /**
                        * Returns the labelFontWeight.
                        * @returns The labelFontWeight.
                        */
                        getLabelFontWeight(): FontWeight | null;
                        /**
                        * Sets the axisNameFontFamily.
                        * @param axisNameFontFamily  The new axisNameFontFamily.
                        */
                        setAxisNameFontFamily(axisNameFontFamily: TcHmi.FontFamily | null | undefined): void;
                        /**
                        * Returns the axisNameFontFamily.
                        * @returns The axisNameFontFamily.
                        */
                        getAxisNameFontFamily(): string | null;
                        /**
                        * Sets the axisNameFontSize.
                        * @param axisNameFontSize The new axisNameFontSize.
                        */
                        setAxisNameFontSize(axisNameFontSize: number | null): void;
                        /**
                        * Returns the axisNameFontSize.
                        * @returns The axisNameFontSize.
                        */
                        getAxisNameFontSize(): number | null;
                        /**
                        * Sets the axisNameFontSizeUnit.
                        * @param axisNameFontSizeUnit The new axisNameFontSizeUnit.
                        */
                        setAxisNameFontSizeUnit(axisNameFontSizeUnit: TcHmi.FontSizeUnit | null): void;
                        /**
                        * Returns the axisNameFontSizeUnit.
                        * @returns The axisNameFontSizeUnit.
                        */
                        getAxisNameFontSizeUnit(): FontSizeUnit | null;
                        /**
                        * Sets the axisNameFontWeight.
                        * @param axisNameFontWeight The new axisNameFontWeight.
                        */
                        setAxisNameFontWeight(axisNameFontWeight: TcHmi.FontWeight | null): void;
                        /**
                        * Returns the axisNameFontWeight.
                        * @returns The axisNameFontWeight.
                        */
                        getAxisNameFontWeight(): FontWeight | null;
                    }
                }
            }
        }
    }
}
declare module TcHmi {
    module Controls {
        module Beckhoff {
            module TcHmiScopeControl {
                module Charting {
                    class YAxis {
                        /** The labelFontFamily as string. */
                        protected __labelFontFamily: TcHmi.FontFamily | null;
                        /** The labelFontSize as number. */
                        protected __labelFontSize: number | null;
                        /** The labelFontSizeUnit as string. */
                        protected __labelFontSizeUnit: TcHmi.FontSizeUnit | null;
                        /** The labelFontWeight as string. */
                        protected __labelFontWeight: TcHmi.FontWeight | null;
                        /** The axisNameFontFamily as string. */
                        protected __axisNameFontFamily: TcHmi.FontFamily | null;
                        /** The axisNameFontSize as number. */
                        protected __axisNameFontSize: number | null;
                        /** The axisNameFontSizeUnit as string. */
                        protected __axisNameFontSizeUnit: TcHmi.FontSizeUnit | null;
                        /** The axisNameFontWeight as string. */
                        protected __axisNameFontWeight: TcHmi.FontWeight | null;
                        /** The layout for the axis. */
                        protected __yAxisLayout: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.ScopeLayoutAxis | null;
                        /** The id as number. */
                        protected __id: number;
                        /** The canvas element as HTMLCanvasElement. */
                        protected __canvas: HTMLCanvasElement;
                        /** The canvas context as CanvasRenderingContext2D. */
                        protected __context: CanvasRenderingContext2D | null;
                        /** The themeResourcesHeadlineColor as string. */
                        protected __themeResourcesHeadlineColor: string | null;
                        /** The themeResourcesAxisColor as string. */
                        protected __themeResourcesAxisColor: string | null;
                        /**
                        * Creates a new YAxis.
                        * @param id The number of yAxis.
                        * @param canvas The canvas element where drawing the grid.
                        * @param xAxisLayout The yAxis layout.
                        */
                        constructor(id: number, canvas: HTMLCanvasElement, yAxisLayout: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null);
                        /**
                        * Draws the yAxis to the canvas.
                        * @param startPoint The startpoint to drawing (bottom/left).
                        * @param endPoint The endpoint to drawing (top/right).
                        * @param showOnlyYAxis Only y Axis is drawing..
                        */
                        drawAxis(): void;
                        /**
                        * Returns the id.
                        * @returns The id of the axis.
                        */
                        getId(): number;
                        /**
                        * Sets the labelFontFamily.
                        * @param labelFontFamily The new labelFontFamily.
                        */
                        setLabelFontFamily(labelFontFamily: TcHmi.FontFamily | null | undefined): void;
                        /**
                        * Returns the labelFontFamily.
                        * @returns The labelFontFamily.
                        */
                        getLabelFontFamily(): string | null;
                        /**
                        * Sets the labelFontSize.
                        * @param labelFontSize  The new labelFontSize.
                        */
                        setLabelFontSize(labelFontSize: number | null): void;
                        /**
                        * Returns the labelFontSize.
                        * @returns The labelFontSize.
                        */
                        getLabelFontSize(): number | null;
                        /**
                        * Sets the labelFontSizeUnit.
                        * @param labelFontSizeUnit  The new labelFontSizeUnit.
                        */
                        setLabelFontSizeUnit(labelFontSizeUnit: TcHmi.FontSizeUnit | null): void;
                        /**
                        * Returns the labelFontSizeUnit.
                        * @returns The labelFontSizeUnit.
                        */
                        getLabelFontSizeUnit(): FontSizeUnit | null;
                        /**
                        * Sets the labelFontWeight.
                        * @param labelFontWeight  The new labelFontWeight.
                        */
                        setLabelFontWeight(labelFontWeight: TcHmi.FontWeight | null): void;
                        /**
                        * Returns the labelFontWeight.
                        * @returns The labelFontWeight.
                        */
                        getLabelFontWeight(): FontWeight | null;
                        /**
                        * Sets the axisNameFontFamily.
                        * @param axisNameFontFamily  The new axisNameFontFamily.
                        */
                        setAxisNameFontFamily(axisNameFontFamily: TcHmi.FontFamily | null | undefined): void;
                        /**
                        * Returns the axisNameFontFamily.
                        * @returns The axisNameFontFamily.
                        */
                        getAxisNameFontFamily(): string | null;
                        /**
                        * Sets the axisNameFontSize.
                        * @param axisNameFontSize  The new axisNameFontSize.
                        */
                        setAxisNameFontSize(axisNameFontSize: number | null): void;
                        /**
                        * Returns the axisNameFontSize.
                        * @returns The axisNameFontSize.
                        */
                        getAxisNameFontSize(): number | null;
                        /**
                        * Sets the axisNameFontSizeUnit.
                        * @param axisNameFontSizeUnit  The new axisNameFontSizeUnit.
                        */
                        setAxisNameFontSizeUnit(axisNameFontSizeUnit: TcHmi.FontSizeUnit | null): void;
                        /**
                        * Returns the axisNameFontSizeUnit.
                        * @returns The axisNameFontSizeUnit.
                        */
                        getAxisNameFontSizeUnit(): FontSizeUnit | null;
                        /**
                        * Sets the axisNameFontWeight.
                        * @param axisNameFontWeight  The new axisNameFontWeight.
                        */
                        setAxisNameFontWeight(axisNameFontWeight: TcHmi.FontWeight | null): void;
                        /**
                        * Returns the axisNameFontWeight.
                        * @returns The axisNameFontWeight.
                        */
                        getAxisNameFontWeight(): FontWeight | null;
                    }
                }
            }
        }
    }
}
declare module TcHmi {
    module Controls {
        module Beckhoff {
            module TcHmiScopeControl {
                module Charting {
                    class LineGraph {
                        /** The canvas as HTMLCanvasElement. */
                        protected __canvas: HTMLCanvasElement | undefined;
                        /** The canvas context as CanvasRenderingContext2D. */
                        protected __context: CanvasRenderingContext2D | null;
                        /** The points for the graph. */
                        protected __points: LineGraph.Point[] | null;
                        /** The point value from zero points for the graph. */
                        protected __zeroPoint: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Position | null;
                        /** The point value from zero points for the graph. */
                        protected __lineSeries: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.LineSeries[] | null;
                        /** The layout for the graph. */
                        protected __graphLayout: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.ScopeGraphLayout | null;
                        /** The size for the grid. */
                        protected __gridSizeLayout: {
                            dimensions: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Dimensions;
                            position: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Position;
                        };
                        /**
                        * Creates a new LineGraph.
                        * @param canvas The optional canvas element to drawing.
                        */
                        constructor(canvas: HTMLCanvasElement, graphLayout: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.ScopeGraphLayout | null, gridSize: {
                            dimensions: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Dimensions;
                            position: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Position;
                        });
                        /**
                        * Draws the lineGraph to the canvas.
                        */
                        draw(): void;
                        /**
                        * Draws the line from start to end with the current lineState.
                        * @param start The index of the first element in the line.
                        * @param end The index of the last element in the line.
                        * @param current The current lineState of the line.
                        */
                        private __renderLineSegment;
                        /**
                        * Draws the mark from start to end with the current markState.
                        * @param start The index of the first element in the line.
                        * @param end The index of the last element in the line.
                        * @param current The current lineState of the line.
                        */
                        private __renderMarkSegment;
                        /**
                        * Draws the fill area from start to end with the current fillState.
                        * @param start The index of the first element in the line.
                        * @param end The index of the last element in the line.
                        * @param current The current lineState of the line.
                        */
                        private __renderFillSegment;
                        /**
                        * Sets the points.
                        * @param points The new points.
                        */
                        setPoints(points: LineGraph.Point[]): void;
                        /**
                        * Sets the zeroPoint.
                        * @param zeroPoint The new zeroPoint value.
                        */
                        setZeroPoint(zeroPoint: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.Position): void;
                        /**
                        * Sets the lineSeries.
                        * @param lineSeries The new lineSeries value.
                        */
                        setLineSeries(lineSeries: Beckhoff.TcHmiScopeControl.TcHmiScopeControl.LineSeries[]): void;
                    }
                    module LineGraph {
                        interface Point {
                            x: number;
                            y: number;
                        }
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiScopeControl.d.ts.map