declare module TcHmi {
    module Controls {
        module System {
            class TcHmiContent extends TcHmi.Controls.System.TcHmiPartial {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
            }
        }
    }
}
//# sourceMappingURL=TcHmiContent.d.ts.map