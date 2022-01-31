declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * Checks if a specific symbol exists
             * @param ctx An object holding functions for success and error.
             * @param symbol
             */
            function SymbolExists(ctx: Required<TcHmi.Context<boolean>>, symbol: TcHmi.Symbol | null): void;
        }
    }
}
//# sourceMappingURL=SymbolExists.d.ts.map