const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const publicPath = "/static/bundles/";

/*
 * -----------------------
 * 		ENTRY POINT
 * -----------------------
 */
const entry = {
    Common: "./app/src/index.js",
}
/*
 * -----------------------
 * 		OUTPUT POINT
 * -----------------------
 */
const output = {
    //where you want your compiled bundle to be stored
    path: path.resolve(__dirname, "./app/bundles/"),
    //naming convention webpack should use for your files
    filename: "[name]/[hash:12].js", 
    publicPath: publicPath,
};
/*
 * -----------------------
 * 		OPTIMIZATION
 * -----------------------
 */
const optimization = {
	// minimize: true,
	splitChunks: {
		cacheGroups: {
			commons: {
				test: /[\\/]node_modules[\\/]/,
				name: "Vendor",
				chunks: "all"
			}
		}
	}
};
/*
 * -----------------------
 * 		   MODULES
 * -----------------------
 */
const modules = {
    rules: [
        // javascript
        {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /.*node_modules\/((?!bootstrap\/js\/src).)*$/,
            query: {
                compact: false
            },
        },

        // sass | scss | css
        {
            test: /\.(sa|sc|c|)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath:"/static/bundles/",
                        hmr: process.env.NODE_ENV === "development",
                        // if hmr does not work, this is a forceful method.
                        reloadAll: true,
                    }
                },
                {
                    loader: "css-loader", // translates CSS into CommonJS modules
                    options: {
                        sourceMap: true,
                    }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: true,
                        plugins: function () {
                            return [
                                require("precss"),
                                require("autoprefixer"),
                                require("cssnano")({
                                    autoprefixer: true,
                                    discardComments: {
                                        removeAll: true
                                    },
                                    safe: true,
                                }),
                            ];
                        }
                    }
                },
                {
                    loader: "sass-loader", // compiles SASS to CSS
                    options: {
                        sourceMap: true,
                    }
                }
            ],
        },

        // url-loader(for images)
        {
            test: /\.(png|jpe?g|gif|svg|)$/i,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 100000,
                    name: "[name].[md5:hash:hex:12].[ext]",
                    outputPath: "./media/images/"
                },
            }],
        },

        // url-loader(for fonts)
        {
            test: /\.(woff|woff2|eot|ttf|otf|)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 10000,
                    // ManifestStaticFilesStorage reuse.
                    // name: "[name].[md5:hash:hex:12].[ext]",
                    name: "[hash:12].[ext]",
                    outputPath: "./media/fonts/"
                }
            }]
        },
    ]
};
/*
 * -----------------------
 * 		  PLUGINS
 * -----------------------
 */
const plugins = [
    //tells webpack where to store data about your bundles.
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
    }),
    new MiniCssExtractPlugin({
        filename: "[name]/[hash:12].css",
        chunkFilename: "[id].css",
    }),
    new BundleTracker({
        filename: "./webpack-stats.json"
    }),
    new CleanWebpackPlugin(),
];
/*
 * -----------------------
 * 		  RESOLVE
 * -----------------------
 */
const resolve = {
    //tells webpack where to look for modules
    modules: ["static/bundles/", "node_modules"],
    //extensions that should be used to resolve modules
    extensions: [".js", ".jsx", ".scss"]
};
/*
 * -----------------------
 * 		  OTHERS
 * -----------------------
 */
const node = {
    fs: "empty"
};
const devtool = "source-map"

/*
 * =======================
 * 	    EXPORT MODULES
 * =======================
 */
module.exports = {
    mode: "development",
    context: __dirname,
    entry: entry,
    output: output,
    plugins: plugins,
    optimization: optimization,
    module: modules,
    node: node,
    devtool: devtool,
    resolve: resolve
};
