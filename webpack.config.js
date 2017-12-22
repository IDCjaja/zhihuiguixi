var  Webpack=require("webpack");
module.exports={
    entry:["./src/index.js"],
    output:{
        path:__dirname,
        filename:"./dist/bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/,
                loader:"babel"
            },
            {
                test: /\.(scss|css)$/,
                use:[ 'style-loader','css-loader','sass-loader']
            },
            {   test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose?jQuery!expose?$'
             }
        ]
      },
}