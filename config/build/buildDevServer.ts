import { BuildOptions } from "../types/config";
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration  {
    return {
        compress: true,
        port: options.port,
        historyApiFallback: true
    }
}