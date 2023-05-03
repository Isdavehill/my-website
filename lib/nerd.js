import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const NerdDirectory = path.join(process.cwd(), 'nerd-stuff');

const getCleanedthoughtFileNames = () => {
  const fileNames = fs.readdirSync(NerdDirectory);
  return fileNames.filter(fileName => fileName !== '.DS_Store');
};

export const getSortedNerdData = () => {
  const fileNames = getCleanedthoughtFileNames();
  const allNerdData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(NerdDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the thought metadata section
    const matterResult = matter(fileContents);

    // convert the date to a string
    matterResult.data.date = matterResult.data.date.toString();

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });

  return allNerdData
    .filter(thought => thought.published === null || thought.published !== false)
    .sort((a, b) => {
      return new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1;
    });
};

export const getAllThoughtIds = () => {
  const fileNames = getCleanedthoughtFileNames();
  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.mdx/, '')
    }
  }));
};

export const getThoughtData = async id => {
  const fullPath = path.join(NerdDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  matterResult.data.date = matterResult.data.date.toString();

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  };
};

export const getAllNerdXmlData = async () => {
  const fileNames = getCleanedthoughtFileNames();
  const allNerdData = await Promise.all(
    fileNames.map(async fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(NerdDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the thought metadata section
      const matterResult = matter(fileContents);

      // convert the date to a string
      matterResult.data.date = matterResult.data.date.toString();

      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      // Combine the data with the id
      return {
        id,
        contentHtml,
        ...matterResult.data
      };
    })
  );

  return allNerdData
    .filter(thought => thought.published === null || thought.published !== false)
    .sort((a, b) => {
      return new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1;
    });
};