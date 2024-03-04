import path from "path";
import fs from "fs";
import matter from "gray-matter";


export function getBloggdata({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(
      path.join("blogdata", slug + ".mdx"),
      "utf-8"
    );
    const { data: frontMatter, content } = matter(markdownFile);

    return {
      frontMatter,
      slug,
      content,
    };
  }
