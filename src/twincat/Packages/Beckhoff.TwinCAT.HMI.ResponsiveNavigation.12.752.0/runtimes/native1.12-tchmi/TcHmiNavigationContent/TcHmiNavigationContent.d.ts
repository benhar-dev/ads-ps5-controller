declare module TcHmi {
    module Controls {
        module ResponsiveNavigation {
            class TcHmiNavigationContent extends TcHmi.Controls.System.TcHmiControl {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __curRowElement: HTMLElement | null | undefined;
                protected __lastExpandedElement: HTMLElement | null | undefined;
                protected __animationTime: number | undefined;
                protected __menuSourceData: any;
                protected __masterID: string | null | undefined;
                protected __masterControl: any;
                protected __mouseOverShow: boolean | null | undefined;
                protected __mouseOverShowDelay: number;
                protected __mouseOverShowTimeout: number;
                protected __mouseOverCloseTimeout: number;
                protected __mobileView: boolean;
                protected __contentOpen: boolean;
                protected __paddingLeftRight: number | null | undefined;
                protected __paddingLeftRightUnit: string | null | undefined;
                protected __columnElementMarginTop: number | null | undefined;
                protected __columnElementMarginTopUnit: string | null | undefined;
                protected __mobileElementMarginTop: number | null | undefined;
                protected __mobileElementMarginTopUnit: string | null | undefined;
                protected __showIconsMobile: boolean | null | undefined;
                protected __closeText: string | null | undefined;
                protected __showMenuEvents: string | null | undefined;
                protected __autoCollapseElements: boolean | null | undefined;
                protected __autoExpandElements: boolean | null | undefined;
                protected __autoCloseMenu: boolean | null | undefined;
                protected __alignment: string | null | undefined;
                protected __subtitleFontSize: number | null | undefined;
                protected __subtitleFontSizeUnit: string | null | undefined;
                protected __columnTitleFontSize: number | null | undefined;
                protected __columnTitleFontSizeUnit: string | null | undefined;
                protected __columnElementFontSize: number | null | undefined;
                protected __columnElementFontSizeUnit: string | null | undefined;
                protected __closeFontSize: number | null | undefined;
                protected __closeFontSizeUnit: string | null | undefined;
                protected __fontColor: SolidColor | null | undefined;
                protected __menuBackgroundColor: Color | null | undefined;
                protected __closeImage: string | null | undefined;
                protected __subMenuImage: string | null | undefined;
                protected __elementTemplateRoot: JQuery;
                protected __elementNavigationContent: JQuery;
                protected __elementNavigationLine: JQuery | null | undefined;
                protected __lastEvent: {
                    timestamp: number;
                    type: string;
                    element: HTMLElement;
                };
                protected __mouseupHandler: (event: MouseEvent) => void;
                protected __mousemoveHandler: (event: MouseEvent) => void;
                /** Handle touch gestures and touchlock */
                protected __touchInfo: {
                    x: number | null;
                    y: number | null;
                    validTouch: boolean;
                    lock: boolean;
                    lockTimeStamp: number;
                };
                protected __requestAnimationFrameID: number;
                /** Map of the animated HTMLElement and the requestAnimationFrameID */
                protected __runningAnimations: Map<HTMLElement, number>;
                protected __documentResizedHandler: (event: Event) => void;
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                /****************** interfaces ********************/
                protected __closeMenu(): void;
                protected __callOnPageCalled(eventName: string | null | undefined, dataId: string | null | undefined, page: string | null | undefined): void;
                protected __setLastHeadId(id: string | undefined): void;
                loadContentView(curHeadIndex: string | undefined, mobileView: boolean, enableMobileSwitch: boolean | null | undefined, alignment: string | null | undefined): void;
                setMenuSourceData(valueNew: any[] | null): void;
                setMasterID(valueNew: string | null): void;
                setShowMenuEvents(mouseOverShow: boolean | null | undefined, menuEventNames: string | null | undefined): void;
                protected __showNavContent(): void;
                hideNavContent(): void;
                /****************** functions ********************/
                protected __getColorOfColorObject(colorObject: SolidColor | null | undefined): string | null;
                protected __clearContent(): void;
                protected __hasChildren(elementList: any, index: number | string | undefined): boolean;
                protected __isNotEmpty(element: any): boolean;
                protected __round2Decimals(value: number): number;
                protected __loadContent(curHeadIndex: any, enableMobileSwitch: boolean | null | undefined): void;
                protected __onOutsideElementsCloseHandler(): (event: Event) => void;
                protected __getCloseContentElement(): HTMLDivElement;
                protected __createDesktopContent(curHeadIndex: any): HTMLDivElement;
                protected __createSubElements(elementContainer: any): HTMLUListElement;
                protected __onSubElementFunctionHandler(element: HTMLElement): (e: Event) => void;
                protected __onMouseUp(): (event: MouseEvent) => void;
                protected __onMouseMove(): (event: MouseEvent) => void;
                protected __closeAllButNotMe(element: HTMLElement): void;
                protected __openSubElement(element: HTMLElement, slideDownTime: number, mobileView: boolean): void;
                protected __closeSubElement(element: HTMLElement, slideUpTime: number, mobileView: boolean): void;
                protected __openElement(element: HTMLElement, slideDownTime: number): void;
                protected __closeElement(element: HTMLElement, slideUpTime: number, collapseChildren?: boolean): void;
                protected __slideDown(element: HTMLElement, time: number, callback?: () => void): void;
                protected __slideUp(element: HTMLElement, time: number): void;
                protected __createMobileContent(): HTMLElement;
                protected __createFirstHierarchyMobile(elementContainer: any): HTMLUListElement;
                protected __onResized(): (event: Event) => void;
                /************************************** Setter getter processor **************************************/
                /**
                * Processes the current height and height unit.
                */
                __processHeight(): void;
                __processMaxHeight(): void;
                /**
                * Sets the value of the height mode attribute.
                * @param valueNew The new height mode value..
                */
                setHeightMode(valueNew: SizeModeWithContent | null): void;
                protected __processHeightMode(): void;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
                 */
                __getContentHeight(): number | null;
                setPaddingLeftRight(valueNew: number | null): void;
                getPaddingLeftRight(): number | null | undefined;
                protected __processPaddingLeftRight(): void;
                setPaddingLeftRightUnit(valueNew: string | null): void;
                getPaddingLeftRightUnit(): string | null | undefined;
                protected __processPaddingLeftRightUnit(): void;
                setColumnElementMarginTop(valueNew: number | null): void;
                getColumnElementMarginTop(): number | null | undefined;
                protected __processColumnElementMarginTop(): void;
                setColumnElementMarginTopUnit(valueNew: string | null): void;
                getColumnElementMarginTopUnit(): string | null | undefined;
                protected __processColumnElementMarginTopUnit(): void;
                setMobileElementMarginTop(valueNew: number | null): void;
                getMobileElementMarginTop(): number | null | undefined;
                protected __processMobileElementMarginTop(): void;
                setMobileElementMarginTopUnit(valueNew: string | null): void;
                getMobileElementMarginTopUnit(): string | null | undefined;
                protected __processMobileElementMarginTopUnit(): void;
                setSubtitleFontSize(valueNew: number | null): void;
                getSubtitleFontSize(): number | null | undefined;
                protected __processSubtitleFontSize(): void;
                setSubtitleFontSizeUnit(valueNew: string | null): void;
                getSubtitleFontSizeUnit(): string | null | undefined;
                protected __processSubtitleFontSizeUnit(): void;
                setColumnTitleFontSize(valueNew: number | null): void;
                getColumnTitleFontSize(): number | null | undefined;
                protected __processColumnTitleFontSize(): void;
                setColumnTitleFontSizeUnit(valueNew: string | null): void;
                getColumnTitleFontSizeUnit(): string | null | undefined;
                protected __processColumnTitleFontSizeUnit(): void;
                setColumnElementFontSize(valueNew: number | null): void;
                getColumnElementFontSize(): number | null | undefined;
                protected __processColumnElementFontSize(): void;
                setColumnElementFontSizeUnit(valueNew: string | null): void;
                getColumnElementFontSizeUnit(): string | null | undefined;
                protected __processColumnElementFontSizeUnit(): void;
                setCloseFontSize(valueNew: number | null): void;
                getCloseFontSize(): number | null | undefined;
                protected __processCloseFontSize(): void;
                setCloseFontSizeUnit(valueNew: string | null): void;
                getCloseFontSizeUnit(): string | null | undefined;
                protected __processCloseFontSizeUnit(): void;
                setShowIconsMobile(valueNew: boolean | null): void;
                getShowIconsMobile(): boolean | null | undefined;
                protected __processShowIconsMobile(): void;
                setAutoCollapseElements(valueNew: boolean | null): void;
                getAutoCollapseElements(): boolean | null | undefined;
                protected __processAutoCollapseElements(): void;
                setAutoCloseMenu(valueNew: boolean | null): void;
                getAutoCloseMenu(): boolean | null | undefined;
                protected __processAutoCloseMenu(): void;
                setAutoExpandElements(valueNew: boolean | null): void;
                getAutoExpandElements(): boolean | null | undefined;
                setFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                getFontColor(): SolidColor | null | undefined;
                protected __processFontColor(): void;
                setMenuBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForMenuBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                getMenuBackgroundColor(): Color | null | undefined;
                protected __processMenuBackgroundColor(): void;
                setCloseText(valueNew: string | null): void;
                getCloseText(): string | null | undefined;
                protected __processCloseText(): void;
                getAccessConfig(): AccessControl[];
                getDescriptionAccessByName(): {
                    defaultValueInternal: boolean;
                };
                protected __getSubRights(dataObject: any, accessList: AccessControl[]): AccessControl[];
                setCloseImage(valueNew: string | null): void;
                getCloseImage(): string | null | undefined;
                protected __processCloseImage(): void;
                setSubMenuImage(valueNew: string | null): void;
                getSubMenuImage(): string | null | undefined;
                protected __processSubMenuImage(): void;
                /**
                * Sets the AnimationTime attribute.
                * @param valueNew The new value for AnimationTime.
                */
                setAnimationTime(valueNew: number | null): void;
                /**
                * Returns the current value of AnimationTime.
                * @returns The current value of AnimationTime.
                */
                getAnimationTime(): number | undefined;
            }
        }
    }
}
//# sourceMappingURL=TcHmiNavigationContent.d.ts.map