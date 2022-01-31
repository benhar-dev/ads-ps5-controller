declare module TcHmi {
    module Controls {
        module BaseTemplate {
            class TcHmiBreadcrumb extends TcHmi.Controls.System.TcHmiControl {
                #private;
                /**
                 * Constructor of the control
                 * @param element Element from HTML (internal, do not use)
                 * @param pcElement precompiled Element (internal, do not use)
                 * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /**HTML-Templateelements */
                protected __elementTemplateRoot: HTMLElement;
                /**TcHmiBreadcrumb data */
                protected __breadcrumbData: TcHmiBreadcrumb.INavigationItem[];
                /**breadcrumb button array */
                protected __breadcrumbButtons: TcHmi.Controls.Beckhoff.TcHmiButton[];
                /**Callback function */
                protected __callback: (content: string) => void;
                /**EventDestroyFunction array for breadcrumb buttons  */
                protected __breadcrumbEvents: DestroyFunction[];
                /**standard text color */
                protected __textColor: SolidColor | null | undefined;
                /**text font size of the breadcrumb buttons */
                protected __textFontSize: number | null | undefined;
                /**text font size unit of the breadcrumb buttons */
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                /**EventDestroyFunction array for breadcrumb buttons  */
                protected __resizeEventDestroyer: DestroyFunction | undefined;
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
                  * TcHmiBreadcrumb data Interface
                  */
                setBreadcrumbData(valueNew: TcHmiBreadcrumb.INavigationItem[], callback: (content: string) => void | null | undefined): void;
                /**
                * Function to create a breadcrumb button with text, icon and events.
                * @param element The structure array of the displayed elements
                */
                protected __createTcHmiBreadcrumbButton(element: TcHmiBreadcrumb.INavigationItem, backwards: boolean): TcHmi.Controls.Beckhoff.TcHmiButton | null;
                /**
                 * Reset breadcrumb data
                 */
                protected __resetTcHmiBreadcrumb(): void;
                /**
                 * breadcrumb button click function
                 * @param element clicked breadcrumb element
                 */
                protected __onBreadcrumbBtnClick(element: TcHmiBreadcrumb.INavigationItem): (event: EventProvider.Event) => void;
                /**
                  * Event callback for rezise event
                  */
                protected __onResized(): (event: TcHmi.EventProvider.Event) => void;
                /**
                * Sets the font size and calls the associated process function (processTextFontSize).
                * @param valueNew The new value for textFontSize.
                */
                setTextFontSize(valueNew: number | null): void;
                /**
                * Returns the current value of textFontSize.
                * @returns The current value of textFontSize.
                */
                getTextFontSize(): number | null | undefined;
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
                protected __processTextColor(): void;
            }
        }
        module TcHmiBreadcrumb {
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
//# sourceMappingURL=TcHmiBreadcrumb.d.ts.map