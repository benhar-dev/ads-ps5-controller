declare module TcHmi {
    module Functions {
        module BaseTemplate {
            function ResponsiveBehaviour(mediaQueries: MediaQuery[], affectedControls: affectedControl[]): string;
            namespace ResponsiveBehaviour {
                var currentMediaQuery: Object;
            }
            interface MediaQuery {
                name: string;
                maxWidth: number;
                minWidth: number;
                maxHeight: number;
                minHeight: number;
                controlBehaviourList: controlBehaviour[] | null;
            }
            interface controlBehaviour {
                controlType: string;
                controlID: string;
                displayOption: 'full' | 'icons' | 'burger_top' | 'burger_bottom';
            }
            interface affectedControl {
                controlID: string;
                position: 'Top' | 'Bottom' | 'Left' | 'Right' | 'Center';
                onlyIconsSize: null | number;
                defaultHeight: number | string | null;
                defaultWidth: number | string | null;
                defaultTop: number | string | null;
                defaultBottom: number | string | null;
                defaultLeft: number | string | null;
                defaultRight: number | string | null;
            }
        }
    }
}
//# sourceMappingURL=TcHmiResponsiveBehaviour.d.ts.map