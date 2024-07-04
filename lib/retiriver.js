import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function separator2(filePath) {
  const buffer = await readFile(filePath, "utf8");
  const {
    content,
    data: { Metatitle, Pagetitle, Pagedescription, Metadescription },
  } = matter(buffer);

  const renderer = new marked.Renderer();

  marked.setOptions({ renderer });
  const text = marked.parse(content);

  return {
    Metatitle,
    Pagetitle,
    Pagedescription,
    Metadescription,
    text,
  };
}