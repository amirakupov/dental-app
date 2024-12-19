const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({ hostname: "https://dental-ladstaetter.at" });

const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
];

routes.forEach((route) => sitemap.write(route));
sitemap.end();

streamToPromise(sitemap)
  .then((data) => {
    const writeStream = createWriteStream("./public/sitemap.xml");
    writeStream.write(data.toString());
    writeStream.end();
    console.log("Sitemap generated!");
  })
  .catch((err) => console.error(err));
