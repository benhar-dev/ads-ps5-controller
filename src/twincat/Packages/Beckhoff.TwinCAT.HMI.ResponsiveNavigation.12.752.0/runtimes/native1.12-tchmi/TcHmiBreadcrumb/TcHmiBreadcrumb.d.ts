declare module TcHmi {
    module Controls {
        module ResponsiveNavigation {
            class TcHmiBreadcrumb extends TcHmi.Controls.System.TcHmiControl {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __lastPageClickable: boolean | null | undefined;
                protected __fontSize: number | null | undefined;
                protected __fontSizeUnit: string | null | undefined;
                protected __fontColor: SolidColor | null | undefined;
                protected __startPageVisible: boolean | null | undefined;
                protected __showStartPageOnStartPage: boolean | null | undefined;
                protected __showDefaultStartPage: boolean | null | undefined;
                protected __startPage: string | null | undefined;
                protected __startPageText: string | null | undefined;
                protected __startPageImagePath: string | null | undefined;
                protected __spacerImage: string | null | undefined;
                protected __textVerticalAlignment: VerticalAlignment | null | undefined;
                protected __lastPathObject: object | null | undefined;
                protected __masterID: string | null | undefined;
                protected __masterControl: any | null | undefined;
                protected __path: TcHmiBreadcrumb.IPathElement[] | null | undefined;
                protected __elementTemplateRoot: JQuery | null | undefined;
                protected __elementPathDisplayContainer: JQuery | null | undefined;
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                protected __clearAll(): void;
                clearDisplay(): void;
                setMasterID(valueNew: string | null): void;
                protected __callOnPageCalled(eventName: string | null, dataId: string | null, page: string | null): void;
                protected __showStartPage(): void;
                protected __setContainerAlignment(container: HTMLElement): void;
                showPath(pathObject: TcHmiBreadcrumb.IPathElement[] | null | undefined): void;
                protected __addStartPage(bStandAlone: boolean): HTMLAnchorElement;
                protected __getColorOfColorObject(colorObject: SolidColor | null | undefined): string | null;
                protected __rgb2hex(rgb: string): string;
                setLastPageClickable(valueNew: boolean | null): void;
                getLastPageClickable(): boolean | null | undefined;
                protected __processLastPageClickable(): void;
                setStartPageVisible(valueNew: boolean | null): void;
                getStartPageVisible(): boolean | null | undefined;
                protected __processStartPageVisible(): void;
                setShowStartPageOnStartPage(valueNew: boolean | null): void;
                getShowStartPageOnStartPage(): boolean | null | undefined;
                protected __processShowStartPageOnStartPage(): void;
                setStartPage(valueNew: string | null): void;
                getStartPage(): string | null | undefined;
                protected __processStartPage(): void;
                setStartPageText(valueNew: string | null): void;
                getStartPageText(): string | null | undefined;
                protected __processStartPageText(): void;
                setStartPageImage(valueNew: string | null): void;
                getStartPageImage(): string | null | undefined;
                protected __processStartPageImage(): void;
                setShowDefaultStartPage(valueNew: boolean | null): void;
                getShowDefaultStartPage(): boolean | null | undefined;
                protected __processShowDefaultStartPage(): void;
                setSpacerImage(valueNew: string | null): void;
                getSpacerImage(): string | null | undefined;
                protected __processSpacerImage(): void;
                setFontSize(valueNew: number | null): void;
                getFontSize(): number | null | undefined;
                protected __processFontSize(): void;
                setTextVerticalAlignment(valueNew: VerticalAlignment | null): void;
                getTextVerticalAlignment(): VerticalAlignment | null | undefined;
                protected __processTextVerticalAlignment(): void;
                setFontSizeUnit(valueNew: string | null): void;
                getFontSizeUnit(): string | null | undefined;
                protected __processFontSizeUnit(): void;
                setFontColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the FontColor object resolver.
                 */
                protected __onResolverForFontColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor | null>) => void;
                getFontColor(): SolidColor | null | undefined;
                protected __processFontColor(): void;
                setPath(valueNew: TcHmiBreadcrumb.IPathElement[]): void;
                /**
                 * The watch callback for the Path object resolver.
                 */
                protected __onResolverForPathWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiBreadcrumb.IPathElement[]>) => void;
                getPath(): TcHmiBreadcrumb.IPathElement[] | null | undefined;
                protected __processPath(): void;
            }
            module TcHmiBreadcrumb {
                interface IPathElement {
                    name: string;
                    event?: string;
                    page?: string;
                    data?: string;
                    clickable?: boolean;
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiBreadcrumb.d.ts.map