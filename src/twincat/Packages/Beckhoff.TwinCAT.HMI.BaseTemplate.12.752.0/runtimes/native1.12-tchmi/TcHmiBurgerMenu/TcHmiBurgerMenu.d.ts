declare module TcHmi {
    module Controls {
        module BaseTemplate {
            class TcHmiBurgerMenu extends TcHmi.Controls.Beckhoff.TcHmiToggleButton {
                #private;
                /**
                 * Constructor of the control
                 * @param element Element from HTML (internal, do not use)
                 * @param pcElement precompiled Element (internal, do not use)
                 * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** the control wich will be affected by this control */
                protected __targetControl: TcHmi.Controls.System.TcHmiControl | null | undefined;
                /** top most layer control container*/
                protected __targetControlContainer: HTMLElement;
                /** top most layer control container*/
                protected __targetControlContainer_2: HTMLElement;
                /** target Control parent */
                protected __targetControl_Parent: JQuery | null | undefined;
                /**Save the current target control on Theme Change */
                protected __targetControlSave: TcHmi.Controls.System.TcHmiControl | null | undefined;
                /**boolean to show if dropdownbox is open */
                protected __dropdownboxOpen: boolean;
                /** registered and destroyed only while topmostlayer interaction */
                protected __resizedEventDestroyEvent: DestroyFunction | null;
                /** registered and destroyed only while topmostlayer interaction */
                protected __movedEventDestroyEvent: DestroyFunction | null;
                /**Destroy function for the onPressed event of this control */
                protected __onPressedDestroyEvent: DestroyFunction | null;
                /**Destroy function for the on Theme Changed event */
                protected __themeChangedDestroyFunction: DestroyFunction | null;
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
                * onPressed function for this control
                */
                protected __onPressed(): (event: EventProvider.Event) => void;
                /**
                 * function to build or destroy Popup
                 * @param valueNew? Toogles the dropdown
                 */
                protected __setDropDownboxOpen(valueNew?: boolean): void;
                /**
                  * grab the Target Control and remove it from the DOM
                  */
                protected __grabTargetControl(): void;
                /**
                  * Replace the target Control to the original position
                  */
                protected __replaceTargetControl(): void;
                /**
                  * set the container size to the target control size
                  */
                protected __setContainerSize(): void;
                /**
                  * save the current target control on theme change because it might be set to null
                  */
                protected __onThemeChanged(): () => void;
                /**
                  * save the current target control on theme change because it might be set to null
                  */
                protected __onWindowResize(): () => void;
                /**
                 * Sets the content value and calls the associated process function (__processTargetControl).
                 * @param  valueNew The new value for the content attribute as string. Relative path value.
                 */
                setTargetControl(valueNew: any | null): void;
                /**
                * Returns the current targetControl value.
                * @returns The current value of the content member variable as string. Relative path value.
                */
                getTargetControl(): System.TcHmiControl | null | undefined;
                __processTargetControl(): void;
            }
        }
    }
}
//# sourceMappingURL=TcHmiBurgerMenu.d.ts.map