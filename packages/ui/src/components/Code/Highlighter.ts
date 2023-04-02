import {
  PrismAsyncLight as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'

import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import md from 'react-syntax-highlighter/dist/esm/languages/prism/markdown'
import rust from 'react-syntax-highlighter/dist/esm/languages/prism/rust'
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import yml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'

SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('markdown', md)
SyntaxHighlighter.registerLanguage('rust', rust)
SyntaxHighlighter.registerLanguage('typescript', ts)
SyntaxHighlighter.registerLanguage('yaml', yml)

export { SyntaxHighlighter, type SyntaxHighlighterProps }
