declare module TcHmi {
    module Controls {
        module BaseTemplate {
            class TcHmiHeader extends TcHmi.Controls.System.TcHmiControl {
                #private;
                /**
                 * Constructor of the control
                 * @param element Element from HTML (internal, do not use)
                 * @param pcElement precompiled Element (internal, do not use)
                 * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Root HTML element */
                protected __elementTemplateRoot: HTMLElement;
                /** Left element container */
                protected __elementTemplateLeft: HTMLElement;
                /** Right element container */
                protected __elementTemplateRight: HTMLElement;
                /** Expand element container */
                protected __elementTemplateExpandableContainer: HTMLElement;
                /** Structure wich contains header element data */
                protected __headerItems: TcHmiHeader.IHeaderItems[] | undefined;
                /** Structure wich contains header element data */
                protected __expandedItems: TcHmiHeader.IHeaderItems[] | undefined;
                /** random id counter */
                protected __randomElementId: number;
                /** current available width */
                protected __availableWidth: number | undefined;
                /** element gaps */
                protected __elementMargin: number;
                /** menu is expandable */
                protected __expandable: boolean | undefined;
                /** menu is expanded */
                protected __expandableIsActive: boolean;
                /** ExpandContainer rows */
                protected __expandContainerRows: number;
                /** menu button for collapsed menu */
                protected __expandButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                /** size of the expand button */
                protected __expandButtonSize: number | null;
                /** POPUP */
                /** boolean to show if dropdownbox is open */
                protected __dropDownBoxOpen: boolean;
                /** registered and destroyed only while topmostlayer interaction */
                protected __resizedEventDestroyEvent: DestroyFunction | undefined;
                /** registered and destroyed only while topmostlayer interaction */
                protected __movedEventDestroyEvent: DestroyFunction | undefined;
                /** Event destroy functions */
                protected __eventDestroyFunctions: DestroyFunction[];
                /** localized symbols */
                protected __localizedSymbols: Map<HTMLElement, string>;
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
                  * Destroy the current Header items.
                  * Will be called automatically if system destroys control!
                  */
                protected __destroyHeaderItems(): void;
                /**
                  * create header elements based on the given data
                  */
                protected __createHeaderElements(): void;
                /**
                  * set preferred Height and width for a header element
                  * @param item The header item to set the default element properties.
                  */
                protected __processDefaultHeaderElementProperties(item: TcHmiHeader.IHeaderItems): void;
                /**
                 * append header element to left
                 */
                protected __appendHeaderItems(): void;
                /**
                * adapt the elements width on every resize to fit into the control
                */
                protected __resizeControl(): void;
                /**
                * Check if we need to reserve space for the expand button
                */
                protected __checkForExpandedContainer(): void;
                /**
                * Check if we need to reserve space for the expand button
                */
                protected __checkForFittingControls(): void;
                /**
                * adapt control sizes
                */
                protected __adaptControlSizes(): void;
                /**
                * Event callback for rezise event
                */
                protected __onResized(): (event: EventProvider.Event) => void;
                protected __onLocaleChanged(): () => void;
                /**
                * Event callback for rezise event
                */
                protected __onElementClick(item: TcHmiHeader.IHeaderItems): (event: EventProvider.Event) => void;
                /**
                  * create a the button to expand the Header and display not displayed header elements
                  */
                protected __createExpandButton(): void;
                /**
                  * append the expandbutton
                  */
                protected __appendExpandButton(): void;
                /**
                  * adapt the height of the expandbutton
                  */
                protected __adaptExpandButtonHeigth(): void;
                /**
                  * append the expand container controls
                  */
                protected __appendExpandContainerControls(): void;
                /**
                  * remove the expandbutton
                  */
                protected __removeExpandButton(): void;
                /**
                  * get median element height. Used to set the height of the expand button
                  */
                protected __getAverageHeight(): number;
                /**
                 * function to build or destroy Popup
                 * @param valueNew? Toogles the dropdown
                 */
                protected __setDropDownboxOpen(valueNew?: boolean): void;
                /**
                 * function to adjust dropdown posotion on resize or scroll
                 */
                protected __resizePopup: () => void;
                /**
                 * ExpandButton Mouse Up Event
                 */
                protected __onMouseUp(): (event: EventProvider.Event) => void;
                /**
                  * create a EventLine element and append it to the Control
                  * @param item An item with the itemType 'EventLine' a control will be created and attached to the DOM.
                  */
                protected __createEventLine(item: TcHmiHeader.IHeaderItems): void;
                /**
                  * create a UserManagement element and append it to the Control
                  * @param item An item with the itemType 'UserManagement' a control will be created and attached to the DOM.
                  */
                protected __createUserManagement(item: TcHmiHeader.IHeaderItems): void;
                /**
                  * create a Image element and append it to the Control
                  * @param item An item with the itemType 'Image' a control will be created and attached to the DOM.
                  */
                protected __createImage(item: TcHmiHeader.IHeaderItems): void;
                /** TcHmi_Controls_Beckhoff_TcHmiTextblock-template-text-container
                  * create a Text element and append it to the Control
                  * @param item An item with the itemType 'Text' a control will be created and attached to the DOM.
                  */
                protected __createText(item: TcHmiHeader.IHeaderItems): void;
                /**
                  * create a StateImage element and append it to the Control
                  * @param item An item with the itemType 'StateImage' a control will be created and attached to the DOM.
                  */
                protected __createStateImage(item: TcHmiHeader.IHeaderItems): void;
                /**
                  * create a Time element and append it to the Control
                  * @param item An item with the itemType 'Time' a control will be created and attached to the DOM.
                  */
                protected __createAdsState(item: TcHmiHeader.IHeaderItems): void;
                /**
                  * create a Time element and append it to the Control
                  * @param item An item with the itemType 'Time' a control will be created and attached to the DOM.
                  */
                protected __createTime(item: TcHmiHeader.IHeaderItems): void;
                /**
                  * create a ThemeSelect element and append it to the Control
                  * @param item An item with the itemType 'ThemeSelect' a control will be created and attached to the DOM.
                  */
                protected __createThemeSelect(item: TcHmiHeader.IHeaderItems): void;
                /**
                  * create a LocalizationSelect element and append it to the Control
                  * @param item An item with the itemType 'ThemeSelect' a control will be created and attached to the DOM.
                  */
                protected __createLocalizationSelect(item: TcHmiHeader.IHeaderItems): void;
                /**
                 * Sets the value of the headerItems attribute.
                 * @param valueNew The new value of the HeaderItems
                 */
                setHeaderItems(valueNew: TcHmiHeader.IHeaderItems[] | null): void;
                /**
                * Returns the current headerItems value.
                * @returns the current headerItems value.
                */
                getHeaderItems(): TcHmiHeader.IHeaderItems[] | undefined;
                /**
                * Processes the current headerItems value.
                */
                protected __processHeaderItems(): void;
                /**
                * Sets the advanced mode and calls the associated process function (processExpandable).
                * @param  valueNew The new value for Expandable.
                */
                setExpandable(valueNew: boolean | null): void;
                /**
                * Returns the current value of Expandable.
                * @returns The current value of Expandable.
                */
                getExpandable(): boolean | undefined;
            }
            module TcHmiHeader {
                interface IHeaderItems {
                    /** control representation of the headeritem generated by TcHmiHeader by means of the item type */
                    control: TcHmi.Controls.System.baseTcHmiControl | undefined;
                    /** item Id generated by TcHmiHeader*/
                    id: string | undefined;
                    /** item display status */
                    displayed: boolean;
                    /** Item type */
                    itemType: string;
                    /** display priority */
                    priority: string;
                    /** Alignment of the item in the TcHmiHeader */
                    itemAlign: 'Left' | 'Right';
                    /** prefered width of the item */
                    prefWidth: number;
                    /** unit of the prefered width  */
                    prefWidthUnit: DimensionUnit;
                    /** prefered height of the item */
                    prefHeight: number;
                    /** unit of the prefered height */
                    prefHeightUnit: DimensionUnit;
                    /** minimum width of the item */
                    minWidth: number;
                    /** unit of the minimum width */
                    minWidthUnit: DimensionUnit;
                    /** classList for the control representation of the item */
                    classList: string[];
                    /** Permissions for the created Control  */
                    accessRight: AccessControl[];
                    /** Layout for time elements */
                    timeDisplayLayout?: 'Time' | 'Date' | 'TimeDateSingleLine' | 'TimeDateMultiLine' | 'DateTimeSingleLine' | 'DateTimeMultiLine';
                    /** Filter for the Eventline */
                    filter?: Filter;
                    /** target region for the click event of the eventline image and text */
                    targetRegion?: string;
                    /** target content for the click event of the eventline image and text */
                    targetContent?: string;
                    /** displayed text of the text item */
                    text?: string;
                    /** displayed Image of the Image item */
                    image?: string;
                    /** alternative text for the Image item image */
                    altText?: string;
                    /** desrciption text position */
                    textPosition?: 'Left' | 'Right';
                    /** element of the desrciption text */
                    textElement?: HTMLElement;
                    /** State structure for the status icon item. Map<symbol value><icon path>[] */
                    stateList?: TcHmi.Controls.Beckhoff.TcHmiStateImage.IStateStructure[];
                    /** State symbol value for the status icon */
                    stateVar?: any;
                    /** Changes the label for each localization identifier */
                    localizationMapping?: TcHmi.Controls.Beckhoff.TcHmiLocalizationSelect.ListItem[];
                    /** Runtime for the ADS state control */
                    adsRuntime?: string;
                    /** subscription interval */
                    serverInterval?: number;
                    /** server domain */
                    serverDomain?: string;
                    /** ads state images */
                    stateImages?: TcHmi.Controls.Beckhoff.TcHmiAdsState.IStateImages;
                    /** width of the icon */
                    iconWidth?: number;
                    /** unit of the icon width */
                    iconWidthUnit?: DimensionUnit;
                    /** allows the logout button of a usermanagement control */
                    allowLogout?: boolean;
                    /** allows the switch user button of a usermanagement control */
                    allowSwitchUser?: boolean;
                    /** EventDestroyFunction */
                    eventDestroyFunction?: DestroyFunction;
                    /** target region symbol */
                    targetRegionSymbol?: Symbol<TcHmi.Controls.System.TcHmiRegion>;
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiHeader.d.ts.map