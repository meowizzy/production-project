import path from 'path';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/types/config";

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode || "development";
    const isDev: boolean = mode === "development";
    const PORT: number = env.port || 3000;
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });
};