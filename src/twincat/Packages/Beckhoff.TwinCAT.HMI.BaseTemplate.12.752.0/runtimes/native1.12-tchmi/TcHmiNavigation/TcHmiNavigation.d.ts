declare module TcHmi {
    module Controls {
        module BaseTemplate {
            class TcHmiNavigation extends TcHmi.Controls.System.TcHmiControl {
                #private;
                /**
                 * Constructor of the control
                 * @param element Element from HTML (internal, do not use)
                 * @param pcElement precompiled Element (internal, do not use)
                 * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** HTML root template */
                protected __elementTemplateRoot: HTMLElement;
                /** HTML navigation root*/
                protected __elementNavigationRoot: HTMLElement;
                /** HTML static navigation root*/
                protected __elementStaticRoot: HTMLElement;
                /** HTML context navigation root*/
                protected __elementContextRoot: HTMLElement;
                /** HTML back button root*/
                protected __elementBackRoot: HTMLElement;
                /** active Content */
                protected __activeElement: TcHmiNavigation.INavigationItem | null | undefined;
                /** target Region  */
                protected __targetRegion: TcHmi.Controls.System.TcHmiRegion | null | undefined;
                /** Region Content Changed Event Destroy Function */
                protected __regionChangeEvent: DestroyFunction | null | undefined;
                /** Optional BreadCrumb control to commit breadcrumb data */
                protected __breadcrumb: TcHmi.Controls.BaseTemplate.TcHmiBreadcrumb | null | undefined;
                /** Navigation Treestructure element */
                protected __navigationStructure: TcHmiNavigation.INavigationItem[];
                /** Navigation History for BackButton & Breadcrumb creation */
                protected __activeHistory: TcHmiNavigation.INavigationItem[];
                /** Backbutton */
                protected __buttonBack: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                /** EventDestroyFunctions */
                protected __eventDestroyFunctions: DestroyFunction[];
                /** text color of the main element */
                protected __textColor: SolidColor | null | undefined;
                /** text font size of the navigation buttons */
                protected __textFontSize: number | undefined;
                /** text font size unit of the navigation buttons */
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                /** icon height */
                protected __iconHeight: number | null | undefined;
                /** icon height unit */
                protected __iconHeightUnit: DimensionUnit | undefined;
                /** icon width */
                protected __iconWidth: number | null | undefined;
                /** icon height unit */
                protected __iconWidthUnit: DimensionUnit | undefined;
                /** static menu height */
                protected __staticMenuHeight: number | null | undefined;
                /** static menu height */
                protected __staticMenuHeightUnit: DimensionUnit | undefined;
                /** defines pressed button */
                protected __mouseDownButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                /** defines fokussed button */
                protected __mouseFokus: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                /** mouse up handler for the document */
                protected __mouseupHandler: (event: MouseEvent) => void;
                /** random id counter */
                protected __randomElementId: number;
                /** active theme for adapting icon paths */
                protected __navigationOrientation: 'Horizontal' | 'Vertical' | undefined;
                /** keep lowest sub entries when selected */
                protected __keepLowestLevel: boolean | undefined;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 */
                __init(): void;
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
                  * Create all navigation buttons
                  */
                protected __createNavigation(): void;
                /**
                  * Sets the Content of the targetRegion
                  * @param element The element wich icon sizes will be set.
                  */
                protected __setRegionContent(element: TcHmiNavigation.INavigationItem): void;
                /**
                  * set the height of static and content menu
                  */
                protected __setContentHeights(): void;
                /**
                  * Create a button for a Struct-Element, sets Icon for the button and add Events.
                  * @param element The element containing information of a navigation button.
                  */
                protected __createNavButton(element: TcHmiNavigation.INavigationItem): void;
                /**
                  * convert an svg file to svg html tag to be able to change the stroke color
                  * @param  element The element wich contains the content to be set to the target TcHmiRegion
                  */
                protected __createIcon(element: TcHmiNavigation.INavigationItem): void;
                /**
                  * Creates and appends Backbutton
                  */
                protected __createBackButton(): void;
                /**
                 * Destroy the ContextMenu
                 */
                protected __destroyStaticMenu(): void;
                /**
                 * Destroy the ContextMenu
                 */
                protected __destroyContextMenu(): void;
                /**
                  * Create the ContextMenu
                  */
                protected __createContextMenu(): void;
                /**
                * Creates Breadcrumb INavigationItem and sends it to connected breadcrumb control
                */
                protected __createBreadcrumb(): void;
                protected __breadcrumbCallbackFunction: (content: string) => void;
                /**
                 * recursive funtion to create the Breadcrumb path
                 * @param element The element structure
                 */
                protected __getBreadcrumbPath(element: TcHmiNavigation.INavigationItem[]): TcHmiNavigation.INavigationItem[] | null;
                /**
                 * Set active Struct-Element. Handle activeHistory and create a new context menu.
                 * @param element Element structure
                 */
                protected __setActiveElement(element: TcHmiNavigation.INavigationItem): void;
                /**
                 * display the last entry in the page history. called by back button
                 */
                protected __backAction(): void;
                /**
                 * recursive function to search active Content in navigation structure
                 * @param element Element structure
                 */
                protected __searchForActiveContent(element: TcHmiNavigation.INavigationItem[]): void;
                protected __getParentStructure(structure: TcHmiNavigation.INavigationItem[], childElement: TcHmiNavigation.INavigationItem): TcHmiNavigation.INavigationItem[] | null;
                /**
                 * Set normal text & icon for a struct-button
                 * @param element Element structure
                 */
                protected __setNormalIcon(element: TcHmiNavigation.INavigationItem): void;
                /**
                 * Set pressed text & icon for a struct-button
                 * @param element Element structure
                 */
                protected __setPressedIcon(element: TcHmiNavigation.INavigationItem): void;
                /**
                 * Set active text & icon for a struct-button
                 * @param element Element structure
                 */
                protected __setActiveIcon(element: TcHmiNavigation.INavigationItem): void;
                /**
                * update icons of displayed elements after Theme change
                */
                protected __updateIcons(): void;
                /**
                 * Get AccesConfig with injected access rights of the navigation elements
                 */
                getAccessConfig(): AccessControl[];
                /**
                 * get access rights of the navigation elements
                 * @param element Element structure
                 * @param accesList List of accesData
                 */
                protected __getSubRights(element: TcHmiNavigation.INavigationItem[], accessList: AccessControl[]): AccessControl[];
                /**
                 * Generic 'OnButtonUp'-/ 'onTouchEnd' Event Callbackfunction for any Struct-Element-Button
                 * @param element Element structure
                 */
                protected __onMouseUp(element?: TcHmiNavigation.INavigationItem): (event: MouseEvent | EventProvider.Event) => void;
                /**
                 * Generic 'OnButtonDown'-/ 'onTouchStart' Event Callbackfunction for any Struct-Element-Button
                 * @param element Element structure
                 */
                protected __onNavButtonDown(element: TcHmiNavigation.INavigationItem): (event: EventProvider.Event) => void;
                /**
                 * Generic 'OnButtonLeave'-/ 'onTouchCancel' Event Callbackfunction for any Struct-Element-Button
                 * @param element Element structure
                 */
                protected __onNavButtonCancel(element: TcHmiNavigation.INavigationItem): (event: EventProvider.Event) => void;
                /**
                 * Generic 'OnButtonLeave'-/ 'onTouchCancel' Event Callbackfunction for any Struct-Element-Button
                 * @param element Element structure
                 */
                protected __onNavButtonEnter(element: TcHmiNavigation.INavigationItem): (event: EventProvider.Event) => void;
                /**
                 * 'OnPressed' Event Callbackfunction for BackButton.
                 */
                protected __onBackButtonPressed(): (event: EventProvider.Event) => void;
                /**
                 * 'OnButtonDown' - / 'onTouchStart' Event Callbackfunction for BackButton.
                 */
                protected __onBackButtonDown(): (event: EventProvider.Event) => void;
                /**
                 * 'OnButtonLeave'-/ 'onTouchCancel' Event Callbackfunction for BackButton.
                 */
                protected __onBackButtonCancel(): (event: EventProvider.Event) => void;
                /**
                 * 'OnButtonEnter'Event Callbackfunction for BackButton.
                 */
                protected __onBackButtonEnter(): (event: EventProvider.Event) => void;
                /**
                 * Event Callbackfunction for Content changed in the target Region to detect external actions.
                 */
                protected __onRegionContentChanged(): (event: EventProvider.Event) => void;
                /**
                 * Sets the content value and calls the associated process function (processNavigationStructure).
                 * @param valueNew The new value for the content attribute as string. Relative path value.
                 */
                setNavigationStructure(valueNew: any | null): void;
                /**
                 * The watch callback for the textActiveColor object resolver.
                 */
                protected __onResolverForNavgiationStructureWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiNavigation.INavigationItem[]>) => void;
                /**
                * Returns the current content value.
                * @returns The current value of the content member variable as string. Relative path value.
                */
                getNavigationStructure(): TcHmiNavigation.INavigationItem[];
                protected __processNavigationStructure(): void;
                /**
                * give each element in the navigationstructure an id
                * @param element The root element of the structure
                */
                protected __setNavElementId(element: TcHmiNavigation.INavigationItem[]): void;
                /**
                * Sets the text color and calls the associated process function (processTextColor).
                * @param valueNew The new value for textFColor.
                */
                setTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 */
                protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of textColor.
                * @returns The current value of textColor.
                */
                getTextColor(): SolidColor | null | undefined;
                /**
                * Processes the current textColor attribute value.
                */
                protected __processTextColor(): void;
                /**
                 * Sets the content value and calls the associated process function (processContent).
                 * @param valueNew The new value for the content attribute as string. Relative path value.
                 *
                 */
                setTargetRegion(valueNew: TcHmi.Controls.System.TcHmiRegion | null): void;
                /**
                * Returns the current targetRegion value.
                * @returns The current value of the content member variable as string. Relative path value.
                */
                getTargetRegion(): System.TcHmiRegion | null | undefined;
                protected __processTargetRegion(): void;
                /**
                 * Sets the content value and calls the associated process function (processContent).
                 * @param valueNew The new value for the content attribute as string. Relative path value.
                 */
                setBreadcrumb(valueNew: TcHmi.Controls.BaseTemplate.TcHmiBreadcrumb | null): void;
                /**
                * Returns the current TcHmiBreadcrumb value.
                * @returns The current value of the content member variable as string. Relative path value.
                */
                getBreadcrumb(): TcHmiBreadcrumb | null | undefined;
                protected __processBreadcrumb(): void;
                /**
                * Sets the font size and calls the associated process function (processTextFontSize).
                * @param valueNew The new value for textFontSize.
                */
                setTextFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of textFontSize.
                * @returns The current value of textFontSize.
                */
                getTextFontSize(): number | undefined;
                /**
                * Processes the current textFontSize attribute value.
                */
                protected __processTextFontSize(): void;
                /**
                * Sets the font size unit and calls the associated process function (processTextFontSizeUnit).
                * @param valueNew The new value for textFontSizeUnit.
                */
                setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                * Returns the current value of textFontSizeUnit.
                * @returns The current value of textFontSizeUnit.
                */
                getTextFontSizeUnit(): FontSizeUnit | undefined;
                /**
                * Processes the current textFontSizeUnit attribute value.
                */
                protected __processTextFontSizeUnit(): void;
                /**
                * Sets the value of the member variable "iconWidth" if the new value is not equal to the current value.
                * and calls the associated process function (processIconWidth) after that.
                * @param valueNew The new value for iconWidth.
                */
                setIconWidth(valueNew: number | null): void;
                /**
                * Returns the current value of the member variable iconWidth.
                * @returns the current value of the member variable iconWidth.
                */
                getIconWidth(): number | null | undefined;
                /**
                * Processes the current value of iconWidth and forwards it to the target html container element.
                */
                protected __processIconWidth(): void;
                /**
                * Sets the value of the member variable "iconWidthUnit" if the new value is not equal to the current value.
                * and calls the associated process function (processIconWidthUnit) after that.
                * @param valueNew The new value for iconWidthUnit.
                */
                setIconWidthUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current value of the member variable iconWidthUnit.
                * @returns the current value of the member variable iconWidthUnit.
                */
                getIconWidthUnit(): DimensionUnit | undefined;
                /**
                * Processes the current value of iconWidthUnit and forwards it to the target html container element.
                */
                protected __processIconWidthUnit(): void;
                /**
                * Sets the value of the member variable "iconHeight" if the new value is not equal to the current value.
                * and calls the associated process function (processIconHeight) after that.
                * @param valueNew The new value for iconHeight.
                */
                setIconHeight(valueNew: number | null): void;
                /**
                * Returns the current value of the member variable iconHeight.
                * @returns the current value of the member variable iconHeight.
                */
                getIconHeight(): number | null | undefined;
                /**
                * Processes the current value of iconHeight and forwards it to the target html container element.
                */
                protected __processIconHeight(): void;
                /**
                * Sets the value of the member variable "iconHeightUnit" if the new value is not equal to the current value.
                * and calls the associated process function (processIconHeightUnit) after that.
                * @param valueNew The new value for iconHeightUnit.
                */
                setIconHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current value of the member variable iconHeightUnit.
                * @returns the current value of the member variable iconHeightUnit.
                */
                getIconHeightUnit(): DimensionUnit | undefined;
                /**
                * Processes the current value of iconHeightUnit and forwards it to the target html container element.
                */
                protected __processIconHeightUnit(): void;
                /**
                * Sets the value of the member variable "StaticMenuHeight" if the new value is not equal to the current value.
                * and calls the associated process function (__processStaticMenuHeight) after that.
                * @param valueNew The new value for StaticMenuHeight.
                */
                setStaticMenuHeight(valueNew: number | null): void;
                /**
                * Returns the current value of the member variable StaticMenuHeight.
                * @returns the current value of the member variable StaticMenuHeight.
                */
                getStaticMenuHeight(): number | null | undefined;
                /**
                * Processes the current value of StaticMenuHeight and forwards it to the target html container element.
                */
                protected __processStaticMenuHeight(): void;
                /**
                * Sets the value of the member variable "StaticMenuHeighttUnit" if the new value is not equal to the current value.
                * and calls the associated process function (processStaticMenuHeightUnit) after that.
                * @param valueNew The new value for StaticMenuHeightUnit.
                */
                setStaticMenuHeightUnit(valueNew: DimensionUnit | null): void;
                /**
                * Returns the current value of the member variable StaticMenuHeightUnit.
                * @returns the current value of the member variable StaticMenuHeightUnit.
                */
                getStaticMenuHeightUnit(): DimensionUnit | undefined;
                /**
                * Processes the current value of StaticMenuHeightUnit and forwards it to the target html container element.
                */
                protected __processStaticMenuHeightUnit(): void;
                /**
                * Sets the value of the member variable "NavigationOrientation" if the new value is not equal to the current value
                * and calls the associated process function (processNavigationOrientation) after that.
                * @param valueNew The new value for backButtonText.
                */
                setNavigationOrientation(valueNew: 'Horizontal' | 'Vertical' | null): void;
                /**
                * Returns the current value of the member variable NavigationOrientation.
                * @returns the current value of the member variable NavigationOrientation.
                */
                getNavigationOrientation(): "Horizontal" | "Vertical" | undefined;
                /**
                * Processes the current value of NavigationOrientation.
                */
                protected __processNavigationOrientation(): void;
                /**
                * Sets the value of KeepLowestLevel and calls the associated process function (processKeepLowestLevel).
                * @param  valueNew The new value for KeepLowestLevel.
                */
                setKeepLowestLevel(valueNew: boolean | null): void;
                /**
                * Returns the current value of KeepLowestLevel.
                * @returns The current value of KeepLowestLevel.
                */
                getKeepLowestLevel(): boolean | undefined;
            }
            module TcHmiNavigation {
                interface INavigationItem {
                    name: string;
                    id: string;
                    content: string;
                    icon_n: string;
                    icon_p: string;
                    icon_a: string;
                    subItem: INavigationItem[];
                    accessRights: AccessControl[];
                    tchmi_button: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                    icon: JQuery | undefined;
                    events: DestroyFunction[];
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiNavigation.d.ts.map