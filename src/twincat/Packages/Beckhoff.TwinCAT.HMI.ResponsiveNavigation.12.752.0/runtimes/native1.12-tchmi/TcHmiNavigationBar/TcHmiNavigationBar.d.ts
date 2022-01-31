declare module TcHmi {
    module Controls {
        module ResponsiveNavigation {
            class TcHmiNavigationBar extends TcHmi.Controls.System.TcHmiControl {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __menuOpen: boolean;
                protected __mobileMode: boolean | null;
                protected __desktopView: boolean | null;
                protected __curHeadElement: HTMLElement | null | undefined;
                protected __showMenuEvents: string;
                protected __destroyOnResizedListener: DestroyFunction | null;
                protected __regionChangeEvent: DestroyFunction | null | undefined;
                protected __menuSourceData: any;
                protected __menuSourceDataRaw: any;
                protected __lastcalledParameter: string | null;
                protected __lastCalledPage: string | null;
                protected __switchBreakpoint: number | null | undefined;
                protected __enableMobileSwitch: boolean | null | undefined;
                protected __alignment: string | null | undefined;
                protected __listenToWindowResize: boolean | null | undefined;
                protected __mouseOverShow: boolean | null | undefined;
                protected __mouseOverShowDelay: number;
                protected __mouseOverShowTimeout: number;
                protected __navContentControl: ResponsiveNavigation.TcHmiNavigationContent | null | undefined;
                protected __breadCrumbControlId: string | null | undefined;
                protected __targetRegionControl: TcHmi.Controls.System.TcHmiRegion | null | undefined;
                protected __navContentControlSymbolDestroyWatch: DestroyFunction | null | undefined;
                protected __navContentControlSymbol: TcHmi.Symbol<ResponsiveNavigation.TcHmiNavigationContent> | null | undefined;
                protected __breadCrumbControlSymbolDestroyWatch: DestroyFunction | null | undefined;
                protected __breadCrumbControlSymbol: TcHmi.Symbol<ResponsiveNavigation.TcHmiBreadcrumb> | null | undefined;
                protected __targetRegionControlSymbolDestroyWatch: DestroyFunction | null | undefined;
                protected __targetRegionControlSymbol: TcHmi.Symbol<TcHmi.Controls.System.TcHmiRegion> | null | undefined;
                protected __highlightColor: SolidColor | null | undefined;
                protected __fontColor: SolidColor | null | undefined;
                protected __triangleColor: SolidColor | null | undefined;
                protected __paddingLeftRight: number | null | undefined;
                protected __paddingLeftRightUnit: string | null | undefined;
                protected __fontSize: number | null | undefined;
                protected __fontSizeUnit: string | null | undefined;
                protected __mobileMenuImage: string | null | undefined;
                protected __mobileIconWidth: number | null | undefined;
                protected __mobileIconWidthUnit: string | null | undefined;
                protected __mobileIconHeight: number | null | undefined;
                protected __mobileIconHeightUnit: string | null | undefined;
                protected __elementTemplateRoot: JQuery;
                protected __elementNavigationLine: JQuery;
                protected __headlineContainer: JQuery | null | undefined;
                protected __curHeadlineList: JQuery | null | undefined;
                protected __myTriangle: JQuery | null | undefined;
                protected __windowResizeHandler: (event: MouseEvent) => void;
                /** We have an active mouse/touch down */
                protected __lock: boolean;
                protected __lockTimeStamp: number;
                protected __lastEvent: {
                    timestamp: number;
                    type: string;
                    element: HTMLElement | null | undefined;
                    dataId: string | null;
                    elementId: string | null | undefined;
                };
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 */
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                protected __onWindowResize(): () => void;
                /**
                 * Get AccesConfig with injected access rights of the navigation elements
                 */
                getAccessConfig(): AccessControl[];
                getDescriptionAccessByName(): {
                    defaultValueInternal: boolean;
                };
                protected __getSubRights(dataObject: any, accessList: AccessControl[]): AccessControl[];
                protected __generateItemIds(curPath: any, dataObject: any): any;
                /********* Interfaces ***********/
                raiseOnPageCalled(eventName: string | null | undefined, dataId: string | null | undefined, page: string | null | undefined): void;
                raiseOnMenuClosed(): void;
                setLastHeadId(id: string | undefined): void;
                /************************************** Functions **************************************/
                protected __generatePathObject(dataId: string): TcHmiBreadcrumb.IPathElement[] | null;
                protected __loadNavContent(curHeadIndex?: string): void;
                closeMenu(): void;
                protected __hideNavContent(): void;
                protected __getTriangleElement(): JQuery<HTMLElement>;
                protected __getColorOfColorObject(colorObject: SolidColor | null | undefined): string | null;
                protected __clearHeadline(): void;
                protected __isMobileView(): boolean;
                protected __checkBrowserSwitch(): void;
                protected __createNavigationLine(): void;
                protected __hasChildren(elementList: any, index: string | undefined): boolean;
                protected __isNotEmpty(element: any): boolean;
                protected __onRegionContentChanged(): (event: EventProvider.Event) => void;
                protected __searchForActiveContent(elementList: any): boolean;
                /************************************** Setter getter processor **************************************/
                setMenuSourceData(valueNew: object | null): void;
                protected __onResolverForMenuSourceDataCallback: (data: Symbol.ObjectResolver.IWatchResultObject<object>) => void;
                getMenuSourceData(): any;
                getMenuSourceDataRaw(): any;
                protected __processMenuSourceData(): void;
                setHighlightColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForHighLightColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                getHighlightColor(): SolidColor | null | undefined;
                protected __processHighlightColor(): void;
                setFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                getFontColor(): SolidColor | null | undefined;
                protected __processFontColor(): void;
                setTriangleColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForTriangleColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                getTriangleColor(): SolidColor | null | undefined;
                protected __processTriangleColor(): void;
                setFontSize(valueNew: string | null): void;
                getFontSize(): number | null | undefined;
                protected __processFontSize(): void;
                setFontSizeUnit(valueNew: string | null): void;
                getFontSizeUnit(): string | null | undefined;
                protected __processFontSizeUnit(): void;
                setPaddingLeftRight(valueNew: number | null): void;
                getPaddingLeftRight(): number | null | undefined;
                protected __processPaddingLeftRight(): void;
                setPaddingLeftRightUnit(valueNew: string | null): void;
                getPaddingLeftRightUnit(): string | null | undefined;
                protected __processPaddingLeftRightUnit(): void;
                setSwitchBreakpoint(valueNew: number | null): void;
                getSwitchBreakpoint(): number | null | undefined;
                protected __processSwitchBreakpoint(): void;
                setEnableMobileSwitch(valueNew: boolean | null): void;
                getEnableMobileSwitch(): boolean | null | undefined;
                protected __processEnableMobileSwitch(): void;
                setMobileMenuImage(valueNew: string | null): void;
                getMobileMenuImage(): string | null | undefined;
                protected __processMobileMenuImage(): void;
                setMobileIconWidth(valueNew: number | null): void;
                getMobileIconWidth(): number | null | undefined;
                protected __processMobileIconWidth(): void;
                setMobileIconWidthUnit(valueNew: string | null): void;
                getMobileIconWidthUnit(): string | null | undefined;
                protected __processMobileIconWidthUnit(): void;
                setMobileIconHeight(valueNew: number | null): void;
                getMobileIconHeight(): number | null | undefined;
                protected __processMobileIconHeigth(): void;
                setMobileIconHeightUnit(valueNew: string | null): void;
                getMobileIconHeightUnit(): string | null | undefined;
                protected __processMobileIconHeigthUnit(): void;
                /**
                 * DesktopView setter
                 * This setter is protected because DesktopView is a readonly attribute.
                 * @param valueNew The new value for desktopView.
                 */
                protected __setDesktopView(valueNew: boolean | null): void;
                getDesktopView(): boolean | null;
                /**
                 * DEPRECATED
                 * Please use setNavContentControlSymbol
                 * @deprecated Please use setNavContentControlSymbol
                 * @param valueNew The new value for navContetentControl.
                 */
                setNavContentControl(valueNew: ResponsiveNavigation.TcHmiNavigationContent): void;
                /**
                 * DEPRECATED
                 * Please use getNavContentControlSymbol
                 * @deprecated Please use getNavContentControlSymbol
                 */
                getNavContentControl(): TcHmiNavigationContent | null | undefined;
                /**
                 * DEPRECATED
                 * @deprecated
                 */
                protected __processNavContentControl(): void;
                /**
                 * DEPRECATED
                 * Please use setBreadCrumbControlSymbol
                 * @deprecated Please use setBreadCrumbControlSymbol
                 * @param valueNew The new value for breadcrumbControl.
                 */
                setBreadCrumbControl(valueNew: string | null): void;
                /**
                 * DEPRECATED
                 * Please use getBreadCrumbControlSymbol
                 * @deprecated Please use setBreadCrumbControlSymbol
                 */
                getBreadCrumbControl(): string | null | undefined;
                /**
                 * DEPRECATED
                 * @deprecated
                 */
                protected __processBreadCrumbControl(): void;
                /**
                 * NavContentControlSymbol setter
                 * @param valueNew The new value for navContentControlSymbol.
                 */
                setNavContentControlSymbol(valueNew: TcHmi.Symbol<ResponsiveNavigation.TcHmiNavigationContent> | null): void;
                /**
                 * NavContentControlSymbol getter
                 */
                getNavContentControlSymbol(): Symbol<TcHmiNavigationContent> | null | undefined;
                protected __processNavContentControlSymbol(ctrl?: ResponsiveNavigation.TcHmiNavigationContent | null): void;
                protected __onNavContentControlSymbolWatch(): (data: TcHmi.Symbol.IReadResultObject<ResponsiveNavigation.TcHmiNavigationContent>) => void;
                /**
                 * BreadCrumbControlSymbol setter
                 * @param valueNew The new value for breadcrumbControlSymbol.
                 */
                setBreadCrumbControlSymbol(valueNew: TcHmi.Symbol<ResponsiveNavigation.TcHmiBreadcrumb> | null): void;
                /**
                 * BreadCrumbControlSymbol getter
                 */
                getBreadCrumbControlSymbol(): Symbol<TcHmiBreadcrumb> | null | undefined;
                protected __processBreadCrumbControlSymbol(ctrl?: ResponsiveNavigation.TcHmiBreadcrumb | null): void;
                protected __onBreadCrumbControlSymbolWatch(): (data: TcHmi.Symbol.IReadResultObject<ResponsiveNavigation.TcHmiBreadcrumb>) => void;
                /**
                 * DEPRECATED
                 * @deprecated
                 * @param valueNew The new value for targetRegionControl.
                 */
                setTargetRegionControl(valueNew: TcHmi.Controls.System.TcHmiRegion | null): void;
                /**
                 * DEPRECATED
                 * @deprecated
                 */
                getTargetRegionControl(): System.TcHmiRegion | null | undefined;
                /**
                 * TargetRegionControlSymbol setter
                 * @param valueNew The new value for targetRegionControlSymbol.
                 */
                setTargetRegionControlSymbol(valueNew: TcHmi.Symbol<TcHmi.Controls.System.TcHmiRegion> | null): void;
                /**
                * TargetRegionControlSymbol getter
                */
                getTargetRegionControlSymbol(): Symbol<System.TcHmiRegion> | null | undefined;
                protected __processTargetRegionControlSymbol(ctrl?: TcHmi.Controls.System.TcHmiRegion | null): void;
                protected __onTargetRegionControlSymbol(): (data: TcHmi.Symbol.IReadResultObject<TcHmi.Controls.System.TcHmiRegion>) => void;
                setAlignment(valueNew: string | null): void;
                getAlignment(): string | null | undefined;
                protected __processAlignment(): void;
                /**
                 * LastEventParameter setter
                 * This setter is protected because LastEventParameter is a readonly attribute.
                 * @param valueNew The new value for lastEventParameter.
                 */
                protected __setLastEventParameter(valueNew: string | null): void;
                getLastEventParameter(): string | null;
                /**
                 * LastPage setter
                 * This setter is protected because LastPage is a readonly attribute.
                 * @param valueNew The new value for lastPage.
                 */
                protected __setLastPage(valueNew: string | null): void;
                getLastPage(): string | null;
                setListenToWindowResize(valueNew: boolean | null): void;
                getListenToWindowResize(): boolean | null | undefined;
                protected __processListenToWindowResize(): void;
                setMouseOverShow(valueNew: boolean | null): void;
                getMouseOverShow(): boolean | null | undefined;
                protected __processMouseOverShow(): void;
            }
        }
    }
}
//# sourceMappingURL=TcHmiNavigationBar.d.ts.map