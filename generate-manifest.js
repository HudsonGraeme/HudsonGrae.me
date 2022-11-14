const parseMarkdownWithYamlFormatter = (markdown) => {
  const metaRegExp = new RegExp(/^---[\n\r](((?!---).|[\n\r])*)[\n\r]---$/m);

  // "rawYamlHeader" is the full matching string, including the --- and ---
  // "yamlVariables" is the first capturing group, which is the string content between the --- and ---
  const [rawYamlHeader, yamlVariables] = metaRegExp.exec(markdown) ?? [];

  if (!rawYamlHeader || !yamlVariables) {
    return { metadata: markdown };
  }

  const keyValues = yamlVariables.split('\n');

  const formatter = Object.fromEntries(
    keyValues.map((keyValue) => {
      const splitted = keyValue.split(':');
      const [key, value] = splitted;

      return [key ?? keyValue, value?.trim() ?? ''];
    })
  );

  return {
    metadata: { ...formatter },
    markdown: markdown.replace(rawYamlHeader, '').trim(),
  };
};
const fs = require('fs');
try {
  const metadata = fs.readdirSync('./public/content/').map((file) => {
    return {
      ...parseMarkdownWithYamlFormatter(
        fs.readFileSync('./public/content/' + file, { encoding: 'utf8' })
      ).metadata,
      filename: file,
    };
  });
  console.log(metadata);
  fs.writeFileSync(
    './src/common/manifest.json',
    JSON.stringify(metadata) + '\n'
  );
} catch (e) {
  console.error('Failed to generate manifest from content', e);
}
