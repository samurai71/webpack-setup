const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/app/index.js"),
  },
  output: {
    path: path.resolve(__dirname, ".dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
    ],
  },
  module: {
      rules: [
          {
            // Images
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '/assets/images/[name].[ext]',
                    },
                },
            },
      ],
  },
  module: {
      rules: [
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          loader: 'url-loader',
          options: {
              limit: 50000,
              mimetype: 'application/font-ttf',
              name: 'assets/fonts/[name.[ext]'
          },
      ],
  },
  module: {
      rules: [
          // JavaScript
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
      ],
  },
   
},